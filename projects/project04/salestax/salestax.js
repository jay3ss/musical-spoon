/* file: conditions.js
Joshua Saunders
CS 150
Project 4 - Sales Tax Program

Create a subfolder called salestax. Create a sales tax calculator.
Ask the user for the amount of the item. Output an alert that
shows Item Price, Tax Amount (9.5%) and the Total Price.
*/

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

var TAX_RATE = 0.095; // 9.5%
var price = parseFloat(prompt("Please input the price of the item:"));
var salesTax = TAX_RATE * price

// Convert numbers to format that looks good
var total = numAsCurrency(price + salesTax);
salesTax = numAsCurrency(salesTax);
price = numAsCurrency(price);

var output = "The item price is " + price + ", the sales tax is " + salesTax;
output += " (at 9.5%), and the total price is " + total;
alert(output);
