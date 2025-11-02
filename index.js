console.log('Welcome to Rock Paper Scissors for the Future of Humanity');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const scoreBoard = document.querySelector('#scoreBoard');
const story = document.querySelector('#story');
const mainGameScreen = document.querySelector('#mainGameScreen')

function game(){
        let grandTotalPlayer = 0
        let grandTotalComputer = 0

        rockButton.addEventListener("click", runRock);
        paperButton.addEventListener("click", runPaper);
        scissorsButton.addEventListener("click", runScissors);

        function endGameScreen(){
            rockButton.remove();
            paperButton.remove();
            scissorsButton.remove();
            const playAgain = document.createElement("button");
            playAgain.classList.add('selection')
            playAgain.textContent = "Play Again";
            playAgain.addEventListener("click", () => window.location.reload())
            document.querySelector('#selectionBox').appendChild(playAgain);
        }

        function winCheck(){
        if (grandTotalComputer === 5){
            mainGameScreen.style.backgroundImage = "url('robotsWin.png')";
            story.textContent = `LOSER:
                Despite futile efforts, the organic lifeforms fail to survive their relentless creations`;
            endGameScreen();

        } else if (grandTotalPlayer === 5){
            mainGameScreen.style.backgroundImage = "url('humanityWins.png')";
            story.textContent = `WINNER:
                Humanity has prevailed in its fight against the cold, indifferent machines... 
                for now`;
            endGameScreen();
        } else if ((grandTotalComputer === grandTotalPlayer) && grandTotalPlayer !== 0){
            mainGameScreen.style.backgroundImage = "url('tie.png')"
            scoreBoard.textContent += ' ALL TIED UP'
        } else {
            mainGameScreen.style.backgroundImage = "url('main.png')"
        }

    }

        function runRock(e){
            scoreBoard.textContent = "";
            let playerInput = "rock";
            round(playerInput);
            scoreBoard.textContent += `Player: ${grandTotalPlayer}
            Computer: ${grandTotalComputer}`;
            winCheck();
        }
        function runPaper(e){
            scoreBoard.textContent = "";
            let playerInput = "paper";
            round(playerInput);
            scoreBoard.textContent += `Player: ${grandTotalPlayer}
            Computer: ${grandTotalComputer}`
            winCheck();
        }
        function runScissors(e){
            scoreBoard.textContent = "";
            let playerInput = "scissors";
            round(playerInput);
            scoreBoard.textContent += `Player: ${grandTotalPlayer}
            Computer: ${grandTotalComputer}`
            winCheck();
        }

    // --I might just axe this whole thing ngl and wing it --//

        
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
            // score logic below
            if (playerChoice === computerChoice) {
                if (playerChoice === 1){
                    story.textContent = `Tie: Dwayne the Rock Johnson ass bo'ah
                            Rocky BalHOEah ass bih'`;
                } else if (playerChoice === 2){
                    story.textContent = `tie: Stuck in an infinite loop: paper vs paper, the crumpling, scribbling and tearing rages on for millenia without victor`
                } else {
                    story.textContent = "Tie: both scissoring ;)"
                }
            } else if (playerChoice === 1) {
                if (computerChoice === 2) {
                    story.textContent = `Disgrace: the poor choice of rock, in the face of paper has cost the world a 14-minute reduction on the AI takeover timeline`;
                    grandTotalComputer += 1
                } else {
                    story.textContent = `Suck Sess! SMD robot Scum, your lesbian-scissoring, automated filth is no match for human rock!`;
                    grandTotalPlayer += 1
                }
            } else if (playerChoice === 2) {
                if (computerChoice === 3) {
                    story.textContent = "Dispair: the machinistic scissoring overwhelmed our flimsy paper, soaking it in the juices of the robot-overlords";
                    grandTotalComputer += 1
                } else {
                    story.textContent = `Weiner: humanity has risen above the machines by selecting paper (which covers rock)`;
                    grandTotalPlayer += 1
                }
            } else if (playerChoice === 3) {
                if (computerChoice === 1) {
                    story.textContent = `Failure: humanity plunges into darkness as the androids smash our scissors into obscurity`;
                    grandTotalComputer += 1
                } else {
                    story.textContent = `Victorious! How great art thou bold heroe? snipping the testicular sheeth from betwixt the autonomous-enemy's apendages!`;
                    grandTotalPlayer += 1
                }
            } else {
                story.textContent = 'ERROR: please try again'
            }
            // winner
        }
        // run rounds until win condition with loop
            // whichever winner add a point to total

        // console log total
}
// game();
game();