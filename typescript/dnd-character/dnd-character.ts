export class DnDCharacter {
    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    hitpoints: number

    private static readonly totalRolls = 4
    private static readonly baseHitpoints = 10

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore()
        this.dexterity = DnDCharacter.generateAbilityScore()
        this.constitution = DnDCharacter.generateAbilityScore()
        this.intelligence = DnDCharacter.generateAbilityScore()
        this.wisdom = DnDCharacter.generateAbilityScore()
        this.charisma = DnDCharacter.generateAbilityScore()
        this.hitpoints = DnDCharacter.baseHitpoints + DnDCharacter.getModifierFor(this.constitution)
    }

    public static generateAbilityScore(): number {
        let rolls: number[] = []
        let abilityScore: number = 0
        for (let i = 0; i < DnDCharacter.totalRolls; i++) {
            rolls[i] = this.rollDice()
            abilityScore += rolls[i]
        }
        const minRoll = Math.min(...rolls)
       
        return abilityScore - minRoll
    }
  
    public static getModifierFor(abilityValue: number): number {
        const modifier: number = Math.floor((abilityValue - 10) / 2)
        return modifier
    }

    public static rollDice(): number {
        return Math.ceil(Math.random() * 6)
    }

  }