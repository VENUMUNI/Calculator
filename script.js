// Get display element
const display = document.getElementById('display');

// Append character to display
function append(character) {
  display.value += character;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate square of current number
function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = "Error";
  }
}

// Evaluate the expression
function calculate() {
  try {
    // Handle modulo
    if (display.value.includes('%')) {
      let parts = display.value.split('%');
      if (parts.length === 2) {
        display.value = Number(parts[0]) % Number(parts[1]);
        return;
      }
    }
    // General calculation
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
