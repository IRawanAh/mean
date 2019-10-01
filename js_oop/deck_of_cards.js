class Sensei {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;    

    }

    // static method
     sayName() {
        console.log(this.name);
    }
     showState() {
        console.log( "Name:", this.name,", Health:", this.health ,", Speed: ", this.speed,", Strength:", this.strength)
    }
     drinkSake(){
        this.health+=10;
    }
      speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
} 

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showState();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"




