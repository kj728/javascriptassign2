//gets user input
function UserChoice(buttonNumber) {
    return buttonNumber === 1 ? "rock" : buttonNumber === 2 ? "paper" : "scissors";
}

//gets computer input
const ComputerChoice = () => Math.random() < 0.33 ? "rock" : Math.random() < 0.66 ? "paper" : "scissors";


let userChoice = "";
let computerChoice = "";

//start the game
function play(buttonNumber = 0) {
    userChoice = UserChoice(buttonNumber);
    computerChoice = ComputerChoice();
    console.log("Users choice:", userChoice);
    console.log("Computers choice:", computerChoice);

    displayResult();
}

//display result
function displayResult() {
    const result = userChoice === computerChoice ? "It's a tie!" :
        (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper") ? "You win!" : "You lose!";
    console.log(result)
}



