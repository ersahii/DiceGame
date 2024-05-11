var random1 = Number.parseInt((Math.random()) *6);
var random2 = Number.parseInt((Math.random()) *6);
random1 +=1;
random2 +=1;
function checkWinner(x , y){
    if(x > y){
        document.getElementById("Win-heading").innerHTML = "Player 1 Won the game";
    }
    else if (x === y){
        document.getElementById("Win-heading").innerHTML = "Game Draw. Refresh Again";
    }
    else if(x < y){
        document.getElementById("Win-heading").innerHTML = "Player 2 Won the game"
    }
}
function checkDice1(x){
    if(x == 1){
        document.getElementById("dice-1").firstElementChild.src = "dice1.png";
    }
    else if(x == 2){
        document.getElementById("dice-1").firstElementChild.src = "dice2.png";
    }
    else if(x == 3){
        document.getElementById("dice-1").firstElementChild.src = "dice3.png";
    }
    else if(x == 4){
        document.getElementById("dice-1").firstElementChild.src = "dice4.png";
    }
    else if(x == 5){
        document.getElementById("dice-1").firstElementChild.src = "dice5.png";
    }
    else if(x == 6){
        document.getElementById("dice-1").firstElementChild.src = "dice6.png";
    }

}
function checkDice2(y){
    if(y == 1){
        document.getElementById("dice-2").firstElementChild.src = "dice1.png";
    }
    else if(y == 2){
        document.getElementById("dice-2").firstElementChild.src = "dice2.png";
    }
    else if(y == 3){
        document.getElementById("dice-2").firstElementChild.src = "dice3.png";
    }
    else if(y == 4){
        document.getElementById("dice-2").firstElementChild.src = "dice4.png";
    }
    else if(y == 5){
        document.getElementById("dice-2").firstElementChild.src = "dice5.png";
    }
    else if(y == 6){
        document.getElementById("dice-2").firstElementChild.src = "dice6.png";
    }
}
checkDice1(random1);
checkDice2(random2);
checkWinner(random1,random2);