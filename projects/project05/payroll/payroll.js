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
var name = prompt("Please input your first and last name: ");
document.write("<p>Hello " + name + ", how is your day going?</p>");
