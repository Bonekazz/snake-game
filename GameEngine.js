class GameEngine {
    constructor() {
        if (GameEngine.instance === null) {

        }

        return GameEngine.instance;
    }

    start() {
        console.log("engine started");
    }
}

const ENGINE = new GameEngine();

export default ENGINE;