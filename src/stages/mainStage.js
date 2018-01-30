import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';

let stage = new PIXI.Container;
// automatic player
let max_width = getComputedStyle(document.getElementById("app")).width.split("px")[0];
let bat1 = new Bat(0, 0x16a085, true);
let bat2 = new Bat(max_width - 10, 0x16a085, true);
let ball = new Ball(0xecf0f1);

// update logic
let ticker = new PIXI.ticker.Ticker();

ticker.stop();
ticker.add( (del) => ball.update_ball(del) );
ticker.start();
// end update logic

stage.addChild( bat1.get_bat(), bat2.get_bat(), ball.get_ball() );

export default stage;