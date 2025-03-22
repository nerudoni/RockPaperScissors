var button = document.querySelector('button');
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const round = document.getElementById('round');
var roundCount = 0;
var playerCount = 0;
var computerCount = 0;

function playGame(playerChoice){
    roundCount++;
    round.textContent = `Round: ${roundCount}`;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;    
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent =result;

    resultDisplay.classList.remove("greenText", "redText");
    switch(result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerCount ++;
            playerScore.textContent = `Player: ${playerCount}`;
            break;
        case "You lose!":
            resultDisplay.classList.add("redText");
            computerCount ++;
            computerScore.textContent = `Computer: ${computerCount}`;
            break;
    }

}