import Game from './Game';


const init = () => {
  window.onresize = startGame;  
}

const startGame = () => {

}

window.onload = init;

document.addEventListener('DOMContentLoaded', function(event) {
  const g = new Game();
  g.start();
});




