console.log("Hello world");

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
    return winner
}

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Make your selcetion: Rock, Paper or Scissors: ")
        gameRound(playerSelection, computerSelection)
    }
}
game()
