

export default class Word  {
  constructor(stringToDraw, x, y) {
    this.letters = [];
    this.stringToDraw = stringToDraw;
    stringToDraw.split('').forEach(char => {
      let obj = {
        char, 
        x,
        y
      }
      this.letters.push(obj);
    });
    this.posX = x;
    this.posY = y;
  }
  
  getLetters() {
    return this.letters;
  }
  
  render() {
    
  }
  
  draw(ctx, string) {
    const textWidth = ctx.measureText(this.stringToDraw).width;
    const textHeight = ctx.measureText(this.stringToDraw);

    this.letters.forEach((letter, i) => {
      const x = this.posX + (55 * i);
      const y = this.posY + (25 * i);
      ctx.textBaseline = 'top';
      ctx.font = '69px Joystix';
      ctx.fillStyle = '#000';
      ctx.fillText(letter.char, (x - textWidth), (this.posY - 69));   
      letter.rect = [letter.x, letter.y, ctx.measureText(letter.char).width, 69];
    });
  }
  
  drawLetter(letter) {
    
  }
}