class Board {
    constructor() {
        if (Board.instance) {
            throw new Error("New instance cannot be created")
        }
        Board.instance = this;

        this.ctx = null;
        this.size = {
            WIDTH: 400,
            HEIGHT: 600
        }
    }

    loadLevel(level) {

    }

    setContext(ctx) {
        this.ctx = ctx;
    }

    setBGColor(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.size.WIDTH, this.size.HEIGHT);
    }
  
}

const BOARD = new Board();

export default BOARD;
