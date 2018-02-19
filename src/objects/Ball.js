import {pixi} from 'pixi.js';
import CONFIG from '../config';
import Collision from '../lib/Collision';
// ball implementation of battle pong game
export default class Ball{
    
    constructor(color, x, y,bat, right){
        this.ticker = new PIXI.ticker.Ticker();
        this.stage = new PIXI.Container();
        this.speed = (right) ? { x: -3, y: -3 } : {x: 3, y: 3} ;
        this.color = color;
        this.ball = new PIXI.Graphics();
        this.bat=bat;
        this.x = x;
        this.y = y;

        this.ticker.add(del => {
            this.update_ball(del);
            this.check_bound();
        });
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
        this.x += this.speed.x
        this.y += this.speed.y;        

    }


    get_stage(){ return this.stage; }

    check_bound(delta){
        
        if(this.y <= 10){ // upper bound
            
            if(this.speed.x > 0 && this.speed.y < 0){ this.speed.y = -this.speed.y; }
            if(this.speed.x<0 && this.speed.y<0){this.speed.y= -this.speed.y;}
        }
        if(this.y >= CONFIG.height - 10){
             // lower bound
            if(this.speed.x > 0 && this.speed.y > 0){ this.speed.y = -this.speed.y; }
            if(this.speed.x<0 && this.speed.y >0){this.speed.y = -this.speed.y;}
        }


    }

    release_ball(y){
        this.y = y; 
        this.ticker.start();
    }

    reset(x){
        // reset the game here
        this.ball.x = 0;
        this.x = x - 10;    
        this.speed = {x: -3, y: this.speed.y };   
    }

    stop_ball(){
        this.ticker.stop();
        this.ticker.destroy();
        this.ticker = new PIXI.ticker.Ticker();
        this.ticker.add(del => {
            this.update_ball(del);
            this.check_bound();
        });
    }

}
