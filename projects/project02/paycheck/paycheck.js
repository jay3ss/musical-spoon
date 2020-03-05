/*
Joshua Saunders
CS 150
Project 2 - Paycheck Program

Write JavaScript code that does the following (Use the document.write()
function to output your results to the page

Create a folder called paycheck and create html and JavaScript files to perform
the following:

  1. Create a string variable to hold your name.
  2. Create a variable to hold your gross pay.
  3. Create a variable to hold your tax rate.
  4. Create a variable to hold your tax by multiplying gross pay by tax rate.
  5. Output your name, amount of tax you owe and your net pay.
*/
var name = "Joshua Saunders";
var grossPay = 150000;
var taxRate = 0.4;
var taxesOwed = grossPay * taxRate;
var netPay = grossPay - taxesOwed;

document.write("<h2>" + name + "</h2>");
document.write(
    "<table>" +
        "<tr><th>Taxes owed</th><td>$" + taxesOwed + "</td>" +
        "<tr><th>Net pay</th><td>$" + netPay + "</td>" +
    "</table>"
);
write.close();
