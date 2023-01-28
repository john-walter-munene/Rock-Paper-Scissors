// Computer choice.
function getComputerChoice(){
    let computer_answers = ["Rock", "Paper", "Scissors"]

    answer = computer_answers[Math.floor(Math.random() * computer_answers.length)]
    console.log(`Computer choice is ${answer}`)
    return answer
}


let playerSelection = ''
const computerSelection = getComputerChoice();

function gameRound(playerSelection, computerSelection){

    let winner = ""

    if (playerSelection == computerSelection){
        winner = "Its a tie" 
    }else if  (
        (computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Scissors" && playerSelection === "Paper") ||
        (computerSelection === "Paper" && playerSelection === "Rock")
      ){
        winner = "Computer wins"
    }else if(
        (computerSelection === "Rock" && playerSelection === "Paper")||
        (computerSelection === "Scissors" && playerSelection === "Rock")||
        (computerSelection === "Paper" && playerSelection === "Scissors")
    ){
        winner = "Player wins"
    }
    console.log(winner)
    const results = document.querySelector('#results')
    
    const outcome = document.createElement('h3')
    outcome.classList.add('content')
    outcome.textContent = winner
    results.appendChild(outcome)
}

/*function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Make your selcetion: Rock, Paper or Scissors: ")
        gameRound(playerSelection, computerSelection)
    }
}*/
// game()

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    playerSelection = "Rock"
    gameRound(playerSelection, computerSelection)
  });

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => {
    playerSelection = "Paper"
    gameRound(playerSelection, computerSelection)
});

const btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', () => {
    playerSelection = "Scissors"
    gameRound(playerSelection, computerSelection)

})

let computerScore = 0
let playerScore = 0

function countScores(){
    if (winner == "Player wins"){
        playerScore += 1
    }else if (winner == "Computer wins"){
        computerScore += 1
    }
}




