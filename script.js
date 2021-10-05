const playActions = ["Rock", "Paper", "Scissors"];
const computerPlay = () => playActions[Math.floor(Math.random() * playActions.length)];
let playerScore = 0;
let computerScore = 0;
let playerSelection;



function playRound (playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
       return (`It's a tie, you both played ${playerSelection.toLowerCase()}`)

   } else if (playerSelection.toLowerCase() == "rock") {
       if (computerSelection.toLowerCase() == "paper") {
           computerScore += 1;
           return (`You Lose! Paper beats Rock.`)
           
       } else if (computerSelection.toLowerCase() == "scissors"){
            playerScore += 1;   
            return (`You Win! Rock beats Scissors.`)
       }
   } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "scissors") {
            computerScore += 1;
            return (`You Lose! Scissors beats Paper.`)
        } else if (computerSelection.toLowerCase() == "rock"){
            playerScore += 1; 
            return (`You Win! Paper beats Rock.`)
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection.toLowerCase() == "paper") {
        playerScore += 1; 
        return (`You Win! Scissors beats Paper.`)
    } else if (computerSelection.toLowerCase() == "rock"){
        computerScore += 1;
        return (`You Lose! Rock beats Scissors.`)
}}}
window.onload= function() {
    function game() {
        while ((playerScore && computerScore) < 5){
            document.getElementById("rock-btn").addEventListener("click", () => {
                playerSelection = "rock";
                document.getElementById("result").innerText= playRound(playerSelection, computerPlay());
                document.getElementById("scoreboard").innerText = `Player: ${playerScore} -- Computer ${computerScore}`;
            })
            document.getElementById("paper-btn").addEventListener("click", () => {
                playerSelection = "scissors";
                document.getElementById("result").innerText= playRound(playerSelection, computerPlay());
                document.getElementById("scoreboard").innerText = `Player: ${playerScore} -- Computer ${computerScore}`;
            })
            document.getElementById("scissors-btn").addEventListener("click", () => {
                playerSelection = "scissors";
                document.getElementById("result").innerText= playRound(playerSelection, computerPlay());
                document.getElementById("scoreboard").innerText = `Player: ${playerScore} -- Computer ${computerScore}`;
            })
        if (playerScore == 5) {
            document.getElementById("result").innerText= "Congrats! You win!";
            break
        } else if (computerScore == 5) {
            document.getElementById("result").innerText= "Oh no! You lost!";
            break
        }
}
    }
game();
}




