/* file: helloprog.js
Joshua Saunders
CS 150
Project 4 - Hello Program

Create a subfolder within project4 folder called helloprog. Within
this folder create a script.js file. Within this javascript file write
code that asks the user for their first name and last name: Output
an alert with the following message using the inputted first name
and last name: Hello John Wick, How is you day going? Make
sure to test your code using an html file that links to the javascript
file
*/
var name = prompt("Please input your first and last name: ");
document.write("<p>Hello " + name + ", how is your day going?</p>");
