import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';
import CONFIG from '../config';


let stage = new PIXI.Container;
stage.interactive=true;
// automatic player
let bat1 = new Bat(0, 0x16a085, true,stage);
let bat2 = new Bat(CONFIG.width-10, 0x16a085, false,stage);

bat1.attach_ball();

// update logic
let ticker = new PIXI.ticker.Ticker();

// ticker.stop();
ticker.add( (del) => {
    //ball.update_ball(del,bat2);
    // ball.check_bound(del); // check the boundary and change direction
} );
ticker.start();
// end update logic

stage.addChild( bat1.get_bat(), bat2.get_bat());

export default stage;