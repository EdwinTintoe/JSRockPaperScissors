const options = document.querySelector(".options");
const choice = document.querySelector("#result");
const score = document.querySelector("#score");
const result = document.querySelector("#announcement")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    let select;
    switch (rand) {
        case 0:
            select = "rock"
            break;
        case 1:
            select = "paper"
            break;
        case 2:
            select = "scissors" 
    }
    return select;
}

function playRound(humanChoice, computerChoice){    
    if (
        humanChoice === "rock" && computerChoice === "scissors"     ||
        humanChoice === "scissors" && computerChoice === "paper"    ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        humanScore++
        choice.textContent = `Your choice: ${humanChoice}. Computer's choice: ${computerChoice}.`
        result.textContent = `You win!`
        score.textContent = `The score is ${humanScore}:${computerScore}.`;
    }
    else if(humanChoice === computerChoice) {
        choice.textContent = `Your choice: ${humanChoice}. Computer's choice: ${computerChoice}.`
        result.textContent = `It's a tie`
        score.textContent = `The score is ${humanScore}:${computerScore}.`;
    }
    else{
        computerScore++
        choice.textContent = `Your choice: ${humanChoice}. Computer's choice: ${computerChoice}.`
        result.textContent = `You loose.`
        score.textContent = `The score is ${humanScore}:${computerScore}.`;
    }
}

options.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id){
        case "rock":
            humanSelection = "rock";
            break;
        case "paper":
            humanSelection = "paper";
            break;
        case "scissors":
            humanSelection = "scissors";
            break;
    }
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})