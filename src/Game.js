import Canvas from './Canvas';
import Input from './Input';
import GameState from './GameState';
import BossState from './BossState';
import {States} from './gameStates';

export default class Game {
  constructor() {
    this.canvas = new Canvas();
    this.input = new Input(); 
    this.currentState = null;
    this.nextState = States.GAME; 
  }

  start() {
    this.canvas.animate(() => {

      if (this.nextState !== States.NO_CHANGE) {
        switch(this.nextState) {
          case States.GAME: 
            this.currentState = new GameState(this);
            break;
          case States.END: 
            this.currentState = new EndState(this);
            break;
          case States.BOSS:
            this.currentState = new BossState(this);
        }
        this.nextState = States.NO_CHANGE;
      }
      this.currentState.handleInputs(this.input);
      this.currentState.update();
      this.currentState.render(this.canvas.ctx);
    });
  }
  
}