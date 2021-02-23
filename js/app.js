document.addEventListener('DOMContentLoaded', () => {

  const playButton = document.getElementById("play");
  const instructionsButton = document.getElementById("instructions");
  const creditsButton = document.getElementById("credits");
  const introductionBox = document.getElementById("introduction");
  const menuBox = document.getElementById("menu");
  const gameBox = document.getElementById("gameBox");
  const hintButton = document.getElementById("hintButton");
  let hintBox = document.createElement("div");;
  let hintArray = [];
  hintBox.classList.add("hintBox");
  
  let minutes = 0;
  let seconds = 0;
  const timeCounter = document.querySelector("#time-counter");
  function time(){
    seconds++;
    if(seconds === 60){
      minutes++;
      seconds = 0;
    }
    if(seconds === 60){
      if(minutes < 10){
        timeCounter.innerHTML = `0${minutes}:00`;
      }else{
        timeCounter.innerHTML = `${minutes}:00`;
      }
    }else if(seconds < 10){
      if(minutes < 10){
        timeCounter.innerHTML = `0${minutes}:0${seconds}`;
      }else{
        timeCounter.innerHTML = `${minutes}:0${seconds}`;
      }
    }else{
      if(minutes < 10){
        timeCounter.innerHTML = `0${minutes}:${seconds}`;
      }else{
        timeCounter.innerHTML = `${minutes}:${seconds}`;
      }
    }
  }

  var clock;

  let word = "";
  let points = 0;
  let nameTechnology = "";

  // Clicking on the go back button
  document.getElementById("goBack").addEventListener("click", () => {
    menuBox.classList.add("hidden");
    gameBox.classList.add("hidden");
    introductionBox.classList.remove("hidden");
    playButton.disabled = false;
  });

  instructionsButton.addEventListener("click", () => {
    alert("The goal of this game is to get the maximum score possible by ordering the letter to name properties, elements, functions and keywords of the different languages.");
  });

  creditsButton.addEventListener("click", () => {
    alert("Created by Inês Barata Feio Borges.\nAll rights reserved.");
  });

  playButton.addEventListener("click", () => {
    introductionBox.classList.add("hidden");
    menuBox.classList.remove("hidden");
    playButton.disabled = true;

    const languagesButtons = document.getElementsByClassName("languageButton");
    [...languagesButtons].forEach(button => {
      button.addEventListener("click", (e) => {
        menuBox.classList.add("hidden");
        const game = new Game();
        game.displayBox();
        // Start the clock
        clock = setInterval(time, 1000);
        // Append a child h3 element refering to the technology
        nameTechnology = document.createElement("h3");
        nameTechnology.innerHTML = e.target.innerHTML; // Gets the name of the technology selected
        [...gameBox.getElementsByTagName("h3")].forEach(h3 => h3.remove()); // Removes the previous h3 childnodes
        gameBox.appendChild(nameTechnology);

        game.gameInteraction();
        const interval = setInterval(() => {
          const letterDivs = document.querySelectorAll('.wordBox > *');
          const letterDivsSorted = [...letterDivs].sort((a, b) => {
            const aNum = parseInt(a.style.order, 10); // Converts the string into a number
            const bNum = parseInt(b.style.order, 10); // Converts the string into a number

            if(Number.isNaN(aNum)) return 1; // If it is not a number
            if(Number.isNaN(bNum)) return -1; // If it is not a number

            return aNum - bNum; // Orders the array
          })
          const currentWord = letterDivsSorted.map(el => el.textContent).join(""); // Joins the letters to form a word
          if (currentWord == word) { // If the user got the word right
            points++; // Increments points by one
            document.getElementById("span-score").innerHTML = String(points); // Sets the points in the element
            hintBox.innerHTML = "";
            game.gameInteraction(); // Begins another game
          }
        }, 500);

        hintButton.addEventListener("click", () => {
          document.getElementById("span-score").innerHTML = String(--points); // Subtracts one to the score
          const letterDivs = document.querySelectorAll('.wordBox > *');
          if(hintBox.innerHTML === ""){
            hintArray = [];
            for(var i=0; i< word.length; i++){
              var div = document.createElement("div");
              hintBox.appendChild(div);
            }
            var randomNumber = Math.floor(Math.random() * letterDivs.length+1);
            hintArray.push(randomNumber);
            var hintDivs = hintBox.childNodes;
            letterDivs.forEach(letter => {
              if(hintArray.includes(parseInt((letter.id), 10))){
                [...hintDivs][letter.id-1].innerHTML = [...letterDivs][letter.id-1].innerHTML;
              }else{
                [...hintDivs][letter.id-1].innerHTML = "_";
              }
            });
            gameBox.appendChild(hintBox);
          }else{
            if(hintArray.length != word.length){ // this is to prevent from entering into an infinite loop when all the letters have been generated
              var randomNumber = Math.floor(Math.random() * letterDivs.length+1);
              while(hintArray.includes(randomNumber)){ // Prevents from having repeated random numbers
                var randomNumber = Math.floor(Math.random() * letterDivs.length+1);
              }
              hintArray.push(randomNumber)
            }
            var hintDivs = hintBox.childNodes;
            letterDivs.forEach(letter => {
              if(hintArray.includes(parseInt((letter.id), 10))){
                [...hintDivs][letter.id-1].innerHTML = [...letterDivs][letter.id-1].innerHTML;
              }else{
                [...hintDivs][letter.id-1].innerHTML = "_";
              }
            });
            gameBox.appendChild(hintBox);
          }
        });

      })
    })
  });

  const Game = class Game{
    displayBox(){
      gameBox.classList.remove("hidden");
    }
    choseWord(){ // Returns one random word and chooses the array
      if(nameTechnology.innerHTML === "HTML5"){ // If the technology choosen
        const len = html5.length; // Gets the lenght of the array
        const wordIndex = Math.floor(Math.random() * len); // Selects a random word from the array
        return html5[wordIndex];
      }else if(nameTechnology.innerHTML === "CSS3"){
        const len = css3.length;
        const wordIndex = Math.floor(Math.random() * len);
        return css3[wordIndex];
      }else if(nameTechnology.innerHTML === "JAVASCRIPT"){
        const len = javascript.length;
        const wordIndex = Math.floor(Math.random() * len);
        return javascript[wordIndex];
      }else if(nameTechnology.innerHTML === "SQL"){
        const len = sql.length;
        const wordIndex = Math.floor(Math.random() * len);
        return sql[wordIndex];
      }else if(nameTechnology.innerHTML === "PHP"){
        const len = php.length;
        const wordIndex = Math.floor(Math.random() * len);
        return php[wordIndex];
      }else if(nameTechnology.innerHTML === "JAVA"){
        const len = java.length;
        const wordIndex = Math.floor(Math.random() * len);
        return java[wordIndex];
      }else if(nameTechnology.innerHTML === "PYTHON"){
        const len = python.length;
        const wordIndex = Math.floor(Math.random() * len);
        return python[wordIndex];
      }
    }
    gameMechanics(){

      word = this.choseWord(); // Gets the word chosen
      const lenWord = word.length; // Gets the length of the word chosen
      let wordBox; // Makes it accessible inside this scope
      if(!document.contains(document.getElementsByClassName("wordBox")[0])){ // Creates a container for the first time
        wordBox = document.createElement("div"); // Creates a div that contain the word
        wordBox.classList.add("wordBox");
      }
      if(document.contains(document.getElementsByClassName("wordBox")[0])){ // Eliminates the word from the container on the next play
        document.getElementsByClassName("wordBox")[0].remove(); // Removes the container
        wordBox = document.createElement("div"); // Creates a div that contain the word
        wordBox.classList.add("wordBox");
      }
      for(let i = 0; i < lenWord; i++){
        const letter = document.createElement("div"); // Creates a div that contains the letters
        letter.innerHTML = word[i]; // Appends the letter to the div
        letter.id = i+1;
        wordBox.appendChild(letter); // Appends the div to its parent
      }
      gameBox.appendChild(wordBox); // Appends the div to the gameBox
      const lettersArray = document.querySelector(".wordBox").querySelectorAll("div"); // Gets an array of letters
      var arrayRandomNumbers = [];
      lettersArray.forEach((div) => {
        var randomNumber = Math.floor(Math.random() * lenWord+1); // Generates a random number
        while(arrayRandomNumbers.includes(randomNumber)){ // Checks if a random numeber is in the array
          randomNumber = Math.floor(Math.random() * lenWord+1); // If it is in generates another random number until it is not in
        }
        arrayRandomNumbers.push(randomNumber);
        div.style.order = randomNumber; // Switches the order of the letters
      });
      return [lettersArray, word];
    }
    gameInteraction(){
      let turn = 0;
      const gameMechanics = this.gameMechanics();
      const letters = gameMechanics[0];
      word = gameMechanics[1];
      let lettertoSwitch = 0; // To be in the scope of the function
      let letterToBeSwitchedWith = 0;
      let indexLettertoSwitch = 0;
      letters.forEach((letter) => {
        letter.addEventListener("click", (e) => {
          if(turn % 2 === 0){ // If its the first time the user clicks on the letter
            letter.style.backgroundColor = "#feca1d";
            lettertoSwitch = letter.style.order; // Stores the position of the letter
            indexLettertoSwitch = letter.id; // Saves the position of the letter in the word
            turn ++;
          }else if(turn % 2 === 1){ // If its the second time the user clicks on a letter
            letterToBeSwitchedWith = letter.style.order; // Stores the position of the letter
            turn ++;
            
          }
          if(turn % 2 == 0 && turn !== 0){ // If the player has made to moves and its not the first turn
            letter.style.order = lettertoSwitch; // Switches the current letter with the first one clicked
            letters[indexLettertoSwitch-1].style.order = letterToBeSwitchedWith; // Switches the second clicked letter with first one clicked
            letters[indexLettertoSwitch-1].style.backgroundColor = "transparent";
          }
        })
      })
    }
  }

});