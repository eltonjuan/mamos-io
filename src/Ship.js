import Polygon from './Polygon';
import Bullet from './Bullet';

export default class Ship extends Polygon {

  constructor(p, pf, s, x, y) {
    super(p);
    // create, init and scale flame polygon
		this.flames = new Polygon(pf);
		this.flames.scale(s);

		// visual flags
		this.drawFlames = false;
		this.visible = true;

		// position vars
		this.x = x;
		this.y = y;

		// scale the ship to the specified size
		this.scale(s);

		// facing direction
		this.angle = 0;

		// velocity
		this.vel = {
			x: 0,
			y: 0
		}
  }

	shoot() {
		var b = new Bullet(this.points[0] + this.x, this.points[1] + this.y, this.angle);
		b.maxX = this.maxX;
		b.maxY = this.maxY;
		return b;
	}

  addVel() {
		// length of veloctity vector estimated with pythagoras
		// theorem, i.e.
		// 		a*a + b*b = c*c
		if (this.vel.x * this.vel.x + this.vel.y * this.vel.y < 20 * 20) {
			this.vel.x += 0.05 * Math.cos(this.angle);
			this.vel.y += 0.05 * Math.sin(this.angle);
		}
		this.drawFlames = true;
	}

  rotate(theta) {
    super.rotate(theta);
    this.flames.rotate(theta);
    this.angle += theta;

  }

  draw(ctx) {
		if (!this.visible) {
			return;
		}

		ctx.drawPolygon(this, this.x, this.y);

		if (this.drawFlames) {
			ctx.drawPolygon(this.flames, this.x, this.y);
			this.drawFlames = false;
		}
	}

  update() {
		// update position
		this.x += this.vel.x;
		this.y += this.vel.y;

		this.vel.x *= 0.99;
		this.vel.y *= 0.99;

		// keep within bounds
		if (this.x > this.maxX) {
			this.x = 0;
		} else if (this.x < 0) {
			this.x = this.maxX;
		}
		if (this.y > this.maxY) {
			this.y = 0;
		} else if (this.y < 0) {
			this.y = this.maxY;
		}
  }
}