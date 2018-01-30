import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';

let stage = new PIXI.Container;
let bat1 = new Bat(0, 0x16a085);
let bat2 = new Bat(400, 0x16a085, true);

stage.addChild( bat1.get_bat(), bat2.get_bat() );

export default stage;