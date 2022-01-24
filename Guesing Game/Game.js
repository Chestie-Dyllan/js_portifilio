var secret = Math.floor(Math.random() * 10) + 1;
var startButton = document.getElementById("mybtn");


startButton.onclick = myGuess;

function myGuess(){
var answer = prompt ("Please guess the secret number(1-10)");
answer = Number(answer);
checkAnswer(answer);
}

function checkAnswer(guess){
if ( guess === secret) {
  alert("correct! Your guess" + guess + " is right"); 
  document.getElementById("result").innerHTML = ("Well Done, you guessed correctly!");
}else if ( secret < guess) {
  alert("Incorrect, guess to high");
    myGuess();
  } else if(guess < secret) {
       alert("Incorrect, guess to low");
       myGuess();
     }else {
     alert("Invalid input!");
     myGuess();
   }
   }


