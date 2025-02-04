class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    calculateBonus() {
        return 0;
    }
}

class Manager extends Employee {
    constructor(name, id, salary) {
        super(name, id, salary);
    }

    calculateBonus() {
        return this.getSalary() * 0.2;
    }
}

class Engineer extends Employee {
    constructor(name, id, salary) {
        super(name, id, salary);
    }

    calculateBonus() {
        return this.getSalary() * 0.15;
    }
}

class Intern extends Employee {
    constructor(name, id, salary) {
        super(name, id, salary);
    }

    calculateBonus() {
        return this.getSalary() * 0.5;
    }
}

const manager = new Manager("om", 1, 100000);
console.log(`Manager Bonus: $${manager.calculateBonus()}`);

// const engineer = new Engineer("raj", 2, 80000);
// console.log(`Engineer Bonus: $${engineer.calculateBonus()}`);

const engineer = new Engineer("raj", 2, 80000);
console.log(`Engineer Bonus: $${Intern.calculateBonus()}`);