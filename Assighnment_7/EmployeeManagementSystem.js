var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var emp1 = new Department();
var newObj = {
    id: 2,
    name: 'Pandurang',
    position: 'kkk',
    salary: 555
};
var newObj2 = {
    id: 3,
    name: 'Bhushan',
    position: 'kkkdd',
    salary: 5553,
    teamsize: 7
};
var newObj3 = {
    id: 2,
    name: 'Shivam',
    position: 'kkk',
    salary: 555
};
emp1.addEmployee(newObj);
emp1.addEmployee(newObj2);
emp1.addEmployee(newObj3);
emp1.listEmployees();
console.log(emp1.getTotalSalary());
emp1.removeEmployee(2);
emp1.listEmployees();
/* Output




*/
function updateSalary(employee, newSalary) {
    emp1.addEmployee(__assign(__assign({}, employee), { salary: updateSalary }));
    emp1.removeEmployee(employee.id);
    return employee;
}
//const res=updateSalary(emp1,3); //not working. if we pass without generics it works .
/* Error : Argument of type 'Department' is not assignable to parameter of type 'IEmployee'.
  Type 'Department' is missing the following properties from type 'IEmployee': id, name, position, salaryts(2345 */
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
demo1.add(true);
demo1.add('string');
demo1.add(2323232);
demo1.remove(11);
console.log(demo1.getAll());
console.log(demo1.getAll());
