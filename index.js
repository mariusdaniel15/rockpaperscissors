const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function getUserChoice(){
    const playerChoice = prompt("Write a choice:")
    const choice = playerChoice.toLowerCase();
    if((choice!= "rock") && (choice!="paper") && (choice!="scissors"))
        alert("Choose between rock, paper or scissors!");
    else return choice;
}

function playRound(playerSelection, computerSelection){
    alert("computer choose " + computerSelection);
    if(playerSelection != computerSelection){
        if((playerSelection == "paper")) {
            if (computerSelection == "rock"){
                alert("You won! Paper beats Rock!");}
            else {
                alert("You lose! Scissors beats Paper!");}
        }
        else if((playerSelection == "rock")){
            if(computerSelection == "scissors"){
                alert("You won! Rock beats Scissors!");}
            else { 
                alert("You lose! Paper beats Rock!");}
        }
        else{
            if(computerSelection =="paper"){
                alert("You won! Scissors beats Paper!");}
            else {
                alert("You lose! Rock beats Scissors!");}
        } 
    }
    else {
        alert("TIE!");
    }
}


playRound(getUserChoice(), getComputerChoice());
