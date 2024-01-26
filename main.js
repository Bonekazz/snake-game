import ENGINE from './GameEngine.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ENGINE.setConfig({ window, document, ctx });

ENGINE.init();
ENGINE.update();
