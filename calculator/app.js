class Calculator {
  constructor(previousoperandTextElement, currentOperandTextElement) {
    this.previousoperandTextElement = previousoperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperandTextElement = "";
    this.previousoperandTextElement = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  computer() {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelectorAll("[data-equals]");

const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previousoperandTextElement = document.querySelectorAll(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelectorAll(
  "[data-current-element]"
);

const calculator = new Calculator(
  previousoperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
  });
});
