(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{239:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=239},240:function(e,t){},245:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"default",(function(){return S}));var i=a(9),r=a(2),s=a(11),n=a(10),o=a(17),l=a(18),c=a(14),u=a(15),d=a(1),p=a(6),h=a.n(p),f=a(16),v=a(21),b=a(8),m=a(3),g=a(233),C=a(237),O=a.n(C);a(234),e.Firebase=g.a;var y=function(){function e(t){var a=t.color,i=t.index,r=t.label,s=t.session;Object(c.a)(this,e),this.index=i,this.session=s,this.markerElement=document.createElement("div"),this.tooltipElement=document.createElement("div"),this.tooltipElement.className=h.a.cursorLabel,this.tooltipElement.style.background=a,this.tooltipElement.style.opacity="0",this.tooltipElement.innerHTML=r,this.markerElement.append(this.tooltipElement),this.tooltipTimeout=null,this.updateListener=this.handleAceUpdate.bind(this),s.on("change",this.updateListener)}return Object(u.a)(e,[{key:"handleAceUpdate",value:function(e){var t=this.session.doc.indexToPosition(this.index,0),a=e.start;if(Object(v.c)(t,a)>=0){var i=e.lines.reduce((function(e,t){return e+t.length}),0);i+=e.lines.length-1,this.setPosition(this.index+("remove"===e.action?-i:i),!1)}}},{key:"update",value:function(e,t,a,i){var r,s=a.doc.indexToPosition(this.index,0),n=t.$getTop(s.row,i),o=t.$padding+s.column*i.characterWidth,l=i.lineHeight;r=n<2*l?n+l:n-1.5*l;var c=o;this.tooltipElement.style.top="".concat(r,"px"),this.tooltipElement.style.left="".concat(c,"px"),this.markerElement.remove(),t.elt("remote-cursor",""),(t.element.childNodes[t.i-1]||t.element.lastChild).appendChild(this.markerElement)}},{key:"setPosition",value:function(e,t){this.index=e,this.requestSessionUpdate(),t&&(this.tooltipElement.style.opacity="1",this.scheduleFadeout())}},{key:"requestSessionUpdate",value:function(){this.session._signal("changeFrontMarker")}},{key:"scheduleFadeout",value:function(){var e=this;null!==this.tooltipTimeout&&clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout((function(){e.tooltipElement.style.opacity="0",e.tooltipTimeout=null}),1e3)}},{key:"cleanup",value:function(e){this.session.removeMarker(e),this.markerElement.remove(),this.session.off("change",this.updateListener)}}]),e}(),S=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={displayName:i.props.collaborateState.name||"Guest",userColor:"#000000",firebaseCallbacks:[],firebase:null,dbRef:i.props.collaborateState.dbRef||null,firepad:null,avatarURL:"codehs.com/identicon/image/".concat(Math.floor(1e3*Math.random())),cursorMap:{},labelMap:{},populateOnJoin:!1},i.firepadConfig={apiKey:"AIzaSyDZ7uKqDiym4LLCffAITm-IcYpQie3i3Ew",authDomain:"chs-collab.firebase.com",databaseURL:"https://collaborate-fcd82-b6c9e.firebaseio.com/"},i.firepad=null,i.fileAdapters={},i}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){var e,t;null===(e=this.state)||void 0===e||null===(t=e.firebase)||void 0===t||t.delete()}},{key:"componentDidMount",value:function(){this.props.collaborateState.state===m.g.SYNCING_FILE_TREE&&this.syncFileTree()}},{key:"shouldComponentUpdate",value:function(e,t){var a=b.j(e.files,!0),i=b.j(this.props.files,!0),r=a.length!==i.length||!Object(f.isEqual)(a.map((function(e){return e.name})).sort(),i.map((function(e){return e.name})).sort())||e.activeFileIndex!==this.props.activeFileIndex,s=!Object(f.isEqual)(t.cursorMap,this.state.cursorMap),n=e.collaborateState.chat.createdMessage!==this.props.collaborateState.chat.createdMessage&&null!==e.collaborateState.chat.createdMessage;return e.collaborateState.state!==this.props.collaborateState.state||!Object(f.isEqual)(t.activeUsers,this.state.activeUsers)||t.displayName!==this.state.displayName||e.selectedFilePath!==this.props.selectedFilePath||r||s||n||e.collaborateState.isEnabled!==this.props.collaborateState.isEnabled}},{key:"componentDidUpdate",value:function(e,t){var a=b.j(e.files,!0),i=b.j(this.props.files,!0);if(this.props.collaborateState.state!==m.g.SYNCING_FILE_TREE){if(this.createOrJoinSession(e,i),null!==this.props.selectedFilePath&&this.firepad.client_.state instanceof O.a.Client.Synchronized){var r=b.k(this.props.files,this.props.selectedFilePath);this.setAdapter(r.stringPath)}var s=this.getFileTreeDiff(a,i),o=Object(n.a)(s,4),l=o[0],c=o[1],u=o[2],d=o[3];if(this.props.collaborateState.state===m.g.CONNECTED&&d){var p=this.state.firebase.database().ref(this.state.dbRef).child("fileStructure");this.updateAdapters({createdFiles:l,deletedFiles:c,renamedFiles:u,isHost:!0}),p.set(this.filesToFirebaseRepresentation(this.props.files))}if(!Object(f.isEqual)(t.cursorMap,this.state.cursorMap)&&this.redrawCursorLabels({previousCursorMap:t.cursorMap,currentCursorMap:this.state.cursorMap}),null!==this.props.collaborateState.chat.createdMessage&&this.onMessageCreated(this.props.collaborateState.chat.createdMessage),e.collaborateState.isEnabled!==this.props.collaborateState.isEnabled)this.state.dbRef.child("isEnabled").set(this.props.collaborateState.isEnabled)}else this.syncFileTree()}},{key:"filesToFirebaseRepresentation",value:function(e){return b.j(e,!0).map((function(e){var t,a,i,r;return{name:e.name,hidden:null!==(t=e.hidden)&&void 0!==t&&t,shouldSave:null===(a=e.shouldSave)||void 0===a||a,readOnly:null!==(i=e.readOnly)&&void 0!==i&&i,main:null!==(r=e.main)&&void 0!==r&&r}}))}},{key:"setupAdapter",value:function(e){var t=this,a=e.ref,i=e.filePath,r=e.initialContent,s=void 0===r?null:r,n=e.userColor,o=void 0===n?"#000000":n,l=e.fpAdapter,c=this.firepad.client_;if(void 0===l){if((l=new O.a.FirebaseAdapter(a,this.props.collaborateState.userID,o)).isAdapterForActiveFile=!1,null!==s){var u=new O.a.TextOperation;u.insert(s),l.on("ready",(function(){l.sendOperation(u)}))}}else{l.isAdapterForActiveFile=!0;["ack","retry","operation","cursor"].forEach((function(e){l.eventListeners_[e]=[]}))}this.fileAdapters[i]=l,l.registerCallbacks({ack:function(){l.isAdapterForActiveFile&&(c.serverAck(),c.focused&&c.state instanceof O.a.Client.Synchronized&&(c.updateCursor(),c.sendCursor(c.cursor)),c.emitStatus())},retry:function(){l.isAdapterForActiveFile&&c.serverRetry()},operation:function(e){if(l.isAdapterForActiveFile)c.applyServer(e);else if(e.ops.length>0){var a=l.document_.apply("");t.props.inactiveFileUpdated({stringPath:i,contents:a})}},cursor:function(e,a,i){if(l.isAdapterForActiveFile&&l.userId_!==e&&c.state instanceof O.a.Client.Synchronized){var r=c.getClientObject(e);if(a){i&&r.setColor(i),r.updateCursor(O.a.Cursor.fromJSON(a));var s=void 0!==t.props.collaborateState.activeUsers[e]?t.props.collaborateState.activeUsers[e].name:"Guest";t.updateCursorLabel({cursor:a,userName:s,userID:e,userColor:i})}else r.removeCursor()}}})}},{key:"setAdapter",value:function(e){var t=this.fileAdapters[e],a=this.firepad.client_,i=void 0===t,r=a.serverAdapter===t;if(!i&&!r){var s=this.props.aceRef,o=a.serverAdapter;Object.entries(a.clients).forEach((function(e){"function"==typeof e.removeCursor&&e.removeCursor()})),a.clients={},Object.entries(s.editor.session.getMarkers()).forEach((function(e){var t=Object(n.a)(e,2),a=t[0];t[1].clazz.startsWith("other-client")&&s.editor.session.removeMarker(a)}));var l=t.document_.apply("");o.isAdapterForActiveFile=!1,t.isAdapterForActiveFile=!0,a.editorAdapter.ignoreChanges=!0,s.ignoreChanges=!0,s.editor.setValue(l,-1);var c=b.f(e);s.editor.session.setMode("ace/mode/".concat(c)),a.serverAdapter=t,this.firepad.firebaseAdapter_=t,a.editorAdapter.grabDocumentState(),a.undoManager=new O.a.UndoManager,a.editorAdapter.ignoreChanges=!1,s.ignoreChanges=!1,this.state.dbRef.child("users").child(this.props.collaborateState.userID).child("activeFilename").set(e),this.props.fileAdapterChanged()}}},{key:"createOrJoinSession",value:function(e,t){var a=this,i=e.collaborateState.state===m.g.SYNCING_FILE_TREE&&this.props.collaborateState.state===m.g.CONNECTION_REQUESTED,r=e.collaborateState.state===m.g.UNINITIALIZED&&this.props.collaborateState.state===m.g.CONNECTION_REQUESTED;if(i||r){var n,o=this.props.aceRef,l=r?g.a.initializeApp(this.firepadConfig):this.state.firebase;n=i?this.state.dbRef:l.database().ref().push();var c,u=Object(s.a)(t).sort((function(e,t){return e.isActive?-1:t.isActive?1:0})).filter((function(e){return void 0===e.files})),d=n.child("content"),p="#000000";u.forEach((function(e){var t=b.e(e.stringPath),i=d.child(t);if(e.isActive){c=t;var s=o.editor.getValue(),n=a.state.populateOnJoin&&e.text||s;o.ignoreChanges=!0,o.editor.setValue("",-1),a.firepad=O.a.fromACE(i,a.props.aceRef.editor,{userId:a.props.collaborateState.userID,defaultText:n}),o.ignoreChanges=!1;var l=a.firepad.firebaseAdapter_;p=l.color_,a.setupAdapter({ref:i,filePath:e.stringPath,userColor:p,fpAdapter:l})}else{var u=a.state.populateOnJoin?e.text||null:r?e.text:null;a.setupAdapter({ref:i,filePath:e.stringPath,initialContent:u,userColor:p})}})),this.setState({userColor:p,firebase:l,dbRef:n,populateOnJoin:!1});var h=l.database().ref(n).child("fileStructure");r&&h.set(this.filesToFirebaseRepresentation(this.props.files)),this.firebaseOn_(h,"value",this.updateFiles.bind(this)),this.props.firepadConnected({dbRef:n.key});var f=n.child("users"),v=n.child("messages"),C=f.child(this.props.collaborateState.userID);C.child("activeFilename").set(c),this.firebaseOn_(f.root.child(".info/connected"),"value",(function(e){e.val()&&a.state.displayName&&(C.child("name").set(a.state.displayName),C.child("avatarURL").set(a.props.collaborateState.avatarURL),C.child("color").set(p),C.onDisconnect().remove())})),this.firebaseOn_(f,"child_added",this.onUserChanged.bind(this)),this.firebaseOn_(f,"child_changed",this.onUserChanged.bind(this)),this.firebaseOn_(f,"child_moved",this.onUserChanged.bind(this)),this.firebaseOn_(f,"child_removed",this.onUserRemoved.bind(this)),this.firebaseOn_(v,"child_added",this.onMessageReceived.bind(this));var y=n.child("isEnabled");this.firebaseOn_(y,"value",this.onCollaborationDisabled.bind(this)),y.set(!0)}}},{key:"syncFileTree",value:function(){var e,t=this,a=g.a.initializeApp(this.firepadConfig),i=a.database().ref(this.state.dbRef),r=i.child("fileStructure"),s=i.child("content"),n=!1,o=function(){return r.once("value",(function(a){null===(e=a.val())&&(n=!0,r.set(t.filesToFirebaseRepresentation(t.props.files)))})).then((function(){t.setState({firebase:a,dbRef:i,populateOnJoin:n}),t.props.retrievedFileTreeFromFirebase({files:e})}))};this.props.collaborateState.isEnabled?o():r.set(null).then((function(){return s.set(null)})).then(o)}},{key:"getFileTreeDiff",value:function(e,t){var a=function(e,t){return new Set(Object(s.a)(e).filter((function(e){return!t.has(e)})))},i=new Set(e.map((function(e){return e.name}))),r=new Set(t.map((function(e){return e.name}))),n=Object(s.a)(a(r,i)).map((function(e){var a=t.find((function(t){return t.name===e}));return{name:a.name,content:a.text}})),o=Object(s.a)(a(i,r)).map((function(t){var a=e.find((function(e){return e.name===t}));return{name:a.name,content:a.text}})),l=[];if(n.length>0&&o.length>0){var c=n.sort((function(e,t){return e.name.length-t.name.length}))[0].name,u=o.sort((function(e,t){return e.name.length-t.name.length}))[0].name;l=n.map((function(e){return{oldName:e.name.replace(c,u),newName:e.name}})),n=[],o=[]}return[n,o,l,n.length>0||o.length>0||l.length>0]}},{key:"updateAdapters",value:function(e){var t=this,a=e.createdFiles,i=e.deletedFiles,r=e.renamedFiles,s=e.isHost;a=a.filter((function(e){return!e.name.endsWith("/")})),i=i.filter((function(e){return!e.name.endsWith("/")})),r=r.filter((function(e){return!e.oldName.endsWith("/")})),a.length>0&&a.forEach((function(e){var a=t.state.dbRef.child("content").child(b.e(e.name));t.setupAdapter({ref:a,filePath:e.name,userColor:t.state.userColor,initialContent:s&&e.content?e.content:null})})),i.length>0&&i.forEach((function(e){var a=t.fileAdapters[e.name];void 0!==a&&(a.dispose(),delete t.fileAdapters[e.name],s&&t.state.dbRef.child("content").child(b.e(e.name)).remove())})),r.length>0&&r.forEach((function(e){var a=e.oldName,i=e.newName,r=t.fileAdapters[a];if(void 0!==r){var n=s?r.document_.apply(""):null;r.dispose(),delete t.fileAdapters[a],s&&t.state.dbRef.child("content").child(b.e(a)).remove();var o=t.state.dbRef.child("content").child(b.e(i));t.setupAdapter({ref:o,filePath:i,initialContent:n,userColor:t.state.userColor})}}))}},{key:"onUserChanged",value:function(e,t){var a=e.key,i=e.child("name").val(),r=e.child("color").val(),s=e.child("avatarURL").val(),n=e.child("activeFilename").val(),o=e.child("cursor").val();o&&this.updateCursorLabel({cursor:o,name:i,userID:a,color:r}),this.props.updateUser({userID:a,name:i,color:r,avatarURL:s,activeFilename:n})}},{key:"onUserRemoved",value:function(e){var t=e.key;this.props.removeUser({removedUserID:t}),Object.hasOwnProperty.call(this.state.labelMap,t)&&this.state.labelMap[t].labelMarker.cleanup(this.state.labelMap[t].markerID),this.setState({labelMap:Object.entries(this.state.labelMap).reduce((function(e,a){var s=Object(n.a)(a,2),o=s[0],l=s[1];return o===t?e:Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},o,l))}),{}),cursorMap:Object.entries(this.state.cursorMap).reduce((function(e,a){var s=Object(n.a)(a,2),o=s[0],l=s[1];return o===t?e:Object(r.a)(Object(r.a)({},e),{},Object(i.a)({},o,l))}),{})})}},{key:"onMessageReceived",value:function(e){var t=e.child("userID").val(),a=e.child("name").val(),i=e.child("color").val(),r=e.child("avatarURL").val(),s=e.child("content").val(),n=e.child("timestamp").val(),o=new Date(n),l="".concat(o.getMonth(),"/").concat(o.getDate(),"/").concat(o.getFullYear()," ").concat(o.getHours(),":").concat(o.getMinutes());this.props.collabMessageReceived({userID:t,name:a,color:i,avatarURL:r,content:s,timestamp:l})}},{key:"onMessageCreated",value:function(e){var t=this.state.dbRef.child("messages"),a=this.props.collaborateState.userID,i=this.props.collaborateState.name,r=this.state.userColor,s=this.props.collaborateState.avatarURL,n=g.a.database.ServerValue.TIMESTAMP;t.push().set({userID:a,name:i,color:r,avatarURL:s,content:e,timestamp:n}),this.props.collabMessageSent()}},{key:"onCollaborationDisabled",value:function(e){var t=e.val();t||this.props.collaborationDisabled({isEnabled:t})}},{key:"updateFiles",value:function(e){var t=e.val();if(null!==t){var a=b.j(this.props.files,!0),i=this.getFileTreeDiff(a,t),r=Object(n.a)(i,4),s=r[0],o=r[1],l=r[2];r[3]&&(this.updateAdapters({createdFiles:s,deletedFiles:o,renamedFiles:l,isHost:!1}),this.props.updateFileTreeFromFirepad({files:t}))}}},{key:"updateCursorLabel",value:function(e){var t=e.cursor,a=e.userName,s=void 0===a?null:a,n=e.userID,o=e.userColor;this.setState({cursorMap:Object(r.a)(Object(r.a)({},this.state.cursorMap),{},Object(i.a)({},n,{userName:s,cursor:t,color:o}))})}},{key:"redrawCursorLabels",value:function(e){var t=this,a=e.previousCursorMap,s=e.currentCursorMap;Object.entries(s).forEach((function(e){var o=Object(n.a)(e,2),l=o[0],c=o[1];if(l!==t.props.collaborateState.userID){if(!Object.hasOwnProperty.call(a,l)){var u=new y({color:c.color,index:c.position,label:c.userName,session:t.props.aceRef.editor.session}),d=t.props.aceRef.editor.session.addDynamicMarker(u,!0);t.setState({labelMap:Object(r.a)(Object(r.a)({},t.state.labelMap),{},Object(i.a)({},l,{markerID:d.id,labelMarker:u}))})}Object(f.isEqual)(a[l],s[l])||Object.hasOwnProperty.call(t.state.labelMap,l)&&t.state.labelMap[l].labelMarker.setPosition(c.cursor.selectionEnd,!0)}}))}},{key:"firebaseOn_",value:function(e,t,a,i){return this.state.firebaseCallbacks.push({ref:e,eventType:t,callback:a,context:i}),e.on(t,a,i),a}},{key:"changeDisplayName",value:function(e){var t=this.props.collaborateState.firebase,a=this.props.collaborateState.dbRef,i=this.props.collaborateState.userID,r=t.database().ref(a).child("users").child(i),s=e.target.value||"Guest "+Math.floor(1e3*Math.random());r.child("name").onDisconnect().remove(),r.child("name").set(s),e.target.focus(),e.preventDefault(),e.stopPropagation(),this.setState({displayName:s})}},{key:"render",value:function(){return null}}]),a}(d.Component)}.call(this,a(23))}}]);