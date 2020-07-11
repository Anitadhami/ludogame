// var randno1=Math.floor(Math.random()*6)+1;
// var imgesource1="images/" + "dice" + randno1 + ".png";
// var image1=document.querySelectorAll("img")[0];
// image1.setAttribute("src",imgesource1);
//
//
//
// var randomno2=Math.floor(Math.random()*6)+1;
// var imagesource2="images/"+"dice"+randomno2+".png";
// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",imagesource2);
//
// if(randno1 > randomno2)
// {
//   document.querySelector("h1").innerHTMl = "player 1 is winner";
// }
// else if(randomno2 > randno1)
// { document.querySelector("h1").innerHTMl = "player 2 is winner";
// }
//
// else
// {
//   document.querySelector("h1").innerHTMl = "both are equal";
// }
//







var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

//var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
