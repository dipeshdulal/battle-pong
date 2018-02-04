import {pixi} from 'pixi.js';
import CONFIG from '../config';

// bat of the ping pong
export default class Bat {
    constructor(x, color, no_attachment){
        this.stage = new PIXI.Container();
        this.y = 0;
        this.color = color;
        this.x = x;
        this.no_attachment = no_attachment;
        this.draw_bat();
    }

    draw_bat(){
        let rect = new PIXI.Graphics();
        rect.beginFill(this.color, 1);
        rect.lineStyle(2, this.color, 1);
        rect.drawRect(this.x, 0, 10, 100);
        rect.endFill();
        rect.interactive = true;
        if(this.no_attachment) rect.on("mousemove", (e) => { this.move_bat(e, rect); } )
        this.stage.addChild(rect);
    }

    move_bat(e, rect) {
        rect.y = (e.data.global.y + 100 >= CONFIG.height) ? CONFIG.height-100 : (e.data.global.y < 0) ? 0 : e.data.global.y;
    }

    get_bat() { return this.stage; }
}