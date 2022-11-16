let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6); 

let diceFace = new Array ("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");

let face = diceFace[randomNumber1];
let face2 = diceFace[randomNumber2];



document.querySelector("img").setAttribute("src", face);
document.querySelectorAll("img")[1].setAttribute("src", face2);

// same can be achieved by the line below with the proper id
// document.getElementById("img1").src = diceFace[randomNumber1];
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = ("Player 1 wins!")
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = ("Player 2 wins!")
}else{
    document.querySelector("h1").innerHTML = ("It's a draw!")
};