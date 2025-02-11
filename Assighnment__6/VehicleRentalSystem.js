var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, rentPriceDay) {
        this.brand = brand;
        this.model = model;
        this.rentPriceDay = rentPriceDay;
    }
    Vehicle.prototype.calculateRental = function (days) {
        return this.rentPriceDay * days;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, rentPriceDay) {
        return _super.call(this, brand, model, rentPriceDay) || this;
    }
    Car.prototype.calculateRental = function (days) {
        var fairPrice = _super.prototype.calculateRental.call(this, days);
        if (days > 7) {
            fairPrice *= 0.9;
        }
        return fairPrice;
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, rentPriceDay) {
        return _super.call(this, brand, model, rentPriceDay) || this;
    }
    Bike.prototype.calculateRental = function (days) {
        var fairPrice = _super.prototype.calculateRental.call(this, days);
        if (days > 5) {
            fairPrice *= 0.85;
        }
        return fairPrice;
    };
    return Bike;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, rentPriceDay) {
        return _super.call(this, brand, model, rentPriceDay) || this;
    }
    Truck.prototype.calculateRental = function (days) {
        var fairPrice = _super.prototype.calculateRental.call(this, days);
        if (days > 3) {
            fairPrice *= 0.8;
        }
        return fairPrice;
    };
    return Truck;
}(Vehicle));
var car = new Car("Toyota", "Camry", 50);
console.log("Car Rental for 10 days: ".concat(car.calculateRental(10)));
var bike = new Bike("Yamaha", "R1f", 20);
console.log("Bike Rental for 6 days: ".concat(bike.calculateRental(6)));
var truck = new Truck("Volvo", "Sometruck", 100);
console.log("Truck Rental for 4 days: ".concat(truck.calculateRental(4)));
