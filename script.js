// --- Start of JavaScript ---

// Get the display element
const display = document.getElementById('display');

/**
 * Appends the given value to the display.
 * @param {string} value - The number or operator to add.
 */
function appendValue(value) {
    // If display shows "Error", clear it before adding new value
    if (display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

/**
 * Clears the display, resetting it to an empty string.
 */
function clearDisplay() {
    display.value = '';
}

/**
 * Calculates the result of the expression in the display.
 * Uses eval() for simplicity.
 * Includes error handling for invalid expressions.
 */
function calculateResult() {
    try {
        // Use eval() to compute the result.
        // eval() is generally unsafe, but for a simple calculator
        // where we control the inputs, it's a straightforward solution.
        const result = eval(display.value);
        
        // Check for Infinity or NaN
        if (!isFinite(result)) {
            display.value = 'Error';
        } else {
            // Format to a reasonable number of decimal places if needed
            display.value = parseFloat(result.toFixed(10));
        }
    } catch (error) {
        // If eval() fails (e.g., "5++3"), show an error.
        display.value = 'Error';
    }
}

// --- End of JavaScript ---
