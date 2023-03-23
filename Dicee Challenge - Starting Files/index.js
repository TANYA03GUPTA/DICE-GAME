var randomNumber =Math.floor( Math.random()*6)+1;

var randomDiceImg1 ="dice" + randomNumber+ ".png";
var randomImgSrc = "images/" + randomDiceImg1;
var image1= document.querySelectorAll("img")[0].setAttribute("src",randomImgSrc);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "dice" + randomNumber2+".png";
var randomImgSrc2 = "images/" +randomDiceImg2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);

if(randomNumber > randomNumber2)
    document.querySelector("h1").innerHTML="🚩PLAYER 1 WINS";
else if(randomNumber2 > randomNumber)
    document.querySelector("h1").innerHTML="PLAYER 2 WINS.🚩";
else if(randomNumber == randomNumber2)
    document.querySelector("h1").innerHTML="🚩NONODY WINS.TIE🚩";