const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)]
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
    let result = 3;
    if(playerSelection != computerSelection){
        if((playerSelection == "paper")) {
            if (computerSelection == "rock"){
                alert("You won! Paper beats Rock!");
                result=1;}
            else {
                alert("You lose! Scissors beats Paper!");
                result=-1;}
        }
        else if((playerSelection == "rock")){
            if(computerSelection == "scissors"){
                alert("You won! Rock beats Scissors!");
                result=1;
                }
            else { 
                alert("You lose! Paper beats Rock!");
                result=-1;}
        }
        else{
            if(computerSelection =="paper"){
                alert("You won! Scissors beats Paper!");
                result=1;}
            else {
                alert("You lose! Rock beats Scissors!");
                result=-1;}
        }
        return result;
    }
    else {
        alert("TIE!");
        result=0;
        return result;
    }
}


function game(){
    let counterUser = 0;
    let counterComputer = 0;
    let counterTie = 0;
    let r=1;
    for(let i = 0; i <= 4; i++){
        let result = playRound(getUserChoice(), getComputerChoice());
        console.log("Round "+ r);
        console.log("User choice " + playRound.getUserChoice);
        console.log("Computer choice" + playRound.getComputerChoice);
        if(result == 1) {
            console.log("You won the round!");
            ++counterUser;}
        else if (result == -1){
            console.log("You lost the round!");
            ++counterComputer;
        } 
        else {
            console.log("It's a tied round!");
            ++counterTie;
        }
        ++r;
        //trebuie sa returnez un array cu trei pozitii si fiecare pozitie reprez una dintre counter user etc...
    }
}

function showScore(){
    console.log("Result: ");
    console.log(game.);
    if((game.counterTie<=game.counterUser)  || (game.counterTie<=game.counterComputer)){
        if(game.counterUser>counterComputer) {console.log("You won the game!");}
        else {console.log("You lost the game!");}
    }
    else {console.log("It's a tied game!");}
    }

game();
showScore();