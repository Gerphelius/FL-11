class Fighter {
    constructor(objProperties) {
        this.maxHealth = objProperties.hp;
        this.fighterWins = 0;
        this.fighterLosses = 0;

        this.getName = function() {
            return objProperties.name;
        }
        this.getDamage = function() {
            return objProperties.damage;
        }
        this.getAgility = function() {
            return objProperties.agility;
        }
        this.getHealth = function() {
            return objProperties.hp;
        }

        this.attack = function(whoIsAttacked) { 
            const percentage = 100; 
            const chanceToHit = percentage - whoIsAttacked.getAgility();
            const randomNum = Math.random() * percentage;

            if (chanceToHit >= randomNum) {
                console.log(`${this.getName()} make ${this.getDamage()} damage to ${whoIsAttacked.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        }
        this.dealDamage = function(amount) {
            const minHealth = 0;
            objProperties.hp -= amount;
            if (objProperties.hp < minHealth) {
                objProperties.hp = minHealth;
            }
        }
        this.heal = function(amount) {
            objProperties.hp += amount;

            if (objProperties.hp > this.maxHealth) {
                objProperties.hp = this.maxHealth;
            }
        }
        this.addWin = function() {
            this.fighterWins++;
        }
        this.addLoss = function() {
            this.fighterLosses++;
        }
        this.logCombatHistory = function() {
            console.log(`Name: ${this.getName()}, Wins: ${this.fighterWins}, Losses: ${this.fighterLosses}`)
        }
    }
} 

function battle(fighter1, fighter2) {
    let isFighter1Alive = fighter1.getHealth() > 0;
    let isFighter2Alive = fighter2.getHealth() > 0;

    if (!isFighter1Alive) {
        console.log(`${fighter1.getName()} is dead and can't fight`)
    } else if (!isFighter2Alive) {
        console.log(`${fighter2.getName()} is dead and can't fight`)
    } else {
        while(isFighter1Alive && isFighter2Alive) {
            if(fighter1.getHealth() > 0) {
                fighter1.attack(fighter2);
                fighter2.dealDamage(fighter1.getDamage());
            } else {
                fighter1.addLoss();
                fighter2.addWin();
                break;
            }
            if(fighter2.getHealth() > 0) {
                fighter2.attack(fighter1);
                fighter1.dealDamage(fighter2.getDamage());
            } else {
                fighter2.addLoss();
                fighter1.addWin();
                break;
            }
        }
    }
}

const fighterOneProp = {name: 'Letherman', damage: 10, hp: 150, agility: 20};
const fighterTwoProp = {name: 'BossOfTheGym', damage: 20, hp: 120, agility: 35};

const letherman = new Fighter(fighterOneProp);
const bossOfTheGym = new Fighter(fighterTwoProp);

battle(letherman, bossOfTheGym);

letherman.getHealth();
bossOfTheGym.getHealth();

letherman.logCombatHistory();
bossOfTheGym.logCombatHistory();

battle(letherman, bossOfTheGym);

letherman.heal('1200');
console.log(letherman.getHealth());