function getComputerChoice(){
  let pick = ["rock", "paper", "scissors"];
  let result = "";
  return pick[Math.floor(Math.random() * pick.length)] + "";
}

console.log(getComputerChoice())