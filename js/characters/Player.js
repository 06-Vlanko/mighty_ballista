import { BaseCharacter } from "./BaseCharacter"

export class Player extends BaseCharacter {
    constructor(equipment) {
        super({x: 0, y: 0}, 0, 5, 0, 0, 'normal', [])
        this.equipment = equipment
    }
}