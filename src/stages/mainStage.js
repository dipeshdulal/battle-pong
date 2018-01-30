import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';

let stage = new PIXI.Container;
// automatic player
let bat1 = new Bat(0, 0x16a085);

let bat2 = new Bat(400, 0x16a085, true);
let ball = new Ball(0xecf0f1);

let ticker = new PIXI.ticker.Ticker();

ticker.stop();
ticker.add( (del) => ball.update_ball(del) );
ticker.start();

stage.addChild( bat1.get_bat(), bat2.get_bat(), ball.get_ball() );


export default stage;