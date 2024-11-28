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

function getHumanChoice(){
    const userInput = prompt("Choose rock, paper or scissors").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput ==="scissors"){
        return userInput
    }
    
    else{
        alert("must choose rock, paper or scissors.")
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    
    if (
        humanChoice === "rock" && computerChoice === "scissors"     ||
        humanChoice === "scissors" && computerChoice === "paper"    ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        humanScore++
        console.log(`${humanChoice} beats ${computerChoice}, you win! The score is ${humanScore}:${computerScore}.`)
    }
    else if(humanChoice === computerChoice) {
        console.log(`It's a tie ! The score is ${humanScore}:${computerScore}.`)
    }
    else{
        computerScore++
        console.log(`${computerChoice} beats ${humanChoice}, you loose! The score is ${humanScore}:${computerScore}.`)
    }
}

function playGame(times){
    for (let i = 0; i < times; i++){
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
playGame(5);