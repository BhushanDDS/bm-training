class Employee {
    name:string;
    id:number;
    private salary:number=10000;

    constructor(name:string, id:number,  salary:number) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }

    calculateBonus() {
        return 0;
    }
}

class Manager extends Employee {
    constructor(name:string, id:number, salary:number) {
        super(name,id,salary)
    }

    calculateBonus() {
        return this.getSalary() * 20;
    }
}

class Engineer extends Employee {
    constructor(name:string, id:number, salary:number) {
        super(name,id,salary)
    }

    calculateBonus() {
        return this.getSalary() * 10;
    }
}

class Intern extends Employee {
    constructor(name:string, id:number, salary:number) {
        super(name,id,salary)
    }
    calculateBonus() {
        return this.getSalary() * 5;
    }
}


let basesalary=10000;
const manager = new Manager("om", 1, basesalary);
console.log(`Manager Bonus: ${manager.calculateBonus()} Rs\n`);

const engineer = new Engineer("raj", 2, basesalary);
console.log(`Engineer Bonus: ${engineer.calculateBonus()} Rs\n `);

const intern = new Intern("raj", 2, basesalary);
console.log(`Intern Bonus: ${intern.calculateBonus()}Rs\n `);

/*
Output with basesalry 10000
PS C:\Users\bhushan\Desktop\BM\bm-training\Assighnment__6> npx tsc .\EmployeeMS.ts | node .\EmployeeMS.js
Manager Bonus: 200000 Rs

Engineer Bonus: 100000 Rs

Intern Bonus: 50000Rs

*/