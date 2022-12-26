const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const screenEl = document.querySelector('#screen')
const equalsEl = document.querySelector('#equals')
const clearEl = document.querySelector('#clear')
const dot = document.querySelector('#dot')
const preview = document.querySelector('#preview')


let numbersArray = []
let result = ''
let tmpArray = []
let firstOperand = ''
let secondOperand = ''
let currentOperation = null

numbers.forEach(number => number.addEventListener('click' , (e) => {
    tmpArray.push(e.target.textContent)
    screenEl.textContent = getCurrentNumber()
    console.table(tmpArray)
}))

operators.forEach(operator => operator.addEventListener('click', (e) => {
    assignOperand()
    currentOperation = e.target.id
    preview.textContent = `${firstOperand} ${opSymbols[currentOperation]} ${secondOperand}`
    if (firstOperand != '' && secondOperand != '') {
        calculate()
    } else {
        assignOperand()
    }
    screenEl.textContent = result
    tmpArray = []
}))

const getCurrentNumber = () => {
    number = tmpArray.join('')
    return parseFloat(number)
}

function calculate() {
    preview.textContent = `${firstOperand} ${opSymbols[currentOperation]} ${secondOperand}`
    result = operations(firstOperand,secondOperand)[currentOperation]
    firstOperand = result
    screenEl.textContent = result
}

function assignOperand() {
    if (firstOperand === '') {
        firstOperand = getCurrentNumber()
        console.log('hello')
    } else {
        secondOperand = getCurrentNumber()
        console.log('kjsdnsakjdbsajkdb')
    } 
}

//event listeners
equalsEl.addEventListener('click', () => {
    assignOperand()
    calculate()
})

clearEl.addEventListener('click', clear)

dot.addEventListener('click', (e) => {
    tmpArray.push(e.target.textContent)
    screenEl.textContent = tmpArray.join('')
})

// operations
const add = (a, b) => parseFloat(a) + parseFloat(b)
const subtract = (a, b) => a - b
const multiply = (a, b) => parseFloat(a) * parseFloat(b)
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

const opSymbols = {
    'add': '+',
    'subtract': '-',
    'multiply': 'x',
    'divide': '÷',
    'modulo': '%',
}


function debug() {
    console.table(firstOperand)
    console.table(secondOperand)
}

function clear() {
    screenEl.textContent = ''
    firstOperand = ''
    secondOperand = ''
    numbersArray = []
    result = ''
    tmpArray = []
    currentOperation = null
    preview.textContent = ''
}