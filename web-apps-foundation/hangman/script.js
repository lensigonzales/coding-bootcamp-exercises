"use strict";

//word kommen aus dem words Array aus der words.js
const guessWord = document.querySelector(".word");
const keyboardEl = document.querySelector(".keyboard");
const keys = document.querySelectorAll(".key");
const newGameBtn = document.querySelector(".btn-newgame");
const failsCountEl = document.querySelector(".fails-count");
const activeEl = document.querySelector(".state");
const failsEl = document.querySelector(".fails-wrapper");
/*TODO: 
1) beim initial load/ reload getWord()
2) state updaten mit usedIndeces - used index wird nicht nochmal benutzt 
*/

const state = {
  word: "",
  fails: 0, //can't be higher than 10
  newGame: true,
  active: true,
};

function getRandomIndex() {
  return Math.floor(Math.random() * 10);
}

function getWord() {
  guessWord.innerHTML = "";
  activeEl.innerText = "ACTIVE";
  activeEl.classList.remove("fail-animation");
  state.word = words[getRandomIndex()];
  state.fails = 0;
  const amountChars = state.word.length;
  for (let i = 0; i < amountChars; i++) {
    const newCharacter = document.createElement("div");
    newCharacter.classList.add("char");
    newCharacter.innerText = "_";
    guessWord.append(newCharacter);
  }
}

function matchCharacter(char) {
  const charEl = document.querySelectorAll(".char");

  //ist char in dem word enthalten und wenn ja gib den index raus und schreibe char am index im guessWord.innerText;
  for (let i = 0; i < state.word.length; i++) {
    if (state.word[i] === char) {
      charEl[i].innerText = char;
    }
  }
  if (!state.word.includes(char) && state.fails < 10) {
    state.fails += 1;
    failsCountEl.innerHTML = state.fails;
    failsEl.style.backgroundColor = `rgb(255, 0, 0, 0.${state.fails})`;
  }
}

newGameBtn.addEventListener("click", getWord);

keyboardEl.addEventListener("click", (event) => {
  matchCharacter(event.target.innerText);
  if (event.target.className === "key") {
    event.target.style.pointerEvents = "none";
    event.target.style.backgroundColor = "grey";
  }
  if (state.fails === 10) {
    activeEl.innerHTML = "FAIL";
    activeEl.classList.add("fail-animation");
    keyboardEl.style.pointerEvents = "none";
  }
});

getWord();
