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

// score0Element.textContent = 0;
// score1Element.textContent = 0;
// diceElement.classList.add('hidden');

let totalScore;
let currentScore;
let activePlyer;
let isPlay;

const resetGame = () => {
  totalScore = [0, 0];
  currentScore = 0;
  activePlyer = 0;
  isPlay = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Label.textContent = 0;
  current0Label.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.add('player--active');
  diceElement.classList.add('hidden');
};

resetGame();

const swoActivePlyer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlyer}`).textContent = currentScore;
  activePlyer = activePlyer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (isPlay) {
    const numberRandom = Math.trunc(Math.random() * 6) + 1;
    console.log(numberRandom);

    diceElement.classList.remove('hidden');
    diceElement.src = `dice${numberRandom}.png`;

    if (numberRandom !== 1) {
      currentScore += numberRandom;

      document.getElementById(`current--${activePlyer}`).textContent =
        currentScore;
    } else {
      swoActivePlyer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlay) {
    totalScore[activePlyer] += currentScore;

    document.getElementById(`score--${activePlyer}`).textContent =
      totalScore[activePlyer];

    if (totalScore[activePlyer] >= 20) {
      isPlay = false;
      document
        .querySelector(`.player--${activePlyer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlyer}`)
        .classList.remove('player--active');
    } else {
      swoActivePlyer();
    }
  }
});

btnNew.addEventListener('click', resetGame);

5 / 89;
