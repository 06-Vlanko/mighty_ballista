

export class BaseCharacter {
    constructor(position, speed, attackPoints, defensePoints, healthPoints, status, skills) {
        this.position = position
        this.speed = speed
        this.attackPoints = attackPoints
        this.defensePoints = defensePoints
        this.healthPoints = healthPoints
        this.status = status
        this.skills = skills
    }

    attack() {
        console.log('attacking! :D')
    }
}