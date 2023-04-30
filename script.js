var playBtn = document.querySelector("#playBtn");

function rockPaperScissors() {
  //   var playersChoice = prompt(
  //     "Choose between rock, paper, or scissors. Type R, P, or S below."
  //   );
  //   if (playersChoice === "R") {
  //     var playersChoice = 0;
  //   } else if (playersChoice === "P") {
  //     var playersChoice = 1;
  //   } else if (playersChoice === "S") {
  //     var playersChoice = 2;
  //   }

  var opponentChoices = "RPS";
  var opponentChoice = opponentChoices.charAt(
    Math.floor(Math.random() * opponentChoices.length)
  );
  console.log(opponentChoice);

  //   if (opponentChoice() === playersChoice) {
  //     alert("It was a tie, try again!");
  //     return rockPaperScissors();
  //   } else if (opponentChoice() === 0 && playersChoice === 1) {
  //     alert("You chose paper, opponent chose rock. You win!");
  //   } else if (opponentChoice() === 0 && playersChoice === 2) {
  //     alert("You chose scissors, opponent chose rock. You lose!");
  //   } else if (opponentChoice() === 1 && playersChoice === 0) {
  //     alert("You chose rock, opponent chose paper. You lose!");
  //   } else if (opponentChoice() === 1 && playersChoice === 2) {
  //     alert("You chose scissors, opponent chose paper. You win!");
  //   } else if (opponentChoice() === 2 && playersChoice === 0) {
  //     alert("You chose rock, opponent chose scissors. You win!");
  //   } else if (opponentChoice() === 2 && playersChoice === 1) {
  //     alert("You chose paper, opponent chose scissors. You lose!");
  //   }
}

playBtn.addEventListener("click", rockPaperScissors);
