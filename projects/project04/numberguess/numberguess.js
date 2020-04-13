/* file: numberguess.js
Joshua Saunders
CS 150
Project 4 - Number Guess Program

Create a subfolder called numberguess. Within this folder create a
script.js file. Create a guessing game where the user has 3 try’s to
guest your number. I will leave it up to you how to program this.
*/

function game() {
    // Get a random number between 1 and 10
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var number = 1 + Math.floor(Math.random() * Math.floor(10));
    var numberOfGuesses = 3;
    var guessPrompt = "Please guess a number between 1 and 10: ";
    var loseMessage = "You've exhausted all of your guesses. The answer was ";
    var winMessage = "You guessed the correct number. Congrats!";
    var wrongGuessMessage = "Your guess was ";
    var tooHighMessage = wrongGuessMessage + "too high. ";
    var tooLowMessage = wrongGuessMessage + "too low. ";
    var gameOver = false;

    var guess = Number(prompt(guessPrompt, ""));
    while (numberOfGuesses > 1 && !gameOver) {

        if (guess < number) {
            numberOfGuesses -= 1;
            guess = prompt(tooLowMessage + guessPrompt, "");
        } else if (guess > number) {
            numberOfGuesses -= 1;
            guess = prompt(tooHighMessage + guessPrompt, "");
        } else {
            alert(winMessage);
            gameOver = true;
        }

        if (numberOfGuesses == 1) {
            alert(loseMessage + number);
        }
    }
}

game();
