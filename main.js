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
    if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === 'Rock') {
        return "Rock vs. Rock: It's a tie.";
    }   else if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === 'Paper') {
        return "Rock vs. Paper: Paper wins.";
    }   else if (playerSelection.toLowerCase() === "Rock" && computerSelection.toLowerCase() === 'Scissors') {
        return "Rock vs. Scissors: Rock wins.";
    }   else if (playerSelection.toLowerCase() === "Paper" && computerSelection.toLowerCase() === "Rock") {
        return "Paper vs. Rock: Rock wins.";
    }   else if (playerSelection.toLowerCase() === "Paper" && computerSelection.toLowerCase() === 'Paper') {
        return "Paper vs. Paper: It's a tie.";
    }   else if (playerSelection.toLowerCase() === "Paper" && computerSelection.toLowerCase() === "Scissors") {
        return "Papers vs. Scissors: Scissors win.";
    }   else if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Rock") {
        return "Scissor's vs. Rock: Rock wins.";
    }   else if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Paper") {
        return "Scissor's vs. Paper: Scissors win.";
    }   else if (playerSelection.toLowerCase() === "Scissors" && computerSelection.toLowerCase() === "Scissors") {
        return "Scissors vs. Scissors: It's a tie";
    }
}       

console.log(getComputerChoice());