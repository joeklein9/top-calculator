const firstScreenDisplay = document.getElementById("first-screen-text") 
const secondScreenDisplay = document.getElementById("second-screen-text")

let displayValue = 0
let firstOperand = ""
let secondOperand = "" 
let selectedOperator = ""
let isOperatorSelected = false 


// Handle click on a number

function handleNumberClick () {
     
    if (isOperatorSelected === false){
        firstOperand = event.target.dataset.number
        renderFirstOperand()   
    } else if (isOperatorSelected === true) {
        secondOperand = event.target.dataset.number
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
    return Number(firstOperand) + Number(secondOperand)
} else if (selectedOperator === "-") {
    return Number(firstOperand) - Number(secondOperand)
} else if (selectedOperator === "÷") {
    return Number(firstOperand) / Number(secondOperand)
} else if (selectedOperator === "×") {
    return Number(firstOperand) * Number(secondOperand)
}
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
        firstOperand = ""
        secondOperand = ""
        firstScreenDisplay.textContent = ""
        secondScreenDisplay.textContent = ""
        isOperatorSelected = false
    }
}
)


// Render firstOperand to screen 

function renderFirstOperand () {
    firstScreenDisplay.textContent += firstOperand
    console.log ("this is the first operand")
}

//Render second operand to screen 

function renderSecondOperand () {
    firstScreenDisplay.textContent += secondOperand
    console.log("this is the second operand")
    
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