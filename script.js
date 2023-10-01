const numberButtons = document.querySelectorAll('[data-key]');
const operationButtons = document.querySelectorAll('[data-action]');
let displayOutput = document.querySelector('.display');
let display = 0;

// to clear numbers in display
function clear() {
operationButtons.forEach(element) {
    if (operationButtons.getAttribute('data-action') === 'clear') {
        //updateDisplay('0');
    } 
}
}

// to delete numbers in display
function delete() {

}

// to show numbers in display
function appendNumber(number) {
    for (let i = 0; i < number; i++) {
        number = numberButtons.innerText;
        display++;
    }
    
}

// to activate operations when clicked
function chooseOperation(operation) {

}

// to compute the input
function compute() {

}

// to update display
function updateDisplay() {
    numberButtons.addEventListener('click' , e) => {
        if (e.target.matches('[data-key')) {

        }
    }
}