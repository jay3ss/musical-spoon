/* file: conditions.js
Joshua Saunders
CS 150
Project 3 - Conditions Program
Write JavaScript code that does the following (Use the document.write()
function to output your results to the page:

Conditions. Create a folder called conditions and create html and JavaScript
files to perform the following:

1. Write JavaScript code that outputs true when num1 is equal to num2;
   otherwise outputs false.
2. Create two variables to hold whole numbers, output true if the sum of
   both numbers is less than 100. Otherwise output false.
*/
var num1 = 10;
var num2 = 89;
var output;

if (num1 + num2 < 100) {
    output = "true";
} else {
    output = "false";
}
document.write("<p>" + output + "</p>");
