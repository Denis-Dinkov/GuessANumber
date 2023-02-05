const readline = require(`readline`).createInterface({
  input: process.stdin,
  output: process.stdout
});

let computerGuess = Math.floor(Math.random() * 100);

let recursiveAsyncReadLine = function(){
  readline.question(`Guess the number (0 - 100): `, number =>{
    guess = Number(number);
    isTrue = false;
    
    if(guess <= 100 && guess >= 0){
      if (guess == computerGuess){
        console.log('Congrats! You guess it!');
        isTrue = true;
      } else if (guess < computerGuess){
        console.log('Too Low! Try again :)');
      } else if(guess > computerGuess){
        console.log('Too High! Try again :)');
      }
    } else {
      console.log('Invalid input! Try again');
      recursiveAsyncReadLine();
    }
  })
}
recursiveAsyncReadLine()