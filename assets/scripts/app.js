//Global variables
const initialValue = 0;
let currentResult = initialValue;
let logEntries = [];

// console.log(typeof {ime: "Tarik", age : 12})
// console.log(typeof 1)
// console.log(typeof "neka recenica.")

//Button event listerers
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//Functions
function getUserInputValue() {
  return parseInt(userInput.value);
}

//This function edits the result div in the HTML
function createAndWriteOutput(
  resultBeforeCalculation,
  userInputValue,
  operator
) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${userInputValue}`;
  outputResult(currentResult, calculationDescription); //Calls a function from vendor.js
}

function writeToLog(operationName, prevResult, userNumber, newResult) {
  let logEntry = {
    operation: operationName,
    previousResult: prevResult,
    number: userNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.number);
}

function add() {
  const userInputValue = getUserInputValue();
  const resultBeforeCalculation = currentResult;
  currentResult += userInputValue;
  createAndWriteOutput(resultBeforeCalculation, userInputValue, "+");
  writeToLog("ADD", resultBeforeCalculation, userInputValue, currentResult);
}

function subtract() {
  const userInputValue = getUserInputValue();
  const resultBeforeCalculation = currentResult;
  currentResult -= userInputValue;
  createAndWriteOutput(resultBeforeCalculation, userInputValue, "-");
  writeToLog("SUBTRACT", resultBeforeCalculation, userInputValue, currentResult);
}

function multiply() {
  const userInputValue = getUserInputValue();
  const resultBeforeCalculation = currentResult;
  currentResult *= userInputValue;
  createAndWriteOutput(resultBeforeCalculation, userInputValue, "*");
  writeToLog("MULTIPLY", resultBeforeCalculation, userInputValue, currentResult);
}

function divide() {
  const userInputValue = getUserInputValue();
  const resultBeforeCalculation = currentResult;
  currentResult /= userInputValue;
  createAndWriteOutput(resultBeforeCalculation, userInputValue, "/");
  writeToLog("DIVIDE", resultBeforeCalculation, userInputValue, currentResult);
}

// ++varijabla
// function prvoPlus(varijabla){
//     varijabla = varijabla+1;
//     return varijabla;
// }

// varijabla++
// function prvoVarijabla(varijabla){
//     let kopija = varijabla;
//     varijabla = varijabla+1;
//     return kopija;
// }
