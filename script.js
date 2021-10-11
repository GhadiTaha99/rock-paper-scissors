const playActions = ["Rock", "Paper", "Scissors"];
const computerPlay = () => playActions[Math.floor(Math.random() * playActions.length)];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
const buttons = document.querySelectorAll("button")



function playRound (playerSelection, computerSelection) {
   if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
       return (`It's a tie, you both played ${playerSelection}`)

   } else if (playerSelection.toLowerCase() == "rock") {
       if (computerSelection.toLowerCase() == "paper") {
           computerScore += 1;
           return (`You played <span class="blue">${playerSelection}</span>, Computer played <span class="red">${computerSelection}</span>.<br>
           You Lose! Paper beats Rock.`)
           
       } else if (computerSelection.toLowerCase() == "scissors"){
            playerScore += 1;   
            return (`You played <span class="blue">${playerSelection}</span>, Computer played <span class="red">${computerSelection}</span>.<br> 
            You Win! Rock beats Scissors.`)
       }
   } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "scissors") {
            computerScore += 1;
            return (`You played <span class="blue">${playerSelection}</span>, Computer played <span class="red">${computerSelection}</span>.<br>
            You Lose! Scissors beats Paper.`)
        } else if (computerSelection.toLowerCase() == "rock"){
            playerScore += 1; 
            return (`You played <span class="blue">${playerSelection}</span>, Computer played <span class="red">${computerSelection}</span>.<br>
            You Win! Paper beats Rock.`)
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection.toLowerCase() == "paper") {
        playerScore += 1; 
        return (`You played <span class="blue">${playerSelection}</span>, Computer played <span class="red">${computerSelection}</span>.<br>
        You Win! Scissors beats Paper.`)
    } else if (computerSelection.toLowerCase() == "rock"){
        computerScore += 1;
        return (`You played <span class="blue">${playerSelection}</span>, Computer played <span class="red">${computerSelection}</span>.<br>
        You Lose! Rock beats Scissors.`)
}}}
function disableButtons() {
    buttons.forEach(button => {
        if(button.value == "reset"){
            button.disabled = false;
        }else{
        button.disabled = true;
    }})
}
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.value == "reset"){
            location.reload();
        }else{
            document.getElementById("result").innerHTML = playRound(button.value, computerPlay());
            document.getElementById("scoreboard").innerHTML = `<span class="blue">Player: ${playerScore}</span> -- <span class="red">Computer: ${computerScore}</span>`;
            if (playerScore == 5) {
                document.getElementById("final-result").classList.add("win");
                document.getElementById("final-result").innerHTML= "Congrats! You win!";
                disableButtons();
            } else if (computerScore == 5) {
                document.getElementById("final-result").classList.add("lose");
                document.getElementById("final-result").innerHTML= "Oh no! You lost!";
                disableButtons();
                }
            }})
        })







