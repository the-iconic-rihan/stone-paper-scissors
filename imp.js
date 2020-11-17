let playerChoiceInt = 0;
let computerchoiceInt = 0;
let playerscore = 0;
let computerscore = 0;
let playerChoice;
let computerchoice = {Value: ''};
const buttons = document.querySelectorAll('.btn');
const player = document.querySelector('#player-score');
player.textContent = `Player Score : ${playerscore}`;

const computer = document.querySelector('#computer-score');
computer.textContent = `Computer Score : ${computerscore}`;

const output = document.querySelector('#output');
output.textContent = "May the best one wins!"

buttons.forEach((button)=>{
    button.addEventListener('click',() => {
        playerChoice = button.id;
        if (playerChoice == "rock")
        {
            playerChoiceInt = 0;
        }else if (playerChoice == 'paper') 
        {
            playerChoiceInt = 1;
        }else if (playerChoice == "scissors")
        {
            playerChoiceInt = 2;
        } 
        computerchoiceInt = computerplay(computerchoice);
        playgame();
    })
})

function computerplay(computerchoice) {
    let ChoiceNum = Math.floor(Math.random() * 3);
    if (ChoiceNum == 0 ) {
        computerchoice.Value = "rock";
    }else if (ChoiceNum == 1) {
        computerchoice.Value = "paper";
    }else if (ChoiceNum == 2) {
        computerchoice.Value = "scissors";
    }
    return ChoiceNum;
}

function playRound() {
    let win_array = [[0,2,1],
                    [1,0,2],
                    [2,1,0]];
    let result = win_array[playerChoiceInt][computerchoiceInt];
    if (result == 0 ) {
        output.textContent = `Its a tie! You choose ${playerChoice} and ${computerchoice.Value} is the computer choice.`;   
    }else if (result == 1) {
        output.textContent = `You Win! you choose ${playerChoice} and computer choose ${computerchoice.Value}.`;
        playerscore++;
    }else if (result == 2 ) {
        output.textContent = `You choose ${playerChoice} and computer choice is ${computerchoice.Value}.`;
        computerscore++;
    } 
}

function playgame() {
    output.textContent = "Choose Rock ,Paper, or Scissors";
    playRound();
    player.textContent = `Playerscore : ${playerscore}.`
    computer.textContent  = `Computerscore : ${computerscore}.`
    if (playerscore == 5 ) {
        output.text = `You won! Congrates`;
        playerscore = 0;
        computerscore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerscore}`;
    }else if (computerscore == 5) {
        output.textContent = "You Lose! Better luck next time."
        computerscore = 0;
        playerscore = 0; 
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerscore}`;
    }
}