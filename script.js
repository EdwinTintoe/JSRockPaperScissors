function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (rand) {
        case 0:
            computerChoice = "rock"
            break;
        case 1:
            computerChoice = "paper"
            break;
        case 2:
            computerChoice = "scissors" 
    }
    return computerChoice;
}
console.log(getComputerChoice());