
const initialValue = 0;
let currentResult = initialValue;

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract)

function getUserInputValue(){
    return parseInt(userInput.value);
}

function createAndWriteOutput(resultBeforeCalculation, userInputValue, operator)
{
    const calculationDescription = `${resultBeforeCalculation} ${operator} ${userInputValue}`;
    outputResult(currentResult, calculationDescription);
}

function add(){
    const userInputValue = getUserInputValue();
    const resultBeforeCalculation = currentResult;
    currentResult  = currentResult + userInputValue;
    createAndWriteOutput(resultBeforeCalculation, userInputValue, '+')
}

function subtract(){
    const userInputValue = getUserInputValue();
    const resultBeforeCalculation = currentResult;
    currentResult  = currentResult - userInputValue;
    createAndWriteOutput(resultBeforeCalculation, userInputValue, '-')
}

function multiply(){

}

function divide(){
    
}