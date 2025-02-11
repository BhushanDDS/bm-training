class Vehicle {

    brand :string;
    model:string;
    rentPriceDay:number;
    constructor(brand:string, model:string, rentPriceDay:number) {
        this.brand = brand;
        this.model = model;
        this.rentPriceDay = rentPriceDay;
    }

    calculateRental(days:number):number {
        return this.rentPriceDay * days;
    }
}

class Car extends Vehicle {

    constructor(brand:string, model:string, rentPriceDay:number) {
        super(brand, model, rentPriceDay);
    }
  

    calculateRental(days:number):number {

        let fairPrice = super.calculateRental(days);
        if (days > 7) {
            fairPrice *= 0.9;
        }
        return fairPrice;
    }
}

class Bike extends Vehicle {
   
    constructor(brand:string, model:string, rentPriceDay:number) {
        super(brand, model, rentPriceDay);
    }

    calculateRental(days:number):number {
        let fairPrice = super.calculateRental(days);
        if (days > 5) {
            fairPrice *= 0.85;
        }
        return fairPrice;
    }
}

class Truck extends Vehicle {
    constructor(brand:string, model:string, rentPriceDay:number) {
        super(brand, model, rentPriceDay);
    }

    calculateRental(days:number):number {
        let fairPrice = super.calculateRental(days);
        if (days > 3) {
            fairPrice *= 0.8;
        }
        return fairPrice;
    }
}

const car = new Car("Toyota", "Camry", 50);
console.log(`Car Rental for 10 days: ${car.calculateRental(10)}`);

const bike = new Bike("Yamaha", "R1f", 20);
console.log(`Bike Rental for 6 days: ${bike.calculateRental(6)}`);

const truck = new Truck("Volvo", "Sometruck", 100);
console.log(`Truck Rental for 4 days: ${truck.calculateRental(4)}`);

/*
PS C:\Users\bhushan\Desktop\BM\bm-training\Assighnment__6> npx tsc .\VehicleRentalSystem.ts | node .\VehicleRentalSystem.js
Car Rental for 10 days: 450
Bike Rental for 6 days: 102
Truck Rental for 4 days: 320
*/