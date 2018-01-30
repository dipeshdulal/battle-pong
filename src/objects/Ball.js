import {pixi} from 'pixi.js';

// ball implementation of battle pong game
export default class Ball{
    constructor(color){
        this.stage = new PIXI.Container();
        this.x = 200;
        this.y = 300;
        this.color = color;
        this.ball = new PIXI.Graphics();
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
        this.ball.x += 10;
    }

    get_ball(){ return this.stage; }

}