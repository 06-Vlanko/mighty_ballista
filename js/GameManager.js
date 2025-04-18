import { Game } from "./Game.js"

export class GameManager {
    constructor() {
        if (GameManager.instance) {
            return GameManager.instance;
        } else {
            GameManager.instance = this;
        }

        this.width = window.outerWidth;
        this.height = window.outerHeight
        this.game = new Game(this.width, this.height)
    }

}

