class Calculate{
    constructor(previousTextOperand, currentTextOperand){
        this.previousTextOperand = previousTextOperand;
        this.currentTextOperand = currentTextOperand;
        this.clear();
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){
        let lenOfCurrentOperand = this.currentOperand.length
        this.currentOperand = this.currentOperand.slice(0, lenOfCurrentOperand-1)
    }

    append(number){
        if(number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
        
    }

    chooseOperation(operation){
        if(this.currentOperand === ''){
            this.operation = operation
            return
        }
        if(this.currentOperand != '' && this.operation == '=' ){
            this.operation = operation
            this.currentOperand = ''
        }
        if(this.operation === undefined)
        // console.log(this.operation === undefined)
        this.operation = operation
        this.compute();
        this.currentOperand = ''
        this.operation = operation
    }
    getResultByEqual(){
        if(this.operation === '=') {
            this.currentOperand = ''
            return
        }
        this.compute()
        this.operation = '='
    }

    compute(){
        if(this.previousOperand == ''){
        this.previousOperand = this.currentOperand;
        return
        }
        else{
        let computation
        let firstNumber = parseFloat(this.previousOperand)
        let secondNumber = parseFloat(this.currentOperand)
        if(isNaN(secondNumber)) return
        switch(this.operation){
            case '+':
                computation = firstNumber + secondNumber
                break;
            case '-':
                computation = firstNumber - secondNumber
                break;
            case '*':
                computation = firstNumber * secondNumber
                break;
            case '/':
                computation = firstNumber / secondNumber
                break; 
            default:
                return
        }
        this.previousOperand = computation
        this.currentOperand = ''
        }

    }

    updateOutput(){
        this.currentTextOperand.innerText = this.currentOperand;
        if(this.operation === undefined){
        this.previousTextOperand.innerText = this.previousOperand
        }
        else{
        this.previousTextOperand.innerText = this.previousOperand + this.operation;
        }
    }
}

let previousOperandButton = document.querySelector('[data-previous-operand]')
let currenOperandButton = document.querySelector('[data-current-operand]')
let operationButtons = document.querySelectorAll('[data-operation]')
let numberButtons = document.querySelectorAll('[data-numbers]')
let deleteButton = document.querySelector('[data-delete]')
let clearButton = document.querySelector('[data-all-clear]')
let equalButton = document.querySelector('[data-equals]')

let calculator = new Calculate(previousOperandButton, currenOperandButton);
numberButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        calculator.append(button.innerText);
        calculator.updateOutput();
    })
})
operationButtons.forEach(button=>{
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateOutput();
    })
})
equalButton.addEventListener('click', ()=>{
    calculator.getResultByEqual();
    calculator.updateOutput();
})
clearButton.addEventListener('click', ()=>{
    calculator.clear();
    calculator.updateOutput();
})
deleteButton.addEventListener('click', ()=>{
    calculator.delete();
    calculator.updateOutput();
})