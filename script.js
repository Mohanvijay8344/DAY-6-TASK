// 1.Write a “person” class to hold all the details.
class Person {
    constructor(name, age, gender, occupation) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
    
    introduce() {
      console.log(`My name is ${this.name}, I am ${this.age} years old, I identify as ${this.gender}, and I work as a ${this.occupation}.`);
    }
  }
  const person1 = new Person("Mohanraj", 26, "male", "Full Stack Developer");
  person1.introduce();  
    

// // 2.write a class to calculate the uber price

class UberPriceCalculator {
    constructor(distance) {
      this.distance = distance;
    }
    
    calculatePrice() {
      const baseFare = 50.00;
      const ratePerKm = 8.50;
      const totalFare = baseFare + (ratePerKm * this.distance);
      return totalFare;
    }
  }
  const distanceInKm = 10;
  const calculator = new UberPriceCalculator(distanceInKm);
  const fare = calculator.calculatePrice();
  console.log(`The fare for a ${distanceInKm}km Uber ride is Rs.${fare.toFixed(2)}.`);
    
