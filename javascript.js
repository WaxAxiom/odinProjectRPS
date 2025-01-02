/** @type {HTMLInputElement} */
const buttons = document.querySelector("#buttons");

const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissors = document.querySelector("#buttonScissors");

buttonRock.addEventListener("click", playRound);
buttonPaper.addEventListener("click", playRound);
buttonScissors.addEventListener("click", playRound);

const playerPlayed = document.querySelector("#playerPlayed");
const computerPlayed = document.querySelector("#computerPlayed");

const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");

const gameStatus = document.querySelector("#gameStatus");

const outcomes = {
    rock: ["scissors"],
    paper: ["rock"],
    scissors: ["paper"],
};

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

function incrementPlayerPoints() {
    const currentPoints = parseInt(playerPoints.textContent);
    playerPoints.textContent = currentPoints + 1;
}

function incrementComputerPoints() {
    const currentPoints = parseInt(computerPoints.textContent);
    computerPoints.textContent = currentPoints + 1;
}

function gameOver(winner) {
    buttonRock.remove();
    buttonPaper.remove();
    buttonScissors.remove();
    gameStatus.textContent = `Game over! ${winner} wins!`;
}

function playRound(e) {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.textContent.toLowerCase();

    computerPlayed.textContent = computerChoice.toUpperCase();
    playerPlayed.textContent = playerChoice.toUpperCase();

    if (playerChoice === computerChoice) {
        console.log("Draw");
        return;
    }

    outcomes[playerChoice].includes(computerChoice) ? incrementPlayerPoints() : incrementComputerPoints();

    if (parseInt(playerPoints.textContent) === 5) {
        gameOver("Player");
    } 
    if (parseInt(computerPoints.textContent) === 5) {
        gameOver("Computer");
    }
}
