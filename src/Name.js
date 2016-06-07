import Polygon from './Polygon'

export default class Name  {
  constructor() {
    
  }
  
  draw(ctx, string) {
    ctx.font = '68px Joystix';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    const width = ctx.measureText(string).width;
    const height = ctx.measureText(string).height;
    console.log(ctx.canvas.width / 2 , ctx.canvas.height);
    ctx.fillText('Michael Amos', (ctx.canvas.width / 2) - (width / 2), (ctx.canvas.height / 2) - (width / 2));
  }
}