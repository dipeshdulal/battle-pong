import {pixi} from 'pixi.js';
import CONFIG from '../config';
import Ball from './Ball';

// bat of the ping pong
export default class Bat {
<<<<<<< HEAD
    constructor(x, color, no_attachment){
=======

    constructor(x, color, no_attachment,parent){
>>>>>>> b55e440ad0d61c4a193b500b8d2c641ef13dda17
        this.stage = new PIXI.Container();
        this.y = 0;
        this.color = color;
        this.x = x;
        this.no_attachment = no_attachment;
        this.ball = new Ball(0xffffff, (x + 20 > CONFIG.width - 10) ? x - 10: x + 20, 50);
        this.ball.draw_ball();
        this.ball_attached = true;
        this.parent=parent;
        this.draw_bat();
    }

<<<<<<< HEAD
    draw_bat(){
=======
    attach_ball(){
        this.stage.addChild(this.ball.get_stage());
        this.ball_attached = true;
    }

    remove_ball(){
        this.stage.removeChild(this.ball.get_stage());
    }

    unattach_ball(){
        this.ball_attached=false;
    }

    draw_bat() {
>>>>>>> b55e440ad0d61c4a193b500b8d2c641ef13dda17
        let rect = new PIXI.Graphics();
        rect.beginFill(this.color, 1);
        rect.lineStyle(2, this.color, 1);
        rect.drawRect(this.x, 0, 10, 100);
        rect.endFill();
        rect.interactive = true;
        addEventListener('click', e => {
            this.ball.release_ball(this.y+50);
            this.unattach_ball();
        } );
        if(this.no_attachment) rect.on("mousemove", (e) => { this.move_bat(e, rect); } )
        this.stage.addChild(rect);
    }

    move_bat(e, rect) {
        rect.y = (e.data.global.y + 100 >= CONFIG.height) ? CONFIG.height-100 : (e.data.global.y < 0) ? 0 : e.data.global.y;
        this.y=rect.y;
         if(this.ball_attached){
        this.ball.ball.position.y=(e.data.global.y+100>=CONFIG.height)?CONFIG.height-100:(e.data.global.y <0)?0:e.data.global.y;
         }
    }

    get_bat() { return this.stage; }
    
}