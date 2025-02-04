class Vehicle {
    constructor(brand, model, rentPriceDay) {
        this.brand = brand;
        this.model = model;
        this.rentPriceDay = rentPriceDay;
    }

    calculateRental(days) {
        return this.rentPriceDay * days;
    }
}

class Car extends Vehicle {
    constructor(brand, model, rentPriceDay) {
        super(brand, model, rentPriceDay);
    }

    calculateRental(days) {
        let total = super.calculateRental(days);
        if (days > 7) {
            total *= 0.9;
        }
        return total;
    }
}

class Bike extends Vehicle {
    constructor(brand, model, rentPriceDay) {
        super(brand, model, rentPriceDay);
    }

    calculateRental(days) {
        let total = super.calculateRental(days);
        if (days > 5) {
            total *= 0.85;
        }
        return total;
    }
}

class Truck extends Vehicle {
    constructor(brand, model, rentPriceDay) {
        super(brand, model, rentPriceDay);
    }

    calculateRental(days) {
        let total = super.calculateRental(days);
        if (days > 3) {
            total *= 0.8;
        }
        return total;
    }
}

const car = new Car("Toyota", "Camry", 50);
console.log(`Car Rental for 10 days: $${car.calculateRental(10)}`);

const bike = new Bike("Yamaha", "MT-15", 20);
console.log(`Bike Rental for 6 days: $${bike.calculateRental(6)}`);

const truck = new Truck("Volvo", "FH16", 100);
console.log(`Truck Rental for 4 days: $${truck.calculateRental(4)}`);