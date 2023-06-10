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
    if (playerSelection === "Rock" && computerSelection === 'Rock') {
        return "Rock vs. Rock: It's a tie.";
    }   else if (playerSelection === "Rock" && computerSelection === 'Paper') {
        return "Rock vs. Paper: Paper wins.";
    }   else if (playerSelection === "Rock" && computerSelection === 'Scissors') {
        return "Rock vs. Scissors: Rock wins.";
    }   else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Paper vs. Rock: Rock wins.";
    }   else if (playerSelection === "Paper" && computerSelection === 'Paper') {
        return "Paper vs. Paper: It's a tie.";
    }   else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Papers vs. Scissors: Scissors win.";
    }   else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "Scissor's vs. Rock: Rock wins.";
    }   else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "Scissor's vs. Paper: Scissors win.";
    }   else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "Scissors vs. Scissors: It's a tie";
    }
}       

console.log(getComputerChoice());