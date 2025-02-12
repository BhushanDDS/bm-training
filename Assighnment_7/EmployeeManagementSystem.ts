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

function updateSalary<T extends IEmployee>(employee: T, newSalary: number): T {
    const updatedEmployee = { ...employee, salary: newSalary };
    return updatedEmployee;
  }

let emp1 = new Department();
let newObj:IEmployee={
    id:2,
    name:'hfhf',
    position:'kkk',
    salary:555
}

let newObj2:IManager={
    id:3,
    name:'kfkf',
    position:'kkkdd',
    salary:5553,
    teamsize:7
}


emp1.addEmployee(newObj)
emp1.addEmployee(newObj2);
emp1.listEmployees();
console.log(emp1.getTotalSalary());
emp1.removeEmployee(2)
emp1.listEmployees()




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
demo1.add('3');
console.log(demo1.getAll());
demo1.remove('3');
console.log(demo1.getAll());