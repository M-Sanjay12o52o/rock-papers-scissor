function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    } else {
        return choice;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === 'rock') {
        return "Rock vs. Rock: It's a tie.";
    }   else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === 'paper') {
        return "Rock vs. Paper: You lose.";
    }   else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === 'scissors') {
        return "Rock vs. Scissors: You win.";
    }   else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "Paper vs. Rock: You lose.";
    }   else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === 'paper') {
        return "Paper vs. Paper: It's a tie.";
    }   else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "Papers vs. Scissors: You lose.";
    }   else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "Scissor's vs. Rock: You lose.";
    }   else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "Scissor's vs. paper: You win.";
    }   else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return "Scissors vs. Scissors: It's a tie.";
    }

    return "Invalid selection. Please choose rock, paper, or scissors.";
}    


// var computer = "Paper";
// var result = playRound(player, computer);
// console.log(result);


// console.log(getComputerChoice());

// console.log(game('Rock', 'Rock'));

let player = "Rock";

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        // console.log(playRound(player, getComputerChoice()));
        let result = playRound(player, getComputerChoice());
        console.log(result);

        if (result.substring(result.length - 5) === " win.") {
            userScore += 1;
            computerScore -= 1;
            // console.log(userScore);
        } else if (result.substring(result.length -5) === "lose.") {
            computerScore += 1;
            userScore -= 1;
            // console.log(computerScore); 
        }
    }

    console.log("Final scores:");
    console.log("User score:", userScore);
    console.log("Computer score:", computerScore);

    return [userScore, computerScore];
}

game();

