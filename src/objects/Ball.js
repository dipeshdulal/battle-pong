import {pixi} from 'pixi.js';
import CONFIG from '../config';

// ball implementation of battle pong game
export default class Ball{
    
    constructor(color, x, y){
        this.stage = new PIXI.Container();
        this.speed = { x: 2, y: -2 };
        this.color = color;
        this.ball = new PIXI.Graphics();
        this.x = x;
        this.y = y;
        this.draw_ball();
    }

    draw_ball(){
        this.ball.beginFill(this.color, 1);
        this.ball.lineStyle(2, this.color, 1);
        this.ball.drawCircle(this.x, this.y, 10);
        this.ball.endFill();
        this.stage.addChild(this.ball);
    }

    update_ball(delta){
        // update the ball position here
        this.ball.x += this.speed.x;
        this.ball.y += this.speed.y;
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    get_ball(){ return this.stage; }

    check_bound(delta){
        // check the bound
        if(this.y <= 10){ // upper bound
            if(this.speed.x < 0 && this.speed.y < 0){ this.speed.y = -this.speed.y; }
        }
        if(this.y >= CONFIG.height - 10){ // lower bound
            if(this.speed.x > 0 && this.speed.y > 0){ this.speed.y = -this.speed.y; }
        }
    }
}