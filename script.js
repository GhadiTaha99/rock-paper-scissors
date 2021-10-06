const playActions = ["Rock", "Paper", "Scissors"];
const computerPlay = () => playActions[Math.floor(Math.random() * playActions.length)];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const buttons = document.querySelectorAll("button")



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
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.value == "reset"){
            location.reload();
        }else{
            console.log("button clicked")
            document.getElementById("result").innerText = playRound(button.value, computerPlay());
            document.getElementById("scoreboard").innerText = `Player: ${playerScore} -- Computer: ${computerScore}`;
            if (playerScore == 5) {
                document.getElementById("final-result").innerText= "Congrats! You win!";
                disableButtons();
            } else if (computerScore == 5) {
                document.getElementById("final-result").innerText= "Oh no! You lost!";
                disableButtons();
                }
            }})
        })







