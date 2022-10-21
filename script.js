let gridSize = document.querySelector('#gridsize');
let blackColor = document.querySelector('#black');
let redColor = document.querySelector('#red');
let rgbColor = document.querySelector('#rgb');
let eraseBtn = document.querySelector('#erase');
let clearBtn = document.querySelector('#clear');


let container = document.querySelector('#container');
const divBoard = document.createElement('div');

divBoard.setAttribute('id', 'grid');
divBoard.classList.add('grid');
container.appendChild(divBoard);

function createDiv(num) {
    divBoard.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    divBoard.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        let divBoard = document.querySelector('#grid');
        let div = document.createElement('div');
        div.classList.add('box');

        blackColor.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            })
        })


        redColor.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'red';
            })
        })


        rgbColor.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            })
        })


        eraseBtn.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'white';
            })
        })

        divBoard.appendChild(div);
    }
}

createDiv(16);



function changeSize() {
    let input = prompt('input a number from 1 - 64', '1-64');
    if (input === '') {
        alert('provide a number');
        return;
    } else if (input < 1 || input > 64) {
        alert('provide a number from 1 and 64');
        return;
    } else {
        return input;
    }
}


gridSize.addEventListener('click', () => {
    let size = changeSize();
    createDiv(size);
});

clearBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('.box');
    divs.forEach((div) => {
        div.style.backgroundColor = 'white';
    })
})