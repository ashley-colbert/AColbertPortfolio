//The cfollowing is the code to make the images on the index page shuffle to multiple screenshots of each project. I created a variable containing a list that will change images evertime the image is clicked.  

var imgSrcRainforest = ["../images/rainforest1.png", "../images/rainforest2.png", "../images/rainforest3.png"];
var index = 0

function changeImageRainforest() {
  index= (index +1) % imgSrcRainforest.length;
  document.getElementById("image2").src = imgSrcRainforest[index];
}

var imgSrcDiner = ["../images/diner1.png", "../images/diner2.png", "../images/diner3.png"];

function changeImageDiner() {
  index= (index +1) % imgSrcDiner.length;
  document.getElementById("image1").src = imgSrcDiner[index];
}

var imgSrcOtter = ["../images/otter.png", "../images/otter2.png"];

function changeImageOtter() {
  index= (index +1) % imgSrcOtter.length;
  document.getElementById("image3").src = imgSrcOtter[index];
}

var imgSrcRest = ["../images/rest1.png", "../images/rest2.png", "../images/rest3.png"];

function changeImageRest() {
  index= (index +1) % imgSrcRest.length;
  document.getElementById("image4").src = imgSrcRest[index];
}

var imgSrcDogs = ["../images/dogs1.png", "../images/dogs2.png"];

function changeImageDogs() {
  index= (index +1) % imgSrcDogs.length;
  document.getElementById("image5").src = imgSrcDogs[index];
}


//This code is for the joke generator page where a user can input their own information into a form and each answer will be added to the text and a joke will be gerenated and added to a div in the game.html page.

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  loadJoke();
});

  function loadJoke() {
    var name = document.getElementById('name').value;
    var coworker = document.getElementById('coworker').value;
    var boss = document.getElementById('boss').value;
    var lang = document.getElementById('lang').value;
    var num = document.getElementById('num').value;
    var jokeDiv = document.getElementById('joke');

  if ( num == 1 ) {
    jokeDiv.innerHTML = `Why did ${boss} give ${name} and ${coworker} a rubber duck?
<br>Because they said they needed it to "quack" the ${lang} code!`;
  } else if (num == 2) {
    jokeDiv.innerHTML = `${name} walks into ${boss}’s office and says, "I have some good news!” <br>
    ${coworker} follows and says, “I have some bad news."<br>
    ${boss} replies, "Okay, let's hear the good news first."<br>
    ${name} says, "I've finished the new program!" <br>
    ${boss} says, "That's great! What's the bad news?"<br>
    ${coworker} replies, "It's written in ${lang}."`;
    
  } else if (num == 3) {
    jokeDiv.innerHTML = `${name} and ${coworker} spent 5 hours trying to debug a ${lang} program.  At the end of the day ${boss} finally asks what the problem is.  <br>
    ${name} answers, ”We have a bug we can’t seem to fix.” <br>
    ${boss} replies, “Have you tried turning it off and on again?"`;
  }
}
