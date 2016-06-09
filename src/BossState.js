import Ship from './Ship'
import State from './State';
import {SHIP_POINTS, FLAME_POINTS} from './points';

export default class BossState extends State {
  constructor(game) {
    super(game)
    this.ship = new Ship(SHIP_POINTS, FLAME_POINTS, 2, 100, 100);
  }
  
  render(ctx) {
    ctx.clearAll();
    this.ship.draw(ctx);
  }
  
}