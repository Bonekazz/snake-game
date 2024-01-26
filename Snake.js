export default class Snake{
    constructor() {
        this.pos = { x: 20, y: 20 };
        this.color = '#2b0081';
        this.size = 20;
        this.speed = 2;
    }

    sayHello() {
        console.log('hello!');
    }

    moveDow() {
        this.pos.y += this.speed;
    }

}