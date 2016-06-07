import State from './State';
import Ship from './Ship';
import Name from './Name';
import {SHIP_POINTS, FLAME_POINTS} from './points';

export default class GameState extends State {
  constructor(game) {
    super(game)
    this.canvasWidth = game.canvas.ctx.width;
    this.canvasHeight = game.canvas.ctx.height;
    this.ship = new Ship(SHIP_POINTS, FLAME_POINTS, 2, 100, 100);
    this.ship.maxX = this.canvasWidth;
    this.ship.maxY = this.canvasHeight;
    this.name = new Name(); 
    this.generateLvl();
  }
  
  generateLvl() {
    this.ship.x = this.canvasWidth / 2;
    this.ship.y = this.canvasHeight / 2;
    this.bullets = [];
  }
  
  update() {
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
    this.ship.draw(ctx)
    this.name.draw(ctx);
  }
}