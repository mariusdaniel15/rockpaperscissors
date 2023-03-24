const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

const options = ["rock", "paper", "scissors"];

const counter = game();

function getComputerChoice(){
    let choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function getUserChoice(){
    return new Promise((resolve, reject) => {
        btn1.onclick = () => resolve('rock');
        btn2.onclick = () => resolve('paper');
        btn3.onclick = () => resolve('scissors');
    });
}

function playRound(playerSelection, computerSelection){
    var myDiv1 = document.getElementById("header2");
    myDiv1.innerHTML = `Computer choose ${computerSelection}!`;
    let result = 3;
    var myDiv2 = document.getElementById("header3");
    if(playerSelection != computerSelection){
        if((playerSelection == "paper")) {
            if (computerSelection == "rock"){
                myDiv2.innerHTML = "You won! Paper beats Rock!";
                result=1;}
            else {
                myDiv2.innerHTML = "You lose! Scissors beats Paper!";
                result=-1;}
        }
        else if((playerSelection == "rock")){
            if(computerSelection == "scissors"){
                myDiv2.innerHTML = "You won! Rock beats Scissors!";
                result=1;
                }
            else { 
                myDiv2.innerHTML = "You lose! Paper beats Rock!";
                result=-1;}
        }
        else{
            if(computerSelection =="paper"){
                myDiv2.innerHTML = "You won! Scissors beats Paper!";
                result=1;}
            else {
                myDiv2.innerHTML = "You lose! Rock beats Scissors!";
                result=-1;}
        }
        return result;
    }
    else {
        myDiv2.innerHTML = "TIE!";
        result=0;
        return result;
    }
}


async function game(){
    let r=1;
    let counter = [0,0,0];
    var myDiv1 = document.getElementById("header1");
    var myDiv2 = document.getElementById("score");
    for(let i = 0; i < 5; i++){
        const userChoice = await getUserChoice();
        const compChoice = getComputerChoice();
        const result = playRound(userChoice,compChoice);
        myDiv1.innerHTML = `Round ${r} :`;
        if(result == 1) {
            counter[0]+=1;
        }
        else if (result == -1){
            counter[2]+=1;
        } 
        else {
            counter[1]+=1;
        }
        myDiv2.innerHTML = `Score: Player ${counter[0]}, Ties ${counter[1]}, Computer ${counter[2]}`;
        ++r;
    }
    showScore(counter);
    return counter;
}

function showScore(counter){
    var myDiv1 = document.getElementById("header1");
    var myDiv2 = document.getElementById("header2");
    var myDiv3 = document.getElementById("header3");
    myDiv1.innerHTML = "Result: ";
    myDiv3.innerHTML = "";
    if(counter[0]>counter[2]) { myDiv2.innerHTML = "You won the game!";}
    else if(counter[2]>counter[0]) {myDiv2.innerHTML = "You lost the game!";}
    else {myDiv2.innerHTML = "It's a tied game!";}
    }

    
   