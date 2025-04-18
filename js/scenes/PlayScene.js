import { GameManager } from "../GameManager.js"

export class PlayScene extends Phaser.Scene {
    constructor() {
        super('PlayScene')
        console.log('PlayScene constructor')
    }

    preload() {
  
    }

    create() {
        console.log('PlayScene create')
        console.log('player name', GameManager.instance.playerName)
    }

    update() {
       
    }

}