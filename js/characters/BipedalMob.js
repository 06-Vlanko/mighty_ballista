import { BaseCharacter } from "./BaseCharacter"

export class BipedalMob extends BaseCharacter{
    constructor() {
        super({x: 0, y: 0}, 5, 10, 20, 30, 'normal', [])
    }

}