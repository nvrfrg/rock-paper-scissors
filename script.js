// Get random number from 1 to 3 
function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

// Randomly chose between 3 options
function getComputerChoice() {
  let num = getRandomNumber();
  let choice = '';
  switch (num) {
    case 1:
      choice = 'Rock';
      break;
    
    case 2:
      choice = 'Paper';
      break;

    case 3: 
      choice = 'Scissors';
      break;
  }
  return choice;
}
 
// Decide a winnder based on both choices 
function playRound(playerSelection, computerSelection) {
  let result = '';

  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'Rock':
        result = "It's a tie";
        break;

      case 'Paper': 
        result = "You lost!";
        break;

      case 'Scissors':
        result = 'You won!';
        break;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'Rock':
        result = 'You won!';
        break;

      case 'Paper':
        result = "It's a tie.";
        break;

      case 'Scissors': 
        result = 'You lost!';
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'Rock':
        result = 'You lost!';
        break;

      case 'Paper':
        result = 'You won!';
        break;

      case 'Scissors': 
        result = "It's a tie.";
        break;
    }
  } else {
    result = 'You made a typo.';
  }

  return result;
}

// Get a choice from a player 
function getPlayerChoice() {
  return prompt('What do you choose?').toLowerCase();
}

// Play playRound() 5 times;
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for(i = 0; i < 5; i++) {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(result);

    if (result === 'You won!') {
      playerScore++ 
    } else if (result === 'You lost!') {
      computerScore++ 
    }
  }
  console.log(`The final score is:
    Player = ${playerScore}
    Computer = ${computerScore}`);

  if (playerScore > computerScore) {
    console.log('Congratulations! You have won.');
  } else if (playerScore < computerScore) {
    console.log('Sorry but you lost to the computer.');
  } else {
    console.log('The game is tied');
  }
}
  
game();