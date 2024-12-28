function getComputerChoice() {
    let randomNum = Math.random();

    console.log(randomNum);

    if (0.0 <= randomNum && randomNum <= 0.33) {
        return "rock";
    }
    else if (0.34 <= randomNum && randomNum <= 0.66) {
        return "paper";
    }
    else if (0.67 <= randomNum && randomNum <= 0.99) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter 'rock', 'paper', or 'scissors': ");
    console.log(choice);
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(computerChoice, humanChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') {
                console.log("You win! Rock beats scissors.");
                humanScore += 1;
            }
            else if (computerChoice === 'paper') {
                console.log("You lose! Paper beats rock.");
                computerScore += 1;
            }
            else if (computerChoice === 'rock') {
                console.log("It's a draw!");
            }
        }
    
        if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                console.log("You win! Paper beats rock.");
                humanScore += 1;
            }
            else if (computerChoice === 'scissors') {
                console.log("You lose! Scissors beats paper.");
                computerScore += 1;
            }
            else if (computerChoice === 'paper') {
                console.log("It's a draw!");
            }
        }
    
        if (humanChoice === 'scissors') {
            if (computerChoice === 'paper') {
                console.log("You win! Scissors beats paper.");
                humanScore += 1;
            }
            else if (computerChoice === 'rock') {
                console.log("You lose! Rock beats scissors.");
                computerScore += 1;
            }
            else if (computerChoice === 'scissors') {
                console.log("It's a draw!");
            }
        }
    }

    for (i = 0; i < 5; i++)
    {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
    
        console.log(`Computer selection: ${computerSelection}. Human selection: ${humanSelection}`);
    
        playRound(computerSelection, humanSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    if (humanScore < computerScore) {
        console.log("You lose the game!");
    }
    if (humanScore === computerScore) {
        console.log("The game is a draw!");
    }

    console.log(`Your score: ${humanScore}. Computer score: ${computerScore}`);
}

playGame();
