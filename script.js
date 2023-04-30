var playBtn = document.querySelector("#playBtn");

function rockPaperScissors() {
  var playersChoice = prompt(
    "Choose between rock, paper, or scissors. Type R, P, or S below."
  );
  // if (playersChoice === "R") {
  //   var playersChoice = 0;
  // } else if (playersChoice === "P") {
  //   var playersChoice = 1;
  // } else if (playersChoice === "S") {
  //   var playersChoice = 2;
  // }

  var opponentChoices = "RPS";
  var opponentChoice = opponentChoices.charAt(
    Math.floor(Math.random() * opponentChoices.length)
  );
  console.log(opponentChoice);

  if (opponentChoice === playersChoice) {
    alert("It was a tie!");
  } else if (playersChoice === "P" && opponentChoice === "R") {
    alert("You chose paper, opponent chose rock. You win!");
  } else if (playersChoice === "S" && opponentChoice === "R") {
    alert("You chose scissors, opponent chose rock. You lose!");
  } else if (playersChoice === "R" && opponentChoice === "P") {
    alert("You chose rock, opponent chose paper. You lose!");
  } else if (playersChoice === "S" && opponentChoice === "P") {
    alert("You chose scissors, opponent chose paper. You win!");
  } else if (playersChoice === "R" && opponentChoice === "S") {
    alert("You chose rock, opponent chose scissors. You win!");
  } else if (playersChoice === "P" && opponentChoice === "S") {
    alert("You chose paper, opponent chose scissors. You lose!");
  }

  var playAgain = confirm(
    "If you want to play again, hit okay. If you don't, hit cancel."
  );
  if (playAgain) {
    return rockPaperScissors();
  }
}

playBtn.addEventListener("click", rockPaperScissors);
