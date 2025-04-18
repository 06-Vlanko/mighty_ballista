import { WelcomeScene } from "./scenes/WelcomeScene.js"
import { PlayScene } from "./scenes/PlayScene.js"
import { GameOverScene } from "./scenes/GameOverScene.js"

export class Game extends Phaser.Game {
    constructor(width, height) {
        const config = {
            type: Phaser.AUTO,
            width: width,
            height: height,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            }
        }
        super(config)

        this.scene.add('WelcomeScene', WelcomeScene)
        this.scene.add('PlayScene', PlayScene)
        this.scene.add('GameOverScene', GameOverScene)
        this.scene.start('WelcomeScene')
    }
}