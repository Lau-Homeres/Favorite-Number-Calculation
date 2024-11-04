// FavoriteNumberCalculation.js

const favNumber = 6; 

const guesses = [3, 10, 5, 7]; 


let index = 0;

while (index < guesses.length) {
    const userGuess = guesses[index];
    
    if (userGuess > favNumber) {
        console.log(`Guess ${userGuess}: Too high! Try again.`);
    } else if (userGuess < favNumber) {
        console.log(`Guess ${userGuess}: Too low! Try again.`);
    } else {
        console.log(`Guess ${userGuess}: Correct! You guessed my favorite number.`);
        break; // Exit the loop when the correct number is guessed
    }
    
    index++; // Move to the next guess in the array
}

// If the loop completes without a correct guess
if (index === guesses.length && guesses[index - 1] !== favNumber) {
    console.log("All guesses were incorrect.");
}
