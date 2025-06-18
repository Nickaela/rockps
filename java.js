function getComputerChoice(){
  
 const pick = Math.floor(Math.random() * 3);
 let computer;
 
 if (pick === 0){
  computer = "rock";
 } else if (pick === 1){
  computer = "paper";
 } else {
  computer = "scissors";
 }

  return computer;

}

console.log(getComputerChoice())