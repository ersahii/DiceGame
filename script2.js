// random number for first dice 
var randomNum1 = Math.floor(Math.random()*6 +1);
console.log(randomNum1);
var imgSrc1 = "images/dice"+randomNum1+".png";
document.querySelectorAll("img")[0].src = imgSrc1;

// random number for second dice 
var randomNum2 = Math.floor(Math.random()*6 +1);
console.log(randomNum2);
var imgSrc2 = "images/dice"+randomNum2+".png";
document.querySelectorAll("img")[1].src = imgSrc2;
if(randomNum1 == randomNum2){
    document.querySelectorAll("h1")[0].innerHTML = "Game Draw!";
}
else if (randomNum1>randomNum2){
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 won the Game";  
}
else{
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 won the Game";  
}
function reload(){
    location.reload();
}
