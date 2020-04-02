const colorBtn = document.getElementById("button");
const background = document.querySelector("body");

const colorArr = [
    'blue',
    'green',
    'purple',
    'red',
    'yellow',
    'pink'
];

colorBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * colorArr.length);
    background.style.backgroundColor = colorArr[random];
});