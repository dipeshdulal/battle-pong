import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';
import CONFIG from '../config';

class MainStage{

	constructor(){
		this.stage = new PIXI.Container;
		this.stage.interactive=true;
		this.bat1 = new Bat(0, 0x16a085, true, this.stage);
		this.bat2 = new Bat(CONFIG.width-10, 0x16a085, true, this.stage);
		this.bat1.attach_ball();
		this.ticker = new PIXI.ticker.Ticker();
		this.ticker.add(this.game_loop);
		this.stage.addChild( this.bat1.get_bat(), this.bat2.get_bat());
	}

	// get the stage
	get_stage(){
		return this.stage;
	}

	game_loop(){
		
	}
}


let mainStage = new MainStage();
let stage = mainStage.get_stage();

export default stage;