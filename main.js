function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Papers";
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
    }   else if (playerSelection === "Papers" && computerSelection === "Scissors") {
        return "Papers vs. Scissors: Scissor's win.";
    }   else if (playerSelection === "Scissor's" && computerSelection === "Rock") {
        return "Scissor's vs. Rock: Rock wins.";
    }   else if (playerSelection === "Scissor's" && computerSelection === "Paper") {
        return "Scissor's vs. Paper: Scissor's win.";
    }   else if (playerSelection === "Scissor's" && computerSelection === "scissor's") {
        return "Scissor's vs. Scissor's: It's a tie";
    }
}       

console.log(getComputerChoice());