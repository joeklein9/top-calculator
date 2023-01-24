const firstScreenDisplay = document.getElementById("first-screen-text") 
const secondScreenDisplay = document.getElementById("second-screen-text")

let displayValue = 0
let firstOperand = ""
let secondOperand = "" 
let selectedOperator = ""
let isOperatorSelected = false 

let firstOperandArray = []
let secondOperandArray = []


// Handle click on a number

function handleNumberClick () {
     
    if (isOperatorSelected === false){
        firstOperandArray.push(event.target.dataset.number)
        renderFirstOperand()   
    } else if (isOperatorSelected === true) {
        secondOperandArray.push(event.target.dataset.number)
        renderSecondOperand()
    }
}
    
// Handle click on an operator

function handleOperatorClick () {
    isOperatorSelected = true
    if (isOperatorSelected === true){
    selectedOperator = event.target.dataset.operator
    renderOperator()
    console.log(selectedOperator)  
     }
    
}

// Handle click on equals sign

function handleEqualsClick () {

 
if (selectedOperator === "+") {
    return Number(firstOperandArray.join('')) + Number(secondOperandArray.join(''))
} else if (selectedOperator === "-") {
    return Number(firstOperandArray.join('')) - Number(secondOperandArray.join(''))
} else if (selectedOperator === "÷") {
    return Number(firstOperandArray.join('')) / Number(secondOperandArray.join(''))
} else if (selectedOperator === "×") {
    return Number(firstOperandArray.join('')) * Number(secondOperandArray.join(''))
}

isOperatorSelected = false
}

// Event listener for whole page for number presses and operator presses

document.addEventListener("click", function (event){
    if (event.target.dataset.number) {
        handleNumberClick ()
    }
    else if (event.target.dataset.operator) {
        handleOperatorClick ()
    }
    else if (event.target.dataset.equals) {
        handleEqualsClick ()
        renderEquals()
    }
    else if (event.target.dataset.clear) {
        firstOperandArray = []
        secondOperandArray = []
        firstScreenDisplay.textContent = ""
        secondScreenDisplay.textContent = ""
        isOperatorSelected = false
    }
}
)


// Render firstOperand to screen 

function renderFirstOperand () {
    for (let i = 0; i<firstOperandArray.length; i++) {

        if (i === firstOperandArray.length - 1) {
      
        firstScreenDisplay.textContent += firstOperandArray[i]
    }
}
}

//Render second operand to screen 

function renderSecondOperand () {
    for (let i = 0; i<secondOperandArray.length; i++) {

        if (i === secondOperandArray.length - 1) {
      
        firstScreenDisplay.textContent += secondOperandArray[i]
    }
}
}
// Render operator to screen 

function renderOperator () {
    firstScreenDisplay.textContent += " " + selectedOperator + " "
}

// render equals result 

function renderEquals () {
    console.log(handleEqualsClick())
    secondScreenDisplay.textContent = handleEqualsClick()
}
