const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        currentInput = eval(currentInput.replace("%", "/100"));
        display.value = currentInput;
      } catch (e) {
        display.value = "Error";
        currentInput = "";
      }
    } else if (value === "C") {
      currentInput = "";
      display.value = "";
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
