"use strict";
class Department {
    constructor() {
        this.employees = [{ id: 1, name: 'abc', position: 'asd', salary: 3333 }];
    }
    addEmployee(emp) {
        let addchk = this.employees.push(emp);
        if (addchk) {
            console.log('Employee added ');
        }
    }
    removeEmployee(id) {
        let index = this.employees.findIndex((val) => { val.id == id; });
        this.employees.splice(index, 1);
        console.log('Employee removed ');
    }
    getTotalSalary() {
        let sum = this.employees.reduce((acc, val) => {
            return acc += val.salary;
        }, 0);
        return sum;
    }
    listEmployees() {
        console.log(this.employees);
    }
}
function updateSalary(employee, newSalary) {
    const updatedEmployee = Object.assign(Object.assign({}, employee), { salary: newSalary });
    return updatedEmployee;
}
let emp1 = new Department();
let newObj = {
    id: 2,
    name: 'hfhf',
    position: 'kkk',
    salary: 555
};
let newObj2 = {
    id: 3,
    name: 'kfkf',
    position: 'kkkdd',
    salary: 5553,
    teamsize: 7
};
emp1.addEmployee(newObj);
emp1.addEmployee(newObj2);
emp1.listEmployees();
console.log(emp1.getTotalSalary());
emp1.removeEmployee(2);
emp1.listEmployees();
class GenericStorage {
    constructor() {
        this.genereicArray = [];
    }
    add(item) {
        this.genereicArray.push(item);
    }
    remove(item) {
        let index = this.genereicArray.findIndex((val) => val == item);
        this.genereicArray.splice(index, 1);
    }
    getAll() {
        return this.genereicArray;
    }
}
let demo1 = new GenericStorage();
demo1.add(11);
demo1.add('3');
console.log(demo1.getAll());
demo1.remove('3');
console.log(demo1.getAll());
