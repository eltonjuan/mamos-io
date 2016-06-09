

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
      const letterWidth = ctx.measureText(letter.char).width;
      letter.x = this.posX + (55 * i);
      letter.y = this.posY;
      ctx.textBaseline = 'top';
      ctx.font = '69px Joystix';
      ctx.fillStyle = '#000';
      console.log(i);
      ctx.fillText(letter.char, (letter.x - letterWidth), (letter.y - 69));
      ctx.strokeRect((letter.x - letterWidth), (letter.y - 69), letterWidth - 5, 69);
      letter.rect = [letter.x - letterWidth, letter.y, letterWidth, 69];
    });
  }
  
  drawLetter(letter) {
    
  }
}