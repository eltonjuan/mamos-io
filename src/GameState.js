import State from './State';
import {States} from './gameStates';
import Ship from './Ship';
import Word from './Word';
import {SHIP_POINTS, FLAME_POINTS} from './points';

export default class GameState extends State {
  constructor(game) {
    super(game)
    this.canvasWidth = game.canvas.ctx.width;
    this.canvasHeight = game.canvas.ctx.height;
    this.ship = new Ship(SHIP_POINTS, FLAME_POINTS, 2, 100, 100);
    this.ship.maxX = this.canvasWidth;
    this.ship.maxY = this.canvasHeight;
    this.name = new Word('abc', (this.canvasWidth / 2), (this.canvasHeight / 2)); 
    this.generateLvl();
  }
  
  generateLvl() {
    this.ship.x = this.canvasWidth / 2;
    this.ship.y = this.canvasHeight / 2;
    this.bullets = [];
  }
  
  update() {
    // check if bullets hit letters
    const letters = this.name.getLetters();
    
    letters.forEach((letter, i) => {
      this.bullets.forEach((bullet, j) => {
        if (bullet.x > letter.x - 55 && bullet.x < ((letter.x - 55) + letter.rect[2]))
         {
          if (bullet.y > (letter.y - 69) && bullet.y < ((letter.y- 69) + letter.rect[3])) {
            letters.splice(i, 1);
            this.bullets.splice(j, 1);
          } 
        }
      });
    });
    if (letters.length === 0) {
      console.log(States);
      this.game.nextState = States.BOSS;
    }
    const bulletList = document.getElementById('bullets');
    bulletList.innerHTML = '';
    this.bullets.forEach((bullet, i) => {
      const li = document.createElement('li');
      li.innerHTML = `Bullet ${i} - X:${bullet.x}, Y: ${bullet.y}`
      bulletList.appendChild(li);
    });
    
    // update all bullet positions
    for (var i = 0, len = this.bullets.length; i < len; i++) {
			var b = this.bullets[i];
			b.update();
			// remove bullet if removeflag is setted
			if (b.shallRemove) {
				this.bullets.splice(i, 1);
				len--;
				i--;
			}
		}
    this.ship.update();
  }
  
  handleInputs(input) {
    
    if (input.isDown('RIGHT')) { 
      this.ship.rotate(0.06);
    } 
    if (input.isDown('LEFT')) {
      this.ship.rotate(-0.06);
    } 
    if (input.isDown('UP')) {
      this.ship.addVel();
    } 
    
    if (input.isPressed('SPACEBAR')) {
      console.log('here');
      console.log(this.ship.shoot());
      this.bullets.push(this.ship.shoot());
      console.log(this.bullets);
    }
   
    
  }
  
  render(ctx) {
    
    ctx.clearAll();
    for (var i = 0, len = this.bullets.length; i < len; i++) {
			this.bullets[i].draw(ctx);
		}
    this.ship.draw(ctx);
    this.name.draw(ctx);
  }
}