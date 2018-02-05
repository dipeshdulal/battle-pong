import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';
import CONFIG from '../config';

class MainStage{

	constructor(){
		this.stage = new PIXI.Container;
		this.stage.interactive=true;
		this.bat1 = new Bat(0, 0x16a085, true,stage);
		this.bat2 = new Bat(CONFIG.width-10, 0x16a085, true,stage);
		this.bat1.attach_ball();
		this.ticker = new PIXI.ticker.Ticker();
		this.ticker.add(this.game_loop);
		this.stage.addChild( bat1.get_bat(), bat2.get_bat());
	}

	// get the stage
	get_stage(){
		return this.stage;
	}

	game_loop(){
		
	}
}


let mainStage = new MainStage();

export default mainStage.get_stage;