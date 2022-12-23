const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const screenEl = document.querySelector('#screen')
const equalsEl = document.querySelector('#equals')
const clearEl = document.querySelector('#clear')



let displayValue;
let tmpArray = []
let numbersArray = []
let symbol = ''


numbers.forEach(number => number.addEventListener('click' , (e) => {
    tmpArray.push(parseInt(e.target.textContent))
    console.log(tmpArray.join(''))
    displayValue = tmpArray.join('')
    screenEl.textContent = displayValue
}))

operators.forEach(operator => operator.addEventListener('click', (e) => {
    screen.textContent = e.target.textContent
    symbol = e.target.id
    numbersArray.push(tmpArray.join(''))
    tmpArray = []
}))

//event listeners
equalsEl.addEventListener('click', () => {
    numbersArray.push(tmpArray.join(''))
    operate(numbersArray[0], numbersArray[1], symbol)

    tmpArray.push(operate(numbersArray[0], numbersArray[1], symbol))
    numbersArray.splice(0, 2)
})

clearEl.addEventListener('click', () => {
    displayValue = ''
    screenEl.textContent = ''
    numbersArray = []
    symbol = ''
    tmpArray = []
})







// operations
const add = (a, b) => parseInt(a) + parseInt(b)
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b
const modulo = (a, b) => a % b

const operations = (a, b) => {
    return {
        'add': add(a, b),
        'subtract': subtract(a, b),
        'multiply': multiply(a, b),
        'divide': divide(a, b),
        'modulo': modulo(a, b),
    }
}
const operate = (a, b, operator) => {
    displayValue = operations(a, b)[operator]
    screenEl.textContent = displayValue
    console.log(operations(a, b)[operator])
}


