// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

const imgURL = 'https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png';
const image = new Image();
image.src = imgURL;

const image2 = new Image();
image2.src = 'https://raw.githubusercontent.com/CodeExplainedRepo/Original-Flappy-bird-JavaScript/master/img/sprite.png';
image2.id = 'gameOver';

const startButton = document.querySelector('.start-button');
const restartButton = document.querySelector('.restart-button');
const endGameButton = document.querySelector('.end-game');

const scoreDiv = document.querySelector('.score');
const bestScoreDiv = document.querySelector('.bestScore');
const scoreTable = document.querySelector('.scoreTable');
const scoreTableScore = document.querySelector('.theScore');
const scoreTableBestScore = document.querySelector('.theBestScore');

const hitSound = new Audio('hit.mp3');
const pointSound = new Audio('point.mp3');
const wingFlapSound = new Audio('wing.mp3');
const dieSound = new Audio('die.mp3');