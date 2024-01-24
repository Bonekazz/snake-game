import ENGINE from "./GameEngine.js";
import Snake from "./Snake.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#e060a6";
ctx.fillRect(0, 0, 400, 600);

ENGINE.start()