/* file: atm.js
Joshua Saunders
CS 150
Project 5 - ATM Program

1. Set an initial balance of $1000
2. Create functions for all operations:
      balanceCheck()
      withdraw(amount)
      deposit(amount)
3. Output results using innerHTML
4. ​Make sure to validate for overdraft
*/

function balanceCheck() {

}

function withdraw() {

}

function deposit() {

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
