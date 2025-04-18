import { BaseCharacter } from "./BaseCharacter"

export class FlyingMob extends BaseCharacter{
    constructor() {
        super({x: 0, y: 0}, 10, 10, 5, 20, 'normal', [])
    }

    
}