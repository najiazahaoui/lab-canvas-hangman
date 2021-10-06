class Hangman {
  constructor(words) {
    this.words = words; // an array to store all the words to guess
    // ... your code goes here
    this.secretWord = this.pickWord(); // store the word picked as a secred word
    this.letters = []; // all unique letters tried
    this.guessedLetters = ''; // the already found letters
    this.errorsLeft = 10;
  }

  pickWord() { // return a random word from the array [words] 
    // ... your code goes here
    const rand = Math.floor(Math.random()*this.words.length);
    return this.words[rand];
  }

  checkIfLetter(keyCode) { // return true or false depending on the keyCode of the key pressed by the user
    // ... your code goes here
    const codes = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]; // a = 65 z = 90
    
    if (codes.includes(keyCode)) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) { // check if the letter passed as argument has already been pressed 
    // ... your code goes here
    if (this.letters.includes(letter)) { 
      // if (letter) it is included in this.letter (already present = already been pressed) => return false
      return false; // letter has already been pressed => 
    } else {
      // not already present
      this.letters.push(letter); // add (letter) to this.letters array
      return true; // letter has already been pressed =>  true 
    }
  }

  addCorrectLetter(letter) { // add the passed letter to the guessedLetters property (string)
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) { // substract '1' from the variable errorsLeft
    // ... your code goes here
    this.errorsLeft--;
  }

  checkGameOver() { // checks if the user has any errors left
    // ... your code goes here
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() { // checks if the user won
    // ... your code goes here
    if (this.guessedLetters.length === [...new Set(this.secretWord)].length) { 
      // le nombre de letter unique dans this.secretWord
      // le nombre de lettre devinées est égale aux nombre de lettres du mot à deviner
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
