const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function getUserChoice(){
    let choice;
    do {
        choice = prompt("Write a choice:").trim().toLowerCase();
    } while (!options.includes(choice));
    return choice;
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
    let r=1;
    let counter = [0,0,0];
    for(let i = 0; i <= 4; i++){
        const userChoice = getUserChoice();
        const compChoice = getComputerChoice();
        const result = playRound(userChoice,compChoice);
        console.log("Round "+ r);
        console.log("User choice " + userChoice);
        console.log("Computer choice " + compChoice);
        if(result == 1) {
            console.log("You won the round!");
            counter[0]+=1;
        }
        else if (result == -1){
            console.log("You lost the round!");
            counter[2]+=1;
        } 
        else {
            console.log("It's a tied round!");
            counter[1]+=1;
        }
        console.log("Score: Player " + counter[0] + ", Ties " + counter[1] + ", Computer " + counter[2]);
        ++r;
    }
    return counter;
}

function showScore(counter){
    console.log("Result: ");
    if(counter[0]>counter[2]) {console.log("You won the game!");}
    else if(counter[2]>counter[0]){console.log("You lost the game!");}
    else {console.log("It's a tied game!");}
    }

const counter = game();
showScore(counter);


