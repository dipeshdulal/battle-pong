import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';
import CONFIG from '../config';


let stage = new PIXI.Container;

// automatic player
let bat1 = new Bat(0, 0x16a085, true);
let bat2 = new Bat(CONFIG.width-10, 0x16a085, true);
let ball = new Ball(0xecf0f1);

// update logic
let ticker = new PIXI.ticker.Ticker();

ticker.stop();
ticker.add( (del) => ball.update_ball(del) );
ticker.start();
// end update logic

stage.addChild( bat1.get_bat(), bat2.get_bat(), ball.get_ball());

export default stage;