import {pixi} from 'pixi.js';
import CONFIG from '../config';
import collision from '../lib/Collision';
// ball implementation of battle pong game
export default class Ball{
    
    constructor(color, x, y){
        this.ticker = new PIXI.ticker.Ticker();
        this.stage = new PIXI.Container();
        this.speed = { x: 1, y: 1};
        this.color = color;
        // this.ball = new PIXI.Graphics();
        this.x = x;
        this.y = y;
    }

    draw_ball(){

        this.ball = PIXI.Sprite.fromImage('./pong.png')
        this.ball.position.set(this.x,this.y)
        this.ball.scale.set(0.2,0.2)
        
        // this.ball.beginFill(this.color, 1);
        // this.ball.lineStyle(2, this.color, 1);
        // this.ball.drawCircle(this.x, this.y, 10);
        // this.ball.endFill();
        this.stage.addChild(this.ball);
    }

    update_ball(delta){
        // update the ball position here
        this.ball.x += this.speed.x;
        this.ball.y += this.speed.y;
        this.x += this.speed.x;
        this.y += this.speed.y;        
        // if(collision(this.ball,this.bat)){
        //     console.log(this.ball.y+" "+this.bat.y+" "+this.bat.y+200);
        // }

    }


    get_stage(){ return this.stage; }

    check_bound(delta){
        // check the bound
        //console.log(this.ball.y);
        if(this.y <= 10){ // upper bound

            if(this.speed.x < 0 && this.speed.y < 0){ this.speed.y = -this.speed.y; }
        }
        if(this.y >= CONFIG.height - 10){ // lower bound
            if(this.speed.x > 0 && this.speed.y > 0){ this.speed.y = -this.speed.y; }
        }
    }

    release_ball(y){
        //console.log(y);
        this.y=y;
        this.ticker.add(del=>{
            this.update_ball(del);
            this.check_bound();
        })
        this.ticker.start();

    }
    stop_ball(){
        this.ticker.stop();
    }
}