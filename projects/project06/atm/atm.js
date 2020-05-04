/* file: atm.js
Joshua Saunders
CS 150
Project 6 - ATM Program

Rewrite the ATM program using the methods demonstrated in Calculator
application above.
*/

// return the current balance as a number
function balanceCheck() {
    return Number(document.querySelector('#balance').innerText);
}

// withdraw money from the account if possible
function withdraw() {
    // clear any errors that may be left over from previous transactions
    clearErrors();
    var withdrawalAmount = valueById('withdrawalAmount');

    // make sure that the withdrawal won't result in an
    // overdraft and if it does display an error to the user
    if (withdrawalAmount < 0) {
        // update the balance with the negative of the
        // withdrawal amount
        negativeAmountError();
    } else if (!overdraft(withdrawalAmount)) {
        updateBalance(-withdrawalAmount);
    } else {
        overdraftError();
    }
}

// deposit money into the account if possible
function deposit() {
    // clear any errors that may be left over from previous transactions
    clearErrors();
    var amount = valueById('depositAmount');

    // check that the amount is positive, if not display an error to the user
    if (amount >= 0) {
        updateBalance(amount);
    } else {
        negativeAmountError();
    }
}

// update the balance
function updateBalance(amount) {
    var newBalance = balanceCheck() + amount;
    addText('balance', numAsCurrency(newBalance));
}

// check if a withdrawal will result in an overdraft (negative balance)
function overdraft(withdrawalAmount) {
    return balanceCheck() - withdrawalAmount < 0;
}

// display an error message to the user about an overdraft
function overdraftError() {
    var msg = '<p id="errors">ERROR: overdraft. Can\'t withdraw that amount.</p>';
    setErrorMsg(msg);
}

// clear the errors
function clearErrors() {
    addText('errors', '');
}

// display an error to the user stating about an attempt to deposit/withdraw
// a negative amount
function negativeAmountError() {
    var msg = '<p id="errors">ERROR: negative amount. ';
    msg += "Can't deposit/withdraw a negative number.</p>";
    setErrorMsg(msg);
}

// sets the passed in error message
function setErrorMsg(msg) {
    addText('errors', msg);
}

// Adds text to the given element
function addText(elem, html) {
    document.querySelector("#" + elem).innerHTML = html;
}

// returns the value at the given element id
function valueById(elemId) {
    return Number(document.querySelector("#" + elemId).value);
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
    var currency = dollars + ".";

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
