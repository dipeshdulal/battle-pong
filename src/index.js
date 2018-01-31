import { pixi } from 'pixi.js';
import mainStage from './stages/mainStage';
import CONFIG from './config';

let type = (!PIXI.utils.isWebGLSupported())? "canvas" : "webgl";

let app = new PIXI.Application({ 
                        width: CONFIG.width, 
                        height: CONFIG.height, 
                        backgroundColor: CONFIG.backgroundColor,
                        autoResize: true });

let setup = () => {
    app.stage.addChild(mainStage);
}

app.loader.load(setup);

document.getElementById("app").appendChild(app.view);