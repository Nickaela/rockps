function getComputerChoice(){
  const pcChoice = Math.floor(Math.random() * 3);
  if (pcChoice === 0){
    return "rock";
  } else if (pcChoice === 1){
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(){
 const hooman = prompt("Which one do you pick?, Rock, Paper or Scissors?");
 return hooman;
}

function playGame(){

let humanScore = 0;
let computerScore = 0;
let game = 0;

//playGround function 1 GAME ONLY
function playRound(humanChoice, computerChoice) {
  
 // humanChoice = humanChoice.toUpperCase();
 // humanChoice = humanChoice.toLowerCase();


  if (humanChoice === 'rock' && computerChoice === 'scissors'){
    console.log('you WIN, rock beats scissors');
    humanScore++;
    ++game;
    gameWinner();
  } else if (humanChoice === 'rock' && computerChoice === 'paper'){
    console.log('you LOSE, paper beats rock');
    computerScore++;
    ++game;
    gameWinner();
  } else if (humanChoice === 'paper' && computerChoice === 'rock'){
    console.log('you WIN, paper beats rock');
    humanScore++;
    ++game;
    gameWinner();
  } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
    console.log('you LOSE, scissors beats paper');
    computerScore++;
    ++game;
    gameWinner();
  } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
    console.log('you WIN, scissors beats paper');
    humanScore++;
    ++game;
    gameWinner();
  } else if (humanChoice === 'scissors' && computerChoice === 'rock'){
    console.log('you LOSE, rock beats scissors');
    computerScore++;
    ++game;
    gameWinner();
  } else {
    console.log('its a tie');
    ++game;
    gameWinner();
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function gameWinner(){

  let a = getHumanChoice();
  let b = getComputerChoice();

  if (game === 5){
    if (humanScore > computerScore){
      console.log('HUMANS wins');
    } else if (computerScore > humanScore){
      console.log('COMPUTER wins');
    } else {
      console.log('NO WINNER');
    }

    } else {
      playRound(a, b);
    }
  }
}

playGame();
