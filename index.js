const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const screenEl = document.querySelector('#screen')
const equalsEl = document.querySelector('#equals')
const clearEl = document.querySelector('#clear')



let displayValue;
let numbersArray = []
let symbol = ''


numbers.forEach(number => number.addEventListener('click' , (e) => {
    displayValue = e.target.textContent
    screenEl.textContent = displayValue
    numbersArray.push(parseInt(e.target.textContent))

}))

operators.forEach(operator => operator.addEventListener('click', (e) => {
    screen.textContent = e.target.textContent
    symbol = e.target.id
    console.log(symbol)
}))

//event listeners
equalsEl.addEventListener('click', () => {
    operate(numbersArray[0], numbersArray[1], symbol)
    numbersArray.splice(0, 2)
    console.log(numbersArray)
})

clearEl.addEventListener('click', () => {
    displayValue = ''
    screenEl.textContent = ''
    numbersArray = []
    symbol = ''
})







// operations
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const operations = (a, b) => {
    return {
        'add': add(a, b),
        'subtract': subtract(a, b),
        'multiply': multiply(a, b),
        'divide': divide(a, b)
    }
}
const operate = (a, b, operator) => {
    displayValue = operations(a, b)[operator]
    screenEl.textContent = displayValue
    console.log(operations(a, b)[operator])
}


