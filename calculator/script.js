const inputBox = document.getElementById('inputBox');
const buttonElements = document.querySelectorAll('button');

let displayString = "";
const buttonArray = Array.from(buttonElements);

buttonArray.forEach(button => {
    button.addEventListener('click', (event) => {
        handleInput(event.target.innerHTML);
    });
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = '0123456789.+-*/%';

    if (validKeys.includes(key)) {
        handleInput(key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (key.toUpperCase() === 'C') {
        handleInput('AC');
    }
});

function handleInput(input) {
    if (input === '=') {
        try {
            displayString = eval(displayString);
        } catch {
            displayString = 'Error';
        }
    } else if (input === 'AC') {
        displayString = "";
    } else if (input === 'DEL') {
        displayString = displayString.slice(0, -1);
    } else {
        displayString += input;
    }
    inputBox.value = displayString;
}
