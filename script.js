var playBtn = document.querySelector("#playBtn");
var updateWin = document.querySelector(".playerWins");
var updateLosses = document.querySelector(".playerLosses");
var updateTies = document.querySelector(".ties");

// console.log(parseInt(updateWin.innerHTML) + 1);

function rockPaperScissors() {
  var opponentChoices = "RPS";
  var playerPrompt = prompt(
    "Choose between rock, paper, or scissors. Type R, P, or S below."
  );
  // Validates that something is entered in the prompt box.
  if (!playerPrompt) {
    return;
  }

  var playersChoice = playerPrompt[0].toUpperCase();
  // validates that opponentChoices includes or has at least one character of playersChoice. If not an alert is given and the user is re-prompted.
  if (!opponentChoices.includes(playersChoice)) {
    alert("Please choose a valid input");
    return rockPaperScissors();
  }

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

  //   return askUser();
}
// ---- ask why this won't allow html to update
// function askUser(params) {
//   var playAgain = confirm(
//     "If you want to play again, hit okay. If you don't, hit cancel."
//   );
//   if (playAgain) {
//     rockPaperScissors();
//   }
// }

playBtn.addEventListener("click", rockPaperScissors);
