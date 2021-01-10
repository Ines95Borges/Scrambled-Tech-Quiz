document.addEventListener('DOMContentLoaded', () => {

  var playButton = document.getElementById("play");
  var instructionsButton = document.getElementById("instructions");
  var creditsButton = document.getElementById("credits");
  var introductionBox = document.getElementById("introduction");
  var menuBox = document.getElementById("menu");
  var gameBox = document.getElementById("gameBox");
  var html5Button = document.getElementById("html5Button");
  var css3Button = document.getElementById("css3Button");
  var javascriptButton = document.getElementById("javascriptButton");
  var sqlButton = document.getElementById("sqlButton");


  instructionsButton.addEventListener("click", () => {
    alert("Instructions");
  });

  creditsButton.addEventListener("click", () => {
    alert("Credits");
  });

  playButton.addEventListener("click", () => {
    introductionBox.classList.add("hidden");
    menuBox.classList.remove("hidden");
    playButton.disabled = "true";
    html5Button.addEventListener("click", () => {
      menuBox.classList.add("hidden");
      var game = new Game();
      game.displayBox();
      // Append a child h3 element refering to the technology
      var nameTechnology = document.createElement("h3");
      nameTechnology.innerHTML = "HTML5";
      gameBox.appendChild(nameTechnology);

      game.gameInteraction();
    })
  });

  var Game = class Game{
    displayBox(){
      gameBox.classList.remove("hidden");
    }
    choseWord(){ // Returns one random word
      var len = html5.length;
      var wordIndex = Math.floor(Math.random() * len);
      return html5[wordIndex];
    }
    gameMechanics(){
      var word = this.choseWord(); // Gets the word chosen
      var lenWord = word.length; // Gets the length of the word chosen
      var wordBox = document.createElement("div"); // Creates a div that contain the word
      wordBox.classList.add("wordBox");
      for(var i = 0; i < lenWord; i++){
        var letter = document.createElement("div"); // Creates a div that contains the letters
        letter.innerHTML = word[i]; // Appends the letter to the div
        wordBox.appendChild(letter); // Appends the div to its parent
      }
      gameBox.appendChild(wordBox); // Appends the div to the gameBox
      var lettersArray = document.querySelector(".wordBox").querySelectorAll("div"); // Gets an array of letters
      lettersArray.forEach((div) => {
        div.style.order = Math.floor(Math.random() * lenWord); // Switches the order of the letters
      });
      return [lettersArray, word];
    }
    gameInteraction(){
      var turn = 0;
      var gameMechanics = this.gameMechanics();
      var letters = gameMechanics[0];
      var word = gameMechanics[1];
      letters.forEach((letter) => {
        letter.addEventListener("click", (e) => {
          if(turn % 2 === 0){
            var indexLetterToSwitch = word.indexOf(letter.innerHTML);
            turn ++;
          }else if(turn % 2 === 0){
            var indexLetterToBeSwitchedWith = word.indexOf(letter.innerHTML);
            turn ++;
            var temp = indexLetterToSwitch;
            word[indexLetterToSwitch] = word[indexLetterToBeSwitchedWith];
            word[indexLetterToBeSwitchedWith] = temp;
          }
          if(turn % 2 == 0 && turn !== 0){

          }
        })
      })
    }
  }

});