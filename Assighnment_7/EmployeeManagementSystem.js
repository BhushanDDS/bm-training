var Department = /** @class */ (function () {
    function Department() {
        this.employees = [{ id: 1, name: 'abc', position: 'asd', salary: 3333 }];
    }
    Department.prototype.addEmployee = function (emp) {
        var addchk = this.employees.push(emp);
        if (addchk) {
            console.log('Employee added ');
        }
    };
    Department.prototype.removeEmployee = function (id) {
        var index = this.employees.findIndex(function (val) { val.id == id; });
        this.employees.splice(index, 1);
        console.log('Employee removed ');
    };
    Department.prototype.getTotalSalary = function () {
        var sum = this.employees.reduce(function (acc, val) {
            return acc += val.salary;
        }, 0);
        return sum;
    };
    Department.prototype.listEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
function updateSalary(emp, updateSalary) {
    emp.salary = updateSalary;
    return emp;
}
var emp1 = new Department();
var newObj = {
    id: 2,
    name: 'hfhf',
    position: 'kkk',
    salary: 555
};
// emp1.addEmployee(newObj)
// emp1.listEmployees();
// console.log(emp1.getTotalSalary());
// emp1.removeEmployee(2)
// emp1.listEmployees()
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.genereicArray = [];
    }
    GenericStorage.prototype.add = function (item) {
        this.genereicArray.push(item);
    };
    GenericStorage.prototype.remove = function (item) {
        var index = this.genereicArray.findIndex(function (val) { return val == item; });
        this.genereicArray.splice(index, 1);
    };
    GenericStorage.prototype.getAll = function () {
        return this.genereicArray;
    };
    return GenericStorage;
}());
var demo1 = new GenericStorage();
demo1.add(11);
demo1.add('3');
console.log(demo1.getAll());
demo1.remove('3');
console.log(demo1.getAll());
