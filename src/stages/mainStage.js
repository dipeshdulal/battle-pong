import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';
import CONFIG from '../config';
import Collision from '../lib/Collision';
import Score from '../objects/Score';

class MainStage{

	constructor(){
		this.stage = new PIXI.Container;
		this.stage.interactive=true;
		this.score = new Score;
		this.ticker = new PIXI.ticker.Ticker();
		this.bat1 = new Bat(0, 0x2c3e50, false, this.stage, this.ticker);
		this.bat2 = new Bat(CONFIG.width-10, 0x16a085, true, this.stage, this.ticker);
		this.bat2.attach_ball();
		this.ticker.add((delta)=>{this.game_loop(this.bat1,this.bat2, delta)});
		this.stage.addChild( this.bat1.get_bat(), this.bat2.get_bat(), this.draw_rect(), this.score.get_stage());
	}

	draw_rect(){
		let rect = new PIXI.Graphics();
        rect.beginFill(0x16a085, 1);
        rect.lineStyle(2, 0x16a085, 1);
        rect.drawRect(0, 0, 3, CONFIG.height);
		rect.endFill();
		return rect;
	}

	// get the stage
	get_stage(){
		return this.stage;
	}

	start_ticker(){
		this.ticker.start();
	}

	game_loop(bat1, bat2){
			if(!this.bat1.ball_attached && !this.bat2.ball_attached){

				if(Collision.collision_squash(this.bat2.ball)){
					this.bat2.ball.speed.x= -this.bat2.ball.speed.x;
				}

				if(Collision.collision_wall(this.bat2.ball)){
					this.ticker.stop();
					this.bat2.ball.stop_ball();
					this.bat2.ball_attached = true;
					this.bat2.ball.reset(CONFIG.width-10);
					this.score.increase();
				}
				
				if(bat2.attach_ball){
					if(Collision.collision_bat(this.bat2.ball,this.bat1)||Collision.collision_bat(this.bat2.ball,this.bat2)){
						this.bat2.ball.speed.x= -this.bat2.ball.speed.x;
					}
	           }
	           	
			}
	}
}


let mainStage = new MainStage();
let stage = mainStage.get_stage();

export default stage;