//Global variables
const initialValue = 0;
let trenutniRezultat = initialValue;
let logEntries = [];

//Button event listerers
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//Functions
function getUserInputValue() {
  return parse(userInput.value);
}

//This function edits the result div in the HTML
function createAndWriteOutput(
  resultBeforeCalculation,
  userInputValue,
  operator
) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${userInputValue}`;
  outputResult(trenutniRezultat, calculationDescription); //Calls a function from vendor.js
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
  const resultBeforeCalculation = trenutniRezultat;
  trenutniRezultat += userInputValue;
  createAndWriteOutput(resultBeforeCalculation, userInputValue, "+");
  writeToLog("ADD", resultBeforeCalculation, userInputValue, trenutniRezultat);
}

function subtract() {
  const userInputValue = getUserInputValue();
  const resultBeforeCalculation = trenutniRezultat;
  trenutniRezultat -= userInputValue;
  createAndWriteOutput(resultBeforeCalculation, userInputValue, "-");
  writeToLog("SUBTRACT", resultBeforeCalculation, userInputValue, trenutniRezultat);
}

function multiply() {
  const userInputValue = getUserInputValue();
  const resultBeforeCalculation = trenutniRezultat;
  trenutniRezultat *= userInputValue;
  createAndWriteOutput(resultBeforeCalculation, userInputValue, "*");
  writeToLog("MULTIPLY", resultBeforeCalculation, userInputValue, trenutniRezultat);
}

function divide() {
  const userInputValue = getUserInputValue();
  const resultBeforeCalculation = trenutniRezultat;
  trenutniRezultat /= userInputValue;
  createAndWriteOutput(resultBeforeCalculation, userInputValue, "/");
  writeToLog("DIVIDE", resultBeforeCalculation, userInputValue, trenutniRezultat);
}