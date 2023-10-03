class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }


// To clear numbers when you press 'AC'
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    // To delete numbers when you press 'DEL'
    delete() {

    }

    // To add number to display when you click a number
    // Reason why I changed currentOperand and number to string is because I want JS to not add both as integers but rather just append both.
    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    // To activate operation when you click on any of the operations
    chooseOperation(operation) {

    }

    // To compute a single value when you put numbers together with an operation
    compute() {

    }

    // To update the display with the computed value
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-all-clear]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})