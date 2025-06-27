// Function to get the computer choice using math.random() function
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getRoundResult(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'scissors' && computer === 'paper') ||
    (player === 'paper' && computer === 'rock')
  ) return "player";
  return "computer";
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 10;

  for (let i = 1; i <= rounds; i++) {
    let playerChoice = prompt(`Round ${i} - Enter rock, paper, or scissors:`).toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];

    if (!validChoices.includes(playerChoice)) {
      alert("Invalid choice! Skipping this round.");
      continue;
    }

    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    const result = getRoundResult(playerChoice, computerChoice);

    if (result === "tie") {
      alert("It's a tie!");
    } else if (result === "player") {
      alert("You win this round!");
      playerScore++;
    } else {
      alert("Computer wins this round!");
      computerScore++;
    }
  }

  // Final result
  alert(`Game Over!\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);
  if (playerScore > computerScore) {
    alert("You win the game!");
  } else if (playerScore < computerScore) {
    alert("Computer wins the game!");
  } else {
    alert("It's a tie game!");
  }
}

playGame();
