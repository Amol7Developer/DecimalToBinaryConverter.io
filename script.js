const form = document.querySelector('form');
const convertBtn = document.querySelector('#convertBtn');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const decimalInput = document.querySelector('#decimalInput').value;

    const binary = (decimalInput >>> 0).toString(2);

    resultDiv.innerHTML = binary;
});