let stone = document.getElementById('stone');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

let letters = ['stone', 'paper', 'scissor'];
let randomLetter 

let computerWin = 0
let playerwin = 0;
let count = 0;
let selectedChoice = '';
let playerChoosed=false;


stone.addEventListener('click', () => {
    playerChoosed=true;
    selectedChoice = 'stone'
    console.log("stone Clicked ");
    computerChoice(playerChoosed)
    checkWinner();
})

paperClicked = paper.addEventListener('click', () => {
    playerChoosed=true;
    selectedChoice = 'paper';
    console.log("paper Clicked ");
    computerChoice(playerChoosed)
    checkWinner();
})

scissorClicked = scissor.addEventListener('click', () => {
    playerChoosed=true;
    selectedChoice = 'scissor';
    console.log("scissor Clicked ");
    computerChoice(playerChoosed)
    checkWinner();

})



function computerChoice(playerChoosed){
    let randomIndex = Math.floor(Math.random() * letters.length);
    if(playerChoosed){
        randomLetter = letters[randomIndex];
        console.log(randomLetter)
        playerChoosed=false;
    }
}


function checkWinner() {

    console.log("Player choice: ", selectedChoice);
    console.log("Computer choice: ", randomLetter);

    // draw if same
    if (randomLetter == 'paper' && selectedChoice == 'paper' || randomLetter == 'stone' && selectedChoice == 'stone' || randomLetter == 'scissor' && selectedChoice == 'scissor') {
        console.log("draw");
        document.getElementById('result').style.color = "#898925"
        document.getElementById('result').innerHTML = "Draw"
    }
    // stone and paper -> paper
    // stone and scissor -> stone
    // paper and scissor -> scissor
    if (randomLetter == 'paper' && selectedChoice == 'scissor' || randomLetter == 'stone' && selectedChoice == 'paper' || randomLetter == 'scissor' && selectedChoice == 'stone') {
        console.log("You won");
        document.getElementById('result').style.color = "green"
        document.getElementById('result').innerHTML="You won"
        playerwin++;
    }
    if (randomLetter == 'paper' && selectedChoice == 'stone' || randomLetter == 'stone' && selectedChoice == 'scissor' || randomLetter == 'scissor' && selectedChoice == 'paper') {
        console.log("Computer won");
        document.getElementById('result').style.color = "red"
        document.getElementById('result').innerHTML="Computer won"
        computerWin++
    }


        document.getElementById('youChoose').innerText = "You choose: "+selectedChoice;
        document.getElementById('computerChoose').innerText = "Computer choose: "+randomLetter;
  
    // player result
    document.getElementById('playerResult').style.color = "green"
    document.getElementById('playerResult').innerHTML="Your score: "+playerwin
    // computer result
    document.getElementById('computerResult').style.color = "red"
    document.getElementById('computerResult').innerHTML= "Computer score: "+computerWin
    console.log(`Player wins: ${playerwin}, Computer wins: ${computerWin}`);
}
