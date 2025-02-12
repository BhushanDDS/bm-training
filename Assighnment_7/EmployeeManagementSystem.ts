interface IEmployee {
    id:number;
    name:string;
    position:string;
    salary:number;
}

interface IManager extends IEmployee{
    teamsize:number;
}

class Department {
    private employees:IEmployee[]=[{id:1,name:'abc',position:'asd',salary:3333}];

    addEmployee(emp:IEmployee):void{
        let addchk=this.employees.push(emp);
        if(addchk){
            console.log('Employee added ');
        }
    }

    removeEmployee(id:number):void{
        let index = this.employees.findIndex((val)=>{val.id==id});
        this.employees.splice(index,1);
      console.log('Employee removed ');
    }

    getTotalSalary():number{
        let sum=  this.employees.reduce((acc,val)=>{
     return acc+= val.salary
    },0);
        return sum;
    }
    
    listEmployees():void{
        console.log(this.employees)

    }

}



let emp1 = new Department();
let newObj:IEmployee={
    id:2,
    name:'Pandurang',
    position:'kkk',
    salary:555
}

let newObj2:IManager={
    id:3,
    name:'Bhushan',
    position:'kkkdd',
    salary:5553,
    teamsize:7
}

let newObj3:IEmployee={
    id:2,
    name:'Shivam',
    position:'kkk',
    salary:555
}
emp1.addEmployee(newObj);
emp1.addEmployee(newObj2);
emp1.addEmployee(newObj3);
emp1.listEmployees();
console.log(emp1.getTotalSalary());
emp1.removeEmployee(2);
emp1.listEmployees();
/* Output 




*/
function updateSalary<T extends IEmployee>(employee: T, newSalary: number): T {
    emp1.addEmployee({...employee,salary:updateSalary})
    emp1.removeEmployee(employee.id);
    return employee;

  }
  const res=updateSalary(emp1,3); //not working. if we pass without generics it works .
/* Error : Argument of type 'Department' is not assignable to parameter of type 'IEmployee'.
  Type 'Department' is missing the following properties from type 'IEmployee': id, name, position, salaryts(2345 */


class GenericStorage<T>{
    private genereicArray: T[]=[]; 

    add(item:T):void{
        this.genereicArray.push(item);
    }

    remove(item:T):void{
        let index = this.genereicArray.findIndex((val)=>val==item);
        this.genereicArray.splice(index,1);
    }

    getAll():T[]{
    return this.genereicArray;
    }
}

let demo1= new GenericStorage();
demo1.add(11);
demo1.add(true);
demo1.add('string')
demo1.add(2323232);
demo1.remove(11)
console.log(demo1.getAll());
console.log(demo1.getAll());


/*
Output 

Employee added 
Employee added 
Employee added
[
  { id: 1, name: 'abc', position: 'asd', salary: 3333 },
  { id: 2, name: 'Pandurang', position: 'kkk', salary: 555 },
  {
    id: 3,
    name: 'Bhushan',
    position: 'kkkdd',
    salary: 5553,
    teamsize: 7
  },
  { id: 2, name: 'Shivam', position: 'kkk', salary: 555 }
]
9996
Employee removed
[
  { id: 1, name: 'abc', position: 'asd', salary: 3333 },
  { id: 2, name: 'Pandurang', position: 'kkk', salary: 555 },
  {
    id: 3,
    name: 'Bhushan',
    position: 'kkkdd',
    salary: 5553,
    teamsize: 7
  }
]
[ true, 'string', 2323232 ]
[ true, 'string', 2323232 ]
PS C:\Users\bhushan\Desktop\BM\bm-training\Assighnment_7> 

*/