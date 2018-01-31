import { pixi } from 'pixi.js';
import mainStage from './stages/mainStage';

let type = (!PIXI.utils.isWebGLSupported())? "canvas" : "webgl";

let app = new PIXI.Application({ 
                        width: window.innerWidth, 
                        height: window.innerHeight, 
                        backgroundColor: 0x2c3e50,
                        autoResize: true });

let setup = () => {
    app.stage.addChild(mainStage);
}

app.loader.load(setup);

document.getElementById("app").appendChild(app.view);