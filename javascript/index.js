

document.getElementById("playgame").addEventListener("click",function (){

performance();
});
function performance(){


// Taking user name
var name1 = document.getElementById("nam1").value;
var name2 = document.getElementById("nam2").value;

// convecting user name to upper ans lower cases name1
var name1FirstLetter = name1.slice(0, 1).toUpperCase();
var name1Rmain = name1.slice(1, name1.length).toLowerCase();
var player1 = name1FirstLetter + name1Rmain;
// convecting user name to upper ans lower cases name2
var name2FirstLetter = name2.slice(0, 1).toUpperCase();
var name2Rmain = name2.slice(1, name2.length).toLowerCase();
var player2 = name2FirstLetter + name2Rmain;

// getting random number for the game for pleyer 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// attaching the number to images
var randomImage = "images/dice" + randomNumber1 + ".png"; //////////////got lost
var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage);//////////////got lost

// getting random number for the game for pleyer 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// attaching the number to images
var randomImage2 = "images/dice" + randomNumber2 + ".png"; //////////////got lost
var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2); //////////////got lost
/////////
if(name1 && name2){

  document.querySelector("#p1").innerHTML = (player1);
  document.querySelector("#p2").innerHTML = (player2);

  // contorling the flow of the game
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = (player1 + " wins 🥇");
    document.querySelector("div").classList.add("ct");
    var playSound1 = new Audio("sound/snare.mp3");
    playSound1.play();

    setTimeout(function(){
        document.querySelector("div").classList.remove("ct");
    },100);



  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = (player2 + "  wins 🥇 ");
    document.querySelector("div").classList.add("ct2");
    var playSound2 = new Audio("sound/crash.mp3");
    playSound2.play();

    setTimeout(function(){
        document.querySelector("div").classList.remove("ct2");
    },100);

  } else {
    document.querySelector("h1").innerHTML = (" mate🤦‍♂️🧐");
  }


}// end if checking

else {

}
////////
}
var timerID = setInterval("location.reload();", 60000);
