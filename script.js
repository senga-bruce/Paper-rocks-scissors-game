function computerMove() {
  let computerMove = "";
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
function playGame(playMove) {
  let computerMove = computerMove();

  let result = "";

  if (playMove === "Rocks") {
    if (computerMove === "Rock") {
      result = "It's a draw!";
    } else if (computerMove === "Paper") {
      result = "You lose!";
    } else {
      result = "You win!";
    }
  } else if (playMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win!";
    } else if (computerMove === "Paper") {
      result = "It's a draw!";
    } else {
      result = "You lose!";
    }
  } else {
    if (computerMove === "Rock") {
      result = "You win!";
    } else if (computerMove === "Paper") {
      result = "You lose!";
    } else {
      result = "It's a draw!";
    }
  }

  alert(
    `You picked ${playMove} and the computer picked ${computerMove}, so ${result}`
  );
}
