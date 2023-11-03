import {postToParent, onMessage} from '../messaging.js';

// This is really stateful code and requires being cautious around DOM mutation and listeners,
// so it's set up in a way to separate state updates from effects.
// The `update` function takes the current state, the next state, and an array of effects
// functions to run on each state update. In addition to those effects functions, it will
// also run setForwardAndBackButtonAttributes and setFilePathInURLBar on each update.
// these effects functions are called with the previous state and next state, so that they can
// act appropriately.

let state = {};

const initializeState = ({
    baseUrl,
    path,
    mainFile,
    backStack,
    forwardStack,
    contentIFrame,
    canSave,
}) => {
    state = {
        baseUrl,
        mainFile,
        path,
        backStack,
        forwardStack,
        contentIFrame,
        canSave,
    };
    return state;
};

const update = (state, newState, effects = []) => {
    const nextState = {...state, ...newState};
    const fx = [...effects, setForwardAndBackButtonAttributes, setFilePathInURLBar];
    fx.forEach(effect => effect(nextState, state));
    return nextState;
};

// fx
const setForwardAndBackButtonAttributes = ({forwardStack, backStack}) => {
    const forwardButtonDisabled = forwardStack.length === 0;
    const backButtonDisabled = backStack.length === 0;
    const forwardButton = document.getElementById('forward-button');
    const backButton = document.getElementById('back-button');
    forwardButtonDisabled
        ? forwardButton.setAttribute('disabled', true)
        : forwardButton.removeAttribute('disabled');
    backButtonDisabled
        ? backButton.setAttribute('disabled', true)
        : backButton.removeAttribute('disabled');
};

const setFilePathInURLBar = ({path}) => {
    document.getElementById('url-input').value = path;
};

const replaceContentIFrame = (baseUrl, path) => {
    if (baseUrl === undefined) {
        if (state.baseUrl === undefined) {
            postToParent({
                type: 'program_stderr',
                stderr: 'Invalid URL',
            });
        } else {
            baseUrl = state.baseUrl;
        }
    }

    if (path === undefined) {
        return;
    }

    // remove any existing IFrames
    var prevIframe = document.querySelector('iframe');
    if (prevIframe) {
        prevIframe.remove();
    }

    const contentIFrame = document.createElement('iframe');
    contentIFrame.id = 'content-destination';
    contentIFrame.src = `${baseUrl}/${path}`;
    document.getElementById('website').appendChild(contentIFrame);
    window.chs.console.render();

    contentIFrame.contentWindow.addEventListener('unload', function hook(e) {
        setTimeout(function() {
            // NOTE: i think this handles tricky case for first page load. it may be the
            // case that setting the src attribute of an iframe triggers the unload event
            // from an empty page to the src page. whether this is true or not, there is
            // a situation where the contentWindow can be null! this check handles that.
            if(contentIFrame.contentWindow) {
                window.chs.console.hook();
                contentIFrame.contentWindow.addEventListener('unload', hook);
            }
        }, 0);
    });

    contentIFrame.addEventListener('load', e => {
        let currentFile = contentIFrame.contentWindow.location.pathname.replace('/', '');
        state = update(state, followPath(state, currentFile), []);
    });
    // post a program_started to clear any errors
    postToParent({type: 'program_started'});
    return contentIFrame;
};

const setContentIFrameSrcFromState = ({baseUrl, path}) => {
    replaceContentIFrame(baseUrl, path);
};

// state update functions
const followPath = ({backStack, forwardStack, path: previousPath}, newPath) => {
    let nextBackStack = backStack.slice();
    let nextForwardStack = forwardStack.slice();
    const changedPath = previousPath !== newPath;
    if (changedPath) {
        nextBackStack = nextBackStack.concat(previousPath);
        nextForwardStack = [];
    }
    return {
        forwardStack: nextForwardStack,
        backStack: nextBackStack,
        path: newPath,
    };
};

const stackShiftRightToLeft = (leftStack, rightStack, current) => {
    const topFromRightStack = rightStack.slice(-1)[0];
    return [
        topFromRightStack,
        leftStack.concat(current),
        rightStack.slice(0, rightStack.length - 1),
    ];
};

const backButtonClicked = ({backStack, forwardStack, path}) => {
    if (backStack.length === 0) {
        return {};
    }
    const [nextPath, nextForwardStack, nextBackStack] = stackShiftRightToLeft(
        forwardStack,
        backStack,
        path
    );
    return {
        backStack: nextBackStack,
        forwardStack: nextForwardStack,
        path: nextPath,
    };
};

const forwardButtonClicked = ({forwardStack, backStack, path}) => {
    const [nextPath, nextBackStack, nextForwardStack] = stackShiftRightToLeft(
        backStack,
        forwardStack,
        path
    );
    return {
        backStack: nextBackStack,
        forwardStack: nextForwardStack,
        path: nextPath,
    };
};

const createNavigationBar = () => {
    const saveThen = callback => {
        if (!state.canSave) {
            callback();
            return;
        }

        const refreshButton = document.getElementById('refresh-button');
        refreshButton.classList.add('saving');
        postToParent({type: 'save'});
        onMessage(
            'save_completed',
            () => {
                refreshButton.classList.remove('saving');
                callback();
            },
            {once: true}
        );
    };

    const desiredTree = [
        {
            el: 'div',
            id: 'url-bar-container',
            children: [
                {
                    el: 'button',
                    id: 'back-button',
                    onClick: () => {
                        saveThen(() => {
                            state = update(state, backButtonClicked(state), [
                                setContentIFrameSrcFromState,
                            ]);
                        });
                    },
                    children: [{el: 'i', className: 'fa fa-arrow-left'}],
                },
                {
                    el: 'button',
                    id: 'forward-button',
                    onClick: () => {
                        saveThen(() => {
                            state = update(state, forwardButtonClicked(state), [
                                setContentIFrameSrcFromState,
                            ]);
                        });
                    },
                    children: [{el: 'i', className: 'fa fa-arrow-right'}],
                },
                {
                    el: 'button',
                    id: 'refresh-button',
                    onClick: function () {
                        saveThen(() => {
                            state = update(state, {}, [
                                ({baseUrl, path}) => {
                                    try {
                                        // self assign to reload the iframe
                                        replaceContentIFrame(baseUrl, path);
                                    } catch (e) {
                                        if (e.name === 'SecurityError') {
                                            alert('Unable to refresh cross-origin IFrame');
                                        } else {
                                            throw e;
                                        }
                                    }
                                },
                            ]);
                        });
                    },
                    children: [{el: 'i', className: 'fa fa-repeat'}],
                },
                {
                    el: 'input',
                    id: 'url-input',
                    onKeyDown: e => {
                        if (e.key === 'Enter') {
                            saveThen(() => {
                                state = update(
                                    state,
                                    followPath(state, document.getElementById('url-input').value),
                                    [setContentIFrameSrcFromState]
                                );
                            });
                        }
                    },
                },
                {
                    el: 'button',
                    id: 'search-button',
                    onClick: () => {
                        saveThen(() => {
                            state = update(
                                state,
                                followPath(state, document.getElementById('url-input').value),
                                [setContentIFrameSrcFromState]
                            );
                        });
                    },
                    children: [{el: 'i', className: 'fa fa-search'}],
                },
                {
                    el: 'button',
                    id: 'open-button',
                    onClick: () => {
                        saveThen(() => {
                            state = update(state, {}, [
                                state =>
                                    window.open(`${state.baseUrl}/${state.path}`, '_blank').focus(),
                            ]);
                        });
                    },
                    children: [{el: 'i', className: 'fa fa-external-link'}],
                },
            ],
        },
    ];
    let root = document.getElementById('navigation');
    const hydrateDesiredTree = (desiredTree, root) => {
        desiredTree.forEach(({el, id, className, children, onClick, onKeyDown}) => {
            const element = document.createElement(el);
            id && (element.id = id);
            className && (element.className = className);
            onClick && element.addEventListener('click', onClick);
            onKeyDown && element.addEventListener('keydown', onKeyDown);
            root.appendChild(element);
            children && hydrateDesiredTree(children, element);
        });
    };
    hydrateDesiredTree(desiredTree, root);
};

document.addEventListener('DOMContentLoaded', () => {
    createNavigationBar();

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if(params.hasOwnProperty('devtools')) {
        var devtoolsElm = document.getElementById('devtools');
        devtoolsElm.style.display = 'inline-block';
    }

    var devtoolsNav = document.getElementById('devtools-nav');
    devtoolsNav.addEventListener('click', function() {
        var consoleElm = document.getElementById('console');
        var consoleCollapse = document.getElementById('console-collapse-icon');
        var display = consoleElm.style.display;
        if (display !== 'inline-block') {
            consoleElm.style.display = 'inline-block';
            consoleCollapse.classList.replace('fa-angle-up', 'fa-angle-down')
        } else {
            consoleElm.style.display = 'none';
            consoleCollapse.classList.replace('fa-angle-down', 'fa-angle-up')
        }
    });
});

onMessage('eval', ({data}) => {
    const code = data.code;
    const baseUrl = data.baseUrl;
    const canSave = data.canSave;
    const mainFile = code.filter(file => {
        return file.main;
    })[0];
    const text = mainFile.text;
    let backStack = [];
    let forwardStack = [];

    const contentIFrame = replaceContentIFrame(baseUrl, mainFile.name);
    const initialState = update(
        {},
        initializeState({
            baseUrl,
            path: mainFile.name,
            backStack,
            forwardStack,
            contentIFrame,
            canSave,
        })
    );
    setForwardAndBackButtonAttributes(initialState);

    if (baseUrl) {
        setContentIFrameSrcFromState(initialState);
    } else {
        contentIFrame.src = '';
        let contentDocument = contentIFrame.contentDocument;
        contentDocument.open();
        contentDocument.write(text);
        contentDocument.close();
    }
    postToParent({type: 'program_started'});
});

onMessage('program_completed', () => {
    postToParent({type: 'program_completed'});
});
