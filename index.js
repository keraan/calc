const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const screenEl = document.querySelector('#screen')
const equalsEl = document.querySelector('#equals')
const clearEl = document.querySelector('#clear')
const dot = document.querySelector('#dot')

let displayValue;
let tmpArray = []
let numbersArray = []
let symbol = []
let storedVal = 0
let calculation = []



numbers.forEach(number => number.addEventListener('click' , (e) => {
    tmpArray.push(parseInt(e.target.textContent))
    screenEl.textContent = tmpArray.join('')
}))

operators.forEach(operator => operator.addEventListener('click', (e) => {
    calculation.push(currentNumber())
    softClear()
    screenEl.textContent = e.target.textContent
    symbol.push(e.target.id)
    if (symbol.length > 1) {
        calculation.splice(1,1)
    }
}))

const currentNumber = () => {
    numbersArray.push(tmpArray.join(''))
    return parseFloat(numbersArray)
}

//event listeners
equalsEl.addEventListener('click', () => {

    calculation.push(currentNumber())
    storedVal = calculation[0]
    for (i = 0; i<=symbol.length; i++) {
        console.table(calculation)
        console.log(storedVal)
        console.log(symbol)
        storedVal = operations(calculation[0], calculation[1])[symbol[0]]
        screenEl.textContent = storedVal
        symbol.splice(0,1)

        calculation.splice(1,1)
        calculation[0] = storedVal


    }

})

clearEl.addEventListener('click', () => {
    screenEl.textContent = ''
    numbersArray = []
    symbol = []
    tmpArray = []
    calculation = []
    storedVal = 0
})

dot.addEventListener('click', (e) => {
    tmpArray.push(e.target.textContent)
    screenEl.textContent = tmpArray.join('')
})

const softClear = () => {
    tmpArray = []
    numbersArray = []
}



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


//document.body.addEventListener('click', currentNumber)
