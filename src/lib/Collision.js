import pixi from 'pixi.js';
import CONFIG from '../config'

let collision = {
	collision_wall : (ball) => {
		//console.log(ball.y)
		if(ball.x>=CONFIG.width-10){

			return true;
		}
		// if(ball.x<=0){
			
		// 	return true;
		// }
		else{
			return false;
		}
	},
	collision_bat : (ball,bat) => {
		if(ball.y > bat.y && ball.y < bat.y + 100){

			if(bat.right && (ball. x > bat.x-10) ){ 
				// console.log("1");
				return true; 
			}

			if(!bat.right && (ball.x < bat.x+20) ){ 
				return true; 
			}
		}
		return false;		
	},

	collision_squash: (ball) => {
		if(ball.x<=10){
			return true;
		}
	}
}


export default collision;
