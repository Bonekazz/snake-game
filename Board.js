class Board {
    constructor(context) {
        if (Board.instance) {
            throw new Error('New instance cannot be created');
        }
        Board.instance = this;

        this.ctx = context;
        this.WIDTH = 400;
        this.HEIGHT = 600;
        this.color = '#000000';
        
    }

    loadLevel(level) {
        console.log(level);
    }

    draw(object) {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        
        const { x, y } = object.pos;
        this.ctx.fillStyle = object.color;
        this.ctx.fillRect(x, y, object.size, object.size);
    }
  
}

export default Board;
