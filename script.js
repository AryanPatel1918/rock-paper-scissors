const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")

const message = document.getElementById("message")

const playerScoreEl = document.getElementById("player-score")
const computerScoreEl = document.getElementById("computer-score")

let playerScore = 0
let computerScore = 0

const choices = ["rock", "paper", "scissors"]

rockButton.addEventListener("click", () => {
    play("rock")
})

paperButton.addEventListener("click", () => {
    play("paper")
})

scissorsButton.addEventListener("click", () => {
    play("scissors")
})

function generateComputerChoice() {
    const randIndex = Math.floor(Math.random() * 3)
    return choices[randIndex]
}

function play(playerChoice) {
    const computerChoice = generateComputerChoice()

    if (playerChoice === computerChoice) { // When it's a tie
        message.textContent = `It's a tie! You both chose ${playerChoice}`
    } else if ( // When player beats computer
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++
        playerScoreEl.textContent = `Your Score: ${playerScore}`
        message.innerHTML = `You win! <span class="player-choice">${playerChoice}</span> beats <span class="computer-choice">${computerChoice}</span>`
    } else {
        computerScore++
        computerScoreEl.textContent = `Computer Score: ${computerScore}`
        message.innerHTML = `You lose! <span class="computer-choice">${computerChoice}</span> beats <span class="player-choice">${playerChoice}</span>`
    }
}