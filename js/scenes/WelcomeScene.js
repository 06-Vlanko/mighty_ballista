import { GameManager } from "../GameManager.js"

export class WelcomeScene extends Phaser.Scene {
    constructor() {
        super('WelcomeScene')
        console.log('WelcomeScene constructor')
    }

    preload() {
        // Load button sprite
        this.load.spritesheet('button', 'https://labs.phaser.io/assets/ui/blue_button01.png', { frameWidth: 190, frameHeight: 49 });
        // Load pixel font
        this.load.bitmapFont('pixelfont', 'https://labs.phaser.io/assets/fonts/bitmap/arcade.png', 'https://labs.phaser.io/assets/fonts/bitmap/arcade.xml');
    }

    create() {
        const width = GameManager.instance.width
        const height = GameManager.instance.height
        
        // Title text using pixel font
        this.add.bitmapText(width/2, height/4, 'pixelfont', 'MIGHTY BALLISTA', 32).setOrigin(0.5);
        
        // Create input field background
        const inputBox = this.add.rectangle(width/2, height/2 - 30, 300, 40, 0x000000, 0.2);
        
        // Create input field for name
        const nameInput = this.add.text(width/2 - 140, height/2 - 50, '', {
            fontSize: '24px',
            fixedWidth: 280,
            fixedHeight: 40,
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: { x: 10, y: 5 }
        });
        
        // Make input field interactive
        nameInput.setInteractive();
        this.input.keyboard.on('keydown', (event) => {
            console.log(event.keyCode);
            if (event.keyCode === 8 && nameInput.text.length > 0) {
                nameInput.text = nameInput.text.substr(0, nameInput.text.length - 1);
            } else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90)) {
                if (nameInput.text.length < 15) { // limit name length
                    nameInput.text += event.key;
                }
            }
        });

        // Add placeholder text
        const placeholder = this.add.bitmapText(width/2, height/2 - 30, 'pixelfont', 'ENTER YOUR NAME', 16).setOrigin(0.5);
        
        // Create start button
        const button = this.add.sprite(width/2, height/2 + 50, 'button').setInteractive();
        const buttonText = this.add.bitmapText(width/2, height/2 + 50, 'pixelfont', 'START GAME', 16).setOrigin(0.5);
        
        // Button interactions
        button.on('pointerdown', () => {
            if (nameInput.text) {
                // Store player name in GameManager
                GameManager.instance.playerName = nameInput.text;
                this.scene.start('PlayScene');
            }
        });

        button.on('pointerover', () => {
            button.setTint(0x8888ff);
        });

        button.on('pointerout', () => {
            button.clearTint();
        });
    }

    update() {
       
    }
}