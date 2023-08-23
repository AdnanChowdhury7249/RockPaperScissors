let computerScore = 0;
let playerScore = 0;
let playerSelection = "";
let computerSelection = "";
const buttons = document.querySelectorAll('.btn');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const compChoice = document.querySelector('#compRand');
const resetBtn = document.querySelector('#reload');

resetBtn.addEventListener('click',() => location.reload());





function disabledButtons(){
document.getElementById("rock").disabled = true;
document.getElementById("paper").disabled = true;
document.getElementById("scissors").disabled = true;
}

function endGame(){
    document.querySelectorAll(".btn").disabled = true;

}

function computerChoice(){
     let choice = ['rock', 'paper', 'scissors']
    let random = choice[Math.floor(Math.random()*choice.length)];
    console.log(random)
    return random
    
}

function playRound(playerSelection, computerSelection) {
    if  (computerSelection === "paper" && playerSelection === "rock"){
   console.log("You Lose Paper beats Rock")
   compChoice.textContent = `You Lose! Computer picked ${computerSelection}`
   computerPoints.textContent = ++computerScore
  

   } else if (computerSelection === "rock" && playerSelection === "paper"){
       console.log("You Win Paper beats Rock")
        compChoice.textContent = `You Win! Computer picked ${computerSelection}`
       playerPoints.textContent = ++playerScore
    

   } else if (computerSelection === "scissors" && playerSelection === "paper"){
       console.log("You Lose Scissors beats paper")
        compChoice.textContent = `You Lose! Computer picked ${computerSelection}`
       computerPoints.textContent = ++computerScore
    

   } else if (computerSelection === "paper" && playerSelection === "scissors"){
       console.log("You Win Scissors beats Paper")
        compChoice.textContent = `You Win! Computer picked ${computerSelection}`
       playerPoints.textContent = ++playerScore

   }  else if (computerSelection === "rock" && playerSelection === "scissors"){
       console.log("You Lose Rock beats Scissors")
        compChoice.textContent = `You Lose! Computer picked ${computerSelection}`
       computerPoints.textContent = ++computerScore
  

   } else if (computerSelection === "scissors" && playerSelection === "rock"){
       console.log("You Win Rock beats Scissors")
        compChoice.textContent = `You Win! Computer picked ${computerSelection}`
       playerPoints.textContent = ++playerScore


   } else if (computerSelection === "scissors" && playerSelection === "scissors"){
       console.log ("It's a tie")
        compChoice.textContent = "Tie!"
   
   } else if (computerSelection === "paper" && playerSelection === "paper"){
        console.log ("It's a tie")
         compChoice.textContent = "Tie!"
   
   } else if (computerSelection === "rock" && playerSelection === "rock"){
        console.log ("It's a tie")
         compChoice.textContent = "Tie!"

   }
}





buttons.forEach((button) => {   
    button.addEventListener('click', () => {
    let compSel = computerChoice();
    let playSel = button.id;
    playRound(playSel, compSel);
    game();

    });
  });
 
  function game() {
    if (playerScore === 5) {
     disabledButtons()
    document.querySelector('.playerWinner').style.display = 'flex'
    
    

    }

    else if (computerScore === 5){
    disabledButtons()
    document.querySelector('.computerWinner').style.display = 'flex'
   
  }
    
  }   


  function scoreBoard(){
    if (playerScore === 5)
    document.getElementById("playerScore").innerHTML = playerScore;

    else if (computerScore === 5)
    document.getElementById("computerScore").innerHTML = computerScore;

  }


















//   buttons.forEach((button)=>{button.addEventListener('click',()=>{

//     playerSelection = button.id;
//     if (playerSelection == "rock"){
        
//     }
//     else if (playerSelection == "paper"){
         
//     }
//     else if (playerSelection == "scissors"){

//     }
//     computerSelection = computerChoice();

//     if (computerScore === 5 ){
//         document.querySelector('.computerWinner').style.display = 'flex'
//         console.log("unlucky computer wins");
    
//     }else{if (playerScore === 5 ){
//         document.querySelector('.playerWinner').style.display = 'flex'
//         console.log("Congratz you wins")
    
//     }
//     }


//     playRound();
//     })

// })