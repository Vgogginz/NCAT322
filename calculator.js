let results = [];
let keepGoing = true;

document.write("<h2>Calculations</h2>");
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (keepGoing) {
    let x = prompt("Enter the first number (x):");
    if (x === null) break; // User clicked Cancel

    let y = prompt("Enter the second number (y):");
    if (y === null) break; // User clicked Cancel

    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break; // User clicked Cancel

    // Convert inputs to numbers and validate
    x = parseFloat(x);
    y = parseFloat(y);
    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
    } else {
        switch (operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                result = y !== 0 ? x / y : "Error: Division by zero";
                break;
            case "%":
                result = y !== 0 ? x % y : "Error: Division by zero";
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    // Add the result to the results array if it's a valid number
    if (!isNaN(result)) {
        results.push(result);
    }

    // Display the row
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    // Ask the user if they want to continue
    keepGoing = confirm("Do you want to perform another calculation?");
}

document.write("</table>");

// Generate the summary table
if (results.length > 0) {
    const min = Math.min(...results);
    const max = Math.max(...results);
    const total = results.reduce((sum, value) => sum + value, 0);
    const avg = total / results.length;

    document.write("<h2>Summary</h2>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("<p>No valid results to summarize.</p>");
}
