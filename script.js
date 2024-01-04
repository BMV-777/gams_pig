'use strict';

//scoreElement
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
//btnElement
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//current
const current0Label = document.getElementById('current--0');
const current1Label = document.getElementById('current--1');
//plyer
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const totalScore = [0, 0];
let currentScore = 0;
let activePlyer = 0;
let isPlays = true;

const switchActivePlay = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlyer}`).textContent = currentScore;
  activePlyer = activePlyer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const roll = () => {
  if (isPlays) {
    //1.Random generate
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    console.log(diceNumber);
    //2.Display dice number
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    //3. Later player no 1
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlyer}`).textContent =
        currentScore;
      // current0Label.textContent = currentScore;
    } else {
      switchActivePlay();
    }
    //  activePlyer === player0 ? 'player--active' :
    // if (activePlyer) {
    //   player0.classList.remove('player--active');
    //   player1.classList.add('player--active');
    // } else {
    //   player1.classList.remove('player--active');
    //   player0.classList.add('player--active');
    // }
  }
};

btnRoll.addEventListener('click', roll);

const playHold = () => {
  if (isPlays) {
    //1.Add
    totalScore[activePlyer] += currentScore;
    document.getElementById(`score--${activePlyer}`).textContent =
      totalScore[activePlyer];
    //2
    if (totalScore[activePlyer] >= 20) {
      isPlays = false;
      document
        .querySelector(`.player--${activePlyer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlyer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
      // btnHold.classList.add('stop');
    } else {
      switchActivePlay();
    }
  }
};

btnHold.addEventListener('click', playHold);

const newGame = () => {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Label.textContent = 0;
  current1Label.textContent = 0;
  isPlays = true;
  currentScore = 0;
  activePlyer = 0;
  // totalScore = [0, 0];
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  diceElement.classList.add('hidden');
  // btnHold.classList.remove('stop');
  // document
  //   .querySelector(`.player--${activePlyer}`)
  //   .classList.remove('player--winner');
  // document
  //   .querySelector(`.player--${activePlyer}`)
  //   .classList.add('player--active');
};
btnNew.addEventListener('click', newGame);

// const newGame = () => {};

// btnNew.addEventListener('click', newGame);
5 / 85;
