import ENGINE from './GameEngine.js';
//import Snake from './Snake.js';
import BOARD from './Board.js';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


BOARD.setContext(ctx);
BOARD.setBGColor('#e060a6');

ENGINE.setConfig({ window, document, BOARD });
ENGINE.init();
ENGINE.start();
