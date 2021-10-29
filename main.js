const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const p = document.querySelector('p');

function suma() {
    const sum = parseInt(num1.value)+parseInt(num2.value);
    p.innerText = sum;
}

document.addEventListener('submit', suma());