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

function game(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === 'rock') {
        return "Rock vs. Rock: It's a tie.";
    }   else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === 'paper') {
        return "rock vs. paper: Paper wins.";
    }   else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === 'scissors') {
        return "Rock vs. Scissors: rock wins.";
    }   else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "Paper vs. Rock: Rock wins.";
    }   else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === 'paper') {
        return "Paper vs. Paper: It's a tie.";
    }   else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "Papers vs. Scissors: Scissors win.";
    }   else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "Scissor's vs. Rock: Rock wins.";
    }   else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "Scissor's vs. paper: scissors win.";
    }   else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "scissors") {
        return "Scissors vs. Scissors: It's a tie";
    }

    return "Invalid selection. Please choose rock, paper, or scissors.";
}    

// var player = "Rock";
// var computer = "Paper";
// var result = game(player, computer);
// console.log(result);


// console.log(getComputerChoice());

// console.log(game('Rock', 'Rock'));