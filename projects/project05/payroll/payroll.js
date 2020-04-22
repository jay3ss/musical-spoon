/* file: payroll.js
Joshua Saunders
CS 150
Project 5 - Payroll Program

Payroll calculator:

1. Ask for the employee’s name, hours worked, and pay per hour (Use HTML Inputs)
2. Ask for the tax rate of the employee (Single 22% or Family 18%) (Use HTML
   Inputs)
3. Calculate the gross pay, the tax amount, and the net pay using functions
   with parameters output using innerHTML.
        function grosspay(hours, payperhour)
        function emptax(grosspay)
        function netpay(empgrosspay, emptax)
4. If the hours exceed 40 calculate the overtime at 1.5 times the pay per hour.
   Write a overtime function
*/
// main function
function main() {
    var name = employeeName();
    var hours = hoursWorked();
    var payperhour = payRate();
    var gross = grosspay(hours, payperhour);
    var taxes = emptax(gross);
    var net = netpay(gross, taxes);
    employeeData = { name: name, hours: hours, taxes: taxes, net: net };
    displayResults(employeeData);
}
// Gets and returns the employee name
function employeeName() {
    return valueById('empName');
}

// Gets and returns the payrate
function payRate() {
    return Number(valueById('payRate'));
}

// Gets and returns the hours worked
function hoursWorked() {
    var hoursElem = document.getElementsByClassName('hours');
    var hours = 0;
    for (let i = 0; i < hoursElem.length; i++)
        hours += hoursElem[i].valueAsNumber;

    return hours;
}

// Gets and returns the tax rate
function employeeTaxRate() {
    var taxRates = document.getElementById('taxRate');
    return Number(taxRates.options[taxRates.selectedIndex].value) / 100;
}

// Returns the employee's gross pay
function grosspay(hours, payperhour) {
    var ot = 0;
    if (overtime(hours)) {
        ot = (hours % 40) * payperhour * 1.5;
        hours -= hours % 40;
    }

    return ot + hours * payperhour;
}

// Returns the amount of taxes to be deducted from the employee's paycheck
function emptax(grosspay) {
    return grosspay * employeeTaxRate();
}

// Returns the employee's net pay
function netpay(empgrosspay, emptax) {
    return empgrosspay - emptax;
}

// Determines if the employee has worked overtime (> 40 hours in a week)
function overtime(hoursWorked) {
    return hoursWorked > 40;
}

// Adds the given HTML to the given element
function addHtml(elementId, html) {
    document.getElementById(elementId).innerHTML = html;
}

function valueById(elemId) {
    return document.getElementById(elemId).value;
}

// Creates and returns a table with the employee pay information
function feedbackTable(data) {
    var name = data.name;
    var hours = data.hours;
    var taxes = data.taxes;
    var net = data.net;

    var dataTable = "";
    dataTable += "<table id=\"feedbackTable\"><tbody>";
    dataTable += "<tr><th>Name</th><td>" + name + "</td></tr>";
    dataTable += "<tr><th>Total Hours</th><td>" + hours + "</td></tr>";
    dataTable += "<tr><th>Total Taxes</th><td>" + numAsCurrency(taxes) + "</td></tr>";
    dataTable += "<tr><th>Net Pay</th><td>" + numAsCurrency(net) + "</td></tr>";
    dataTable += "</tbody></table>";

    return dataTable;
}

function displayResults(data) {
    var table = feedbackTable(data);
    addHtml('feedback', table);
}

// Converts and returns a number to a currency string. E.g.,
// 123.4567 -> $123.46
function numAsCurrency(num) {
    // Extract the dollar and cents values
    // Remove the dollar amount from the number by rounding down to the
    // ones place
    var dollars = Math.floor(num);

    // Remove the cents amount from the number by:
    // 1. Subtract the dollar amount
    // 2. Multiply the result by 100
    // 3. Round the result to the nearest ones place
    var cents = Math.round((num - dollars) * 100);

    // Create the currency string: $dollars.cents
    var currency = "$" + dollars + ".";

    if (cents < 10) {
        // If there are less than 10 cents, then we need to concatenate a
        // zero to the currency string BEFORE we concatenate the cents value
        currency += "0" + cents;
    } else {
        // If there are more than 10 cents, then we can just concatenate
        // the cents straight away
        currency += cents;
    }
    return currency;
}

// Add the main function as a callback function for when the calculate
// button is clicked
document.querySelector('button').addEventListener('click', main);
