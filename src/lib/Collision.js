import pixi from 'pixi.js';
import CONFIG from '../config'

let collision = {
	collision_wall : (ball) => {
		//console.log(ball.y)
		if(ball.x>=CONFIG.width){
			return true;
		}else{
			return false;
		}
	},
	collision_bat : (ball,bat) => {
		//console.log(bat,ball);
		if(ball.x>=bat.x&&ball.y>bat.y&&ball.y<bat.y+100){
			console.log("a");
		}
	}
}


export default collision;
