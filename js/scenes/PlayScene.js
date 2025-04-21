import { GameManager } from "../GameManager.js"

export class PlayScene extends Phaser.Scene {
    constructor() {
        super('PlayScene')
        console.log('PlayScene constructor')
    }

    preload() {
        this.load.image('background', 'assets/images/backgrounds/background1.png')
    }

    create() {
        // Set light blue background color
        this.cameras.main.setBackgroundColor('#87CEEB')

        // Add background image
        const background = this.add.image(0, 0, 'background')
        // Set the origin to top-left corner
        background.setOrigin(0, 0)
        // Scale only the height to fit the game height, keep original width
        background.displayHeight = this.sys.game.config.height
        // Reset the displayWidth to ensure original proportions on x-axis
        background.displayWidth = background.width

        console.log('PlayScene create')
        console.log('player name', GameManager.instance.playerName)
    }

    update() {
       
    }

}