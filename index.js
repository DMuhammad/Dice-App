//Generate random number
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
//Manipulate attribute
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
img1.src = `images/dice${randomNumber1}.png`;
img2.src = `images/dice${randomNumber2}.png`;
//Checking the winner
const heading = document.querySelector(".container h1");
if(randomNumber1 === randomNumber2){
    heading.innerHTML = "Draw!";
}else if(randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1 Wins!";
}else{
    heading.innerHTML = "Player 2 Wins!";
}
