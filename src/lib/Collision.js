import pixi from 'pixi.js';
import CONFIG from '../config'
let collision = (ball, bat)=>{
  if(ball.y>bat.y && ball.y<bat.y+200){
  	return true;}
  	else{
  		return false;
  	}
}

export default collision;