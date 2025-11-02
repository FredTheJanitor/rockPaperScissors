console.log('Welcome to Rock Paper Scissors for the Future of Humanity');
        
// --I might just axe this whole thing ngl and wing it --//
function game(){
    let grandTotalPlayer = 0
    let grandTotalComputer = 0
    // each round should compare human input to random number
    function round(){
        let playerInput
        let playerChoice 
        playerInput = prompt();
        // assign rock value of 1, paper: 2 scissors: 3
        if (playerInput.toLowerCase() === 'rock') {
            playerChoice = 1;
        } else if (playerInput.toLowerCase() === 'paper') {
            playerChoice = 2;
        } else if (playerInput.toLowerCase() === 'scissors'){
            playerChoice = 3;
        } else {
            alert('ERROR - Player Did Not Input Rock Paper or Scissors');
            playerChoice = 0;
        }
        // this picks a random number 1-3
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
    round();
    round();
    console.log(grandTotalComputer);
    console.log(grandTotalPlayer);
    // run rounds until win condition with loop
        // whichever winner add a point to total

    // console log total
}
game();