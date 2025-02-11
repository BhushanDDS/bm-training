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
var Employee = /** @class */ (function () {
    function Employee(name, id, salary) {
        this.salary = 10000;
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.calculateBonus = function () {
        return 0;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, id, salary) {
        return _super.call(this, name, id, salary) || this;
    }
    Manager.prototype.calculateBonus = function () {
        return this.getSalary() * 20;
    };
    return Manager;
}(Employee));
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(name, id, salary) {
        return _super.call(this, name, id, salary) || this;
    }
    Engineer.prototype.calculateBonus = function () {
        return this.getSalary() * 10;
    };
    return Engineer;
}(Employee));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(name, id, salary) {
        return _super.call(this, name, id, salary) || this;
    }
    Intern.prototype.calculateBonus = function () {
        return this.getSalary() * 5;
    };
    return Intern;
}(Employee));
var basesalary = 10000;
var manager = new Manager("om", 1, basesalary);
console.log("Manager Bonus: ".concat(manager.calculateBonus(), " Rs\n"));
var engineer = new Engineer("raj", 2, basesalary);
console.log("Engineer Bonus: ".concat(engineer.calculateBonus(), " Rs\n "));
var intern = new Intern("raj", 2, basesalary);
console.log("Intern Bonus: ".concat(intern.calculateBonus(), "Rs "));
