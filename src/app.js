import Game from './Game';


const init = () => {
  window.onresize = startGame;  
}

const startGame = () => {
  
}

window.onload = init;

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('hello');
  const g = new Game();
  g.start();
});




