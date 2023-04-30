var playBtn = document.querySelector("#playBtn");
var updateWin = document.querySelector(".playerWins");
var updateLosses = document.querySelector(".playerLosses");
var updateTies = document.querySelector(".ties");

// console.log(parseInt(updateWin.innerHTML) + 1);

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

  if (opponentChoice === playersChoice) {
    updateTies.innerHTML = parseInt(updateTies.innerHTML) + 1;
    alert("It was a tie!");
  } else if (playersChoice === "P" && opponentChoice === "R") {
    updateWin.innerHTML = parseInt(updateWin.innerHTML) + 1;
    alert("You chose paper, opponent chose rock. You win!");
  } else if (playersChoice === "S" && opponentChoice === "R") {
    updateLosses.innerHTML = parseInt(updateLosses.innerHTML) + 1;
    alert("You chose scissors, opponent chose rock. You lose!");
  } else if (playersChoice === "R" && opponentChoice === "P") {
    updateLosses.innerHTML = parseInt(updateLosses.innerHTML) + 1;
    alert("You chose rock, opponent chose paper. You lose!");
  } else if (playersChoice === "S" && opponentChoice === "P") {
    updateWin.innerHTML = parseInt(updateWin.innerHTML) + 1;
    alert("You chose scissors, opponent chose paper. You win!");
  } else if (playersChoice === "R" && opponentChoice === "S") {
    updateWin.innerHTML = parseInt(updateWin.innerHTML) + 1;
    alert("You chose rock, opponent chose scissors. You win!");
  } else if (playersChoice === "P" && opponentChoice === "S") {
    updateLosses.innerHTML = parseInt(updateLosses.innerHTML) + 1;
    alert("You chose paper, opponent chose scissors. You lose!");
  }

  //   function scoreBoard(currentValue) {
  //     currentValue.innerHTML;
  //   }

  var playAgain = confirm(
    "If you want to play again, hit okay. If you don't, hit cancel."
  );
  if (playAgain) {
    return rockPaperScissors();
  }
}

playBtn.addEventListener("click", rockPaperScissors);
