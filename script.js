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
        result = "You lost! Paper beats rock.";
        break;

      case 'Scissors':
        result = 'You won! Rock beats scissors.';
        break;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'Rock':
        result = 'You won! Paper beats rock.';
        break;

      case 'Paper':
        result = "It's a tie.";
        break;

      case 'Scissors': 
        result = 'You lost! Scissors beat paper';
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'Rock':
        result = 'You lost! Rock beats scissors';
        break;

      case 'Paper':
        result = 'You won! Scissors beat paper';
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
