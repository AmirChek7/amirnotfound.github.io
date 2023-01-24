let btn1 = document.querySelector('#btn1');
let opros = document.querySelector('.opros');

const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    btn.style.left = `${random(0, 40)}%`;
    btn.style.top = `${random(0, 40)}%`;
    btn.style.right = `${random(0, 40)}%`;
})

btn1.addEventListener('click', function () {
    opros.textContent = 'Спасибо за честность!!!'
})

function clickMe() {
    document.querySelector(".button").classList.toggle("block-spin");
}

function clickMe1() {
    document.querySelector(".button1").classList.toggle("block-spin");
}