const KEYCODES = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACEBAR: 32,
  ENTER: 13
}

export default class Input {
  constructor(keys = KEYCODES) {
    this.keys = {};
    this.down = {};
    this.pressed = {};

    for (var key in keys) {
      const code = keys[key];
      this.keys[code] = key;
      this.down[key] = false;
      this.pressed[key] = false;
    }

    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (this.keys[e.keyCode]) {
        console.log(`Key Pressed: ${this.keys[e.keyCode]}`);
        this.down[this.keys[e.keyCode]] = true;
      }
    });

    document.addEventListener('keyup', (e) => {
     	if (this.keys[e.keyCode]) {
        this.down[this.keys[e.keyCode]] = false;
        this.pressed[this.keys[e.keyCode]] = false;
      }
    });
  }

  isDown(key) {
    return this.down[key];
  }

  isPressed(key) {
    if (this.pressed[key]) {
      return false;
    } else if (this.down[key]) {
      return this.pressed[key] = true;
    }
    return false;
  }
}