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