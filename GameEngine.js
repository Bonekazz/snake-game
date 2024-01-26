import Board from './Board.js';
import Snake from './Snake.js';

class GameEngine {
    constructor() {
        if (GameEngine.instance) {
            throw new Error('New instance cannot be created');
        }
        GameEngine.instance = this;

        this.window = null;
        this.dom = null;
        this.board = null;

        this.is_game_paused = false;

        this.snake = new Snake();


    }

    init() {

        this.window.addEventListener('click', () => {
            this.is_game_paused = true;
            console.log('game paused');
        });
    }

    update() {
        if (this.is_game_paused) {
            return;
        }
        console.log('game running');
        this.board.draw(this.snake);
        this.snake.moveDow();
        requestAnimationFrame(() => this.update());
    }

    setConfig(config) {
        this.window = config.window;
        this.dom = config.document;
        this.board = new Board(config.ctx);
    }

}

const ENGINE = new GameEngine();

export default ENGINE;