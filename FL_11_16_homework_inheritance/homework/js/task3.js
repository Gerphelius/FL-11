function Pokemon(type, element, specie, isFly, nextLevel) {
    this.element = element;
    this.specie = specie;
    this.type = type;
    this.isFly = isFly;
    this.NextLevel = nextLevel;
}

Pokemon.prototype.getType = function() {
    return this.element;
}

Pokemon.prototype.getSpecie = function() {
    return `${this.specie} Pokémon`;
}

Pokemon.prototype.getPokemonType = function() {
    return this.type;
}

Pokemon.prototype.canFly = function() {
    return this.isFly;
}

Pokemon.prototype.evolve = function() {
    if (this.constructor === this.NextLevel) {
        return this;
    }
    let newLevelPokemon = new this.NextLevel();
    return newLevelPokemon;
}
///////////////////////////////////////////////// Fire /////////////////////////////////////////////

function Charmander() {
    Pokemon.call(this, 'Charmander', 'Fire', 'Lizard', false, Charmeleon);
    this.constructor = Charmander;
}

function Charmeleon() {
    Pokemon.call(this, 'Charmeleon', 'Fire', 'Flame', false, Charizard);
    this.constructor = Charmeleon;
}

function Charizard() {
    Pokemon.call(this, 'Charizard', 'Fire', 'Flame', true, Charizard);
    this.constructor = Charizard;
}

Charmander.prototype = Object.create(Pokemon.prototype);
Charmeleon.prototype = Object.create(Pokemon.prototype);
Charizard.prototype = Object.create(Pokemon.prototype);

let charmander = new Charmander();
let charmeleon = new Charmeleon();
let charizard = new Charizard();

///////////////////////////////////////////////// Electric //////////////////////////////////////////

function Pichu() {
    Pokemon.call(this, 'Pichu', 'Electric', 'Mouse', false, Pikachu);
    this.constructor = Pichu;
}

function Pikachu() {
    Pokemon.call(this, 'Pikachu', 'Electric', 'Mouse', false, Raichu);
    this.constructor = Pikachu;
}

function Raichu() {
    Pokemon.call(this, 'Raichu', 'Electric', 'Mouse', false, Raichu);
    this.constructor = Raichu;
}

Pichu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype = Object.create(Pokemon.prototype);
Raichu.prototype = Object.create(Pokemon.prototype);

///////////////////////////////////////////////// Tests //////////////////////////////////////////

console.log(charmander.getType()); // -> “Fire”
console.log(charmander.getType() === charmeleon.getType()); // -> true
console.log(charmeleon.getType() === charizard.getType()); // -> true

console.log(charmander.evolve().constructor === Charmeleon); // -> true
console.log(charmeleon.evolve().constructor === Charizard); // -> true

console.log(charmander.getSpecie()); // -> “Lizard Pokémon”
console.log(charmeleon.getSpecie()); // -> “Flame Pokémon”
console.log(charizard.getSpecie() === charmeleon.getSpecie()); // -> true

console.log(charmander.canFly()); // -> false
console.log(charmander.canFly() === charmeleon.canFly()); // -> true
console.log(charizard.canFly()); // -> true

const pichu = new Pichu();

console.log(pichu.getPokemonType()); // => Pichu

const pikachu = pichu.evolve();

console.log(pikachu.getPokemonType()); // Pikachu
console.log(pikachu.constructor === Pikachu); // true

const raichu = pikachu.evolve();

console.log(raichu.getPokemonType()); // Raichu
console.log(raichu.constructor === Raichu); // true

const raichu2 = raichu.evolve(); // return raichu back as it's maximum level

console.log(raichu2 === raichu); // true