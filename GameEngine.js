class GameEngine {
    constructor() {
        if (GameEngine.instance) {
            throw new Error("New instance cannot be created")
        }
        GameEngine.instance = this;

        this.window = null;
        this.dom = null;
        this.board = null
    }

    start() {
        console.log("engine started");
    }

    init() {
        this.window.addEventListener("click", () => {
            console.log("player clicked")
        })
    }

    setConfig(config) {
        this.window = config.window;
        this.dom = config.document;
        this.board = config.BOARD;
    }

}

const ENGINE = new GameEngine();

export default ENGINE;