import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';
import CONFIG from '../config';
import Collision from '../lib/Collision';

class MainStage{

	constructor(){
		this.stage = new PIXI.Container;
		this.stage.interactive=true;
		this.ticker = new PIXI.ticker.Ticker();
		this.bat1 = new Bat(0, 0x16a085, true, this.stage, this.ticker);
		this.bat2 = new Bat(CONFIG.width-10, 0x16a085, true, this.stage, this.ticker);
		this.bat2.attach_ball();
		this.ticker.add(()=>{this.game_loop(this.bat1,this.bat2)});
		this.stage.addChild( this.bat1.get_bat(), this.bat2.get_bat());
	}

	// get the stage
	get_stage(){
		return this.stage;
	}

	start_ticker(){
		this.ticker.start();
	}

	game_loop(bat1,bat2){
			if(!this.bat1.ball_attached && !this.bat2.ball_attached){
				
				if(Collision.collision_wall(this.bat1.ball)){
	                this.bat1.ball.stop_ball()
	                // this.bat2.ball.stop_ball()
	                //this.ticker.stop();
	            }


				if(Collision.collision_wall(this.bat2.ball)){
	                // this.bat1.ball.stop_ball()
	                this.bat2.ball.stop_ball()
	                //this.ticker.stop();
	            }
  				if(bat1.attach_ball){
  					if(Collision.collision_bat(this.bat1.ball,this.bat2) || Collision.collision_bat(this.bat1.ball,this.bat1)){
  					this.bat1.ball.speed.x= -this.bat1.ball.speed.x;		
  					}
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