import {pixi} from 'pixi.js';
import CONFIG from '../config';

// for simple score counter
export default class Score {
    constructor(){
        this.s = 0;
        this.stage = new PIXI.Container;
        let style = new PIXI.TextStyle({ fill: [0xffffff], fontSize: 16 });
        this.score = new PIXI.Text('Your Misses: ' + this.s, style );
        this.score.x = CONFIG.width - 150;
        this.score.y = 20;
        this.stage.addChild(this.score); 
    }

    increase(){
        this.score.text = 'Your Misses: ' + (++this.s);
    }

    get_stage(){
        return this.stage;
    }
}