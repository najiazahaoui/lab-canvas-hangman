class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    
    // should clear the canvas every time we start the game
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    
    // should call drawLines() method
    this.drawLines();
    return this.drawLines();

  }

  drawLines() {
    // ... your code goes here

    //should draw one line for each letter of the secret word
    this.context.fillStyle = 'purple';
    this.context.fillRect(10,10, 40, 40);
    //for(let i = 0; i < this.secretWord.lenght; i++){
      //this.context.beginPath();
      //this.context.moveTo(200, 700);
      //this.context.lineTo(240, 700)
      //this.context.stroke();
    }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
