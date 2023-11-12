const progs = document.getElementById('prog');
        const after1Element = document.querySelectorAll('.after1::after');
        var index = 0;
        const nxtBtn = document.getElementById('next');
        const prvBtn = document.getElementById('prev');
        console.log(after1Element);
        console.log(progs.children);

        function chooseNext() {
            index++;
            progs.children[index].classList.add('active'); 
            prvBtn.disabled = index === 0;
            nxtBtn.disabled = index === progs.children.length - 1;
            if (index === progs.children.length - 1 ) {
                nxtBtn.classList.remove('btn-active');
                nxtBtn.classList.add('btn-inactive');
            } else if (index != 0) {
                prvBtn.classList.remove('btn-inactive');
                prvBtn.classList.add('btn-active');
            }
            console.log(index);
        }
        function removeNext() {
            index--;
            progs.children[index + 1].classList.remove('active'); 
            prvBtn.disabled = index === 0;
            nxtBtn.disabled = index === progs.children.length - 1;
            if (index === progs.children.length - 1 ) {
                nxtBtn.classList.remove('btn-active');
                nxtBtn.classList.add('btn-inactive');
            } else if (index != 0) {
                prvBtn.classList.remove('btn-inactive');
                prvBtn.classList.add('btn-active');
            }
            console.log(index);
        }

        nxtBtn.addEventListener('click', chooseNext);
        prvBtn.addEventListener('click', removeNext);

        var hiddenBar = document.getElementById('hiddenbar');
        var searchDiv = document.getElementsByClassName('.search')

        function showSearch() {
            hiddenBar.style.display = 'block';
            }

        function hideSearch() {
            hiddenBar.style.display = 'none';
}

        const display = document.getElementById('display');

        function appendCharacter(char) {
            display.value += char;
        }

        function clearDisplay() {
            display.value = '';
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

const counter = document.getElementById('counter');
let num = 1000;

function increment() {
    let timer = setInterval(function() {
        num += 50;
    counter.innerHTML = num;
    if ( num >= 5000) {
        clearInterval(timer);
    }

    }, 20);
}

increment();


function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
  }
  



