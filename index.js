console.log('Welcome to Rock Paper Scissors for the Future of Humanity');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const scoreBoard = document.querySelector('#scoreBoard');

function game(){
    rockButton.addEventListener("click", runRock);
    paperButton.addEventListener("click", runPaper);
    scissorsButton.addEventListener("click", runScissors);

    function runRock(e){
        let playerInput = "rock";
        round(playerInput);
    }
    function runPaper(e){
        let playerInput = "paper";
        round(playerInput);
    }
    function runScissors(e){
        let playerInput = "scissors";
        round(playerInput);
    }

// --I might just axe this whole thing ngl and wing it --//

    let grandTotalPlayer = 0
    let grandTotalComputer = 0
    // each round should compare human input to random number
    function round(playerInput){
        let playerChoice 
        // assign rock value of 1, paper: 2 scissors: 3
        if (playerInput === 'rock') {
            playerChoice = 1;
        } else if (playerInput === 'paper') {
            playerChoice = 2;
        } else if (playerInput === 'scissors'){
            playerChoice = 3;
        } else {
            alert('ERROR - Player Did Not Input Rock Paper or Scissors');
            playerChoice = 0;
        }
        // this picks a random number 1-3 inclusive
        let computerChoice = 1+Math.floor(Math.random()*3);
        if (playerChoice === computerChoice) {
            console.log('tie');
        } else if (playerChoice === 1) {
            if (computerChoice === 2) {
                console.log('computer wins');
                grandTotalComputer += 1
            } else {
                console.log('human wins');
                grandTotalPlayer += 1
            }
        } else if (playerChoice === 2) {
            if (computerChoice === 3) {
                console.log('computer wins');
                grandTotalComputer += 1
            } else {
                console.log('human wins');
                grandTotalPlayer += 1
            }
        } else if (playerChoice === 3) {
            if (computerChoice === 1) {
                console.log('computer wins');
                grandTotalComputer += 1
            } else {
                console.log('human wins');
                grandTotalPlayer += 1
            }
        } else {
            console.log('ERROR: please try again')
        }
        // winner
    }
    // run rounds until win condition with loop
        // whichever winner add a point to total

    // console log total
}
// game();
game();