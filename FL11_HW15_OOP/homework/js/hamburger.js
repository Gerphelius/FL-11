class Hamburger {
    constructor(type, calories, isSecretIn) {
        this.type = type;
        this.cheeseCounter = 0;
        this.tomatoCounter = 0;
        this.secretIngredient = 0;
        this.isBited = 0;
        this.calories = calories;

        if (isSecretIn) {
            this.secretIngredient++;
        }
    }
    
    getCalories() {
        return this.calories;
    }

    setCalories(newCalories) {
        this.calories = newCalories;
    }

    addCheese() {
        if (this.isBited !== 0) {
            console.log('Sorry, you cannot add cheese');
            return;
        } else if (this.cheeseCounter >= 1) {
            console.log('Sorry, you can add cheese only once.');
            return;
        }
        this.cheeseCounter++;
        this.calories += 120;
    }
    addTomato() {
        if (this.isBited !== 0) {
            console.log('Sorry, you cannot add tomato');
            return;
        } else if (this.tomatoCounter >= 2) {
            console.log('Sorry, you can add tomato only twice.');
            return;
        }
        this.tomatoCounter++;
        this.calories += 20;
    }
    addSecretIngredient() {
        if (this.tomatoCounter > 0 || this.cheeseCounter > 0) {
            console.log('Sorry, you can add secret ingredient only before another ingredient.');
            return;
        } else if (this.secretIngredient >= 1) {
            console.log('Sorry, you can add secret ingredient only once.');
            return;
        }
        this.secretIngredient++;
        this.calories += 100;
    }
    bite() {
        console.log('*Bites hamburger*');
        this.isBited++;
    }
    info() {
        let withCheese = '';
        let withTomato = '';
        let withSecret = '';

        if (this.secretIngredient) {
            withSecret = 'with secret ingredient,';
        }
        if (this.cheeseCounter) {
            withCheese = `with chese,`;
        }
        if (this.tomatoCounter) {
            withTomato = `with ${this.tomatoCounter} tomato,`;
        }

        return `${this.type[0].toUpperCase() + this.type.slice(1)} hamburger: ${withSecret} 
${withCheese} ${withTomato} is bit ${this.isBited} times. Total calories: ${this.calories}.`
    }
}

const newHamburger = new Hamburger('classic', 600);

//Calories check
//console.log(newHamburger);                 // Hamburger { info }
//console.log(newHamburger.getCalories());   // 600
//newHamburger.setCalories(700);    
//console.log(newHamburger.getCalories())    // 700

//Cheese check
//console.log(newHamburger.getCalories());   // 600
//newHamburger.addCheese();  
//console.log(newHamburger.getCalories());   // 720
//newHamburger.addCheese();                  // Sorry, you can add cheese only once.
//console.log(newHamburger.getCalories());   // 720

//Tomato check
//console.log(newHamburger.getCalories());   // 600  
//newHamburger.addTomato();                  
//newHamburger.addTomato();                  
//console.log(newHamburger.getCalories());   // 640   
//newHamburger.addTomato();                  // Sorry, you can add tomato only twice.
//console.log(newHamburger.getCalories());   // 640

//Secret check after another ingredient
//console.log(newHamburger.getCalories());   // 600
//newHamburger.addTomato();                  
//newHamburger.addSecretIngredient();        // Sorry, you can add secret ingredient only before another ingredient.
//console.log(newHamburger.getCalories());   // 620                

//Secret check before another ingredient
//console.log(newHamburger.getCalories());   // 600               
//newHamburger.addSecretIngredient();        
//newHamburger.addTomato(); 
//console.log(newHamburger.getCalories());   // 720 

//Class check
//newHamburger.addSecretIngredient();          
//newHamburger.addTomato();                    
//newHamburger.addCheese();                    
//newHamburger.bite();                       // *Bites hamburger*
//newHamburger.bite();                       // *Bites hamburger*
//newHamburger.bite();                       // *Bites hamburger*
//console.log(newHamburger.info());          // Classic hamburger: with chese, with 1 tomato, is bit 3 times. Total calories: 840.
