var randomNumber1=Math.floor(Math.random()*6+1);

var randomDiceImage1="dice"+randomNumber1+".png";

var diceImageSource1="images/"+randomDiceImage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", diceImageSource1);


var randomNumber2=Math.floor(Math.random()*6+1);

var randomDiceImage2="dice"+randomNumber2+".png";

var diceImageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", diceImageSource2);


if(randomNumber1>randomNumber2){

	document.querySelector("h1").innerText="Player1 Won";

}
else if(randomNumber1<randomNumber2){

	document.querySelector("h1").innerText="Player2 Won";

}

else{
		document.querySelector("h1").innerText="Tie";
}