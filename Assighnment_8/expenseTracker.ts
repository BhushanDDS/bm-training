interface ICategory {
    name: string;
}

interface IExpenseContent {
    amount: number;
    category: string;
    date: string;
    description: string;
}

class Expenses {
    private categoryArray: ICategory[] = [];
    private expenseArray: IExpenseContent[] = [];
    public name: string;

    constructor(name: string) {
        this.name = name;
        this.loadCategories();
        this.loadExpenses();
        this.greet();
    }

    greet():void{
        let greetElement= document.querySelector('#name');
        if(greetElement){
            greetElement.textContent=`Welcome ${this.name}`
        }
    }

    createCategory(value: ICategory): void {
        if (value) {
            this.categoryArray.push(value);
            console.log('Category Added');
            this.saveAllCategories();
        }
    }

    removeCategory(value: string): void {
        let index = this.categoryArray.findIndex(val => val.name === value);
            this.categoryArray.splice(index, 1);
            console.log('Category Deleted');
            this.saveAllCategories();
            this.loadCategories();
        
    }

    saveAllCategories(): void {
        localStorage.setItem(`${this.name}_Categories`, JSON.stringify(this.categoryArray));
    }

    saveAllExpenses(): void {
        localStorage.setItem(`${this.name}_Expenses`, JSON.stringify(this.expenseArray));
    }

    loadCategories(): void {
        const storedCategories = localStorage.getItem(`${this.name}_Categories`);
        this.categoryArray = storedCategories ? JSON.parse(storedCategories) : [];
        this.categoryArray.forEach(cat=>this.createCat(cat));
        this.populateCategoryDropdown();
    }

    loadExpenses(): void {
        const storedData = localStorage.getItem(`${this.name}_Expenses`);
        this.expenseArray = storedData ? JSON.parse(storedData) : [];
        this.expenseArray.forEach(expense => this.createTodo(expense));
    }

    populateCategoryDropdown(): void {
        const categorySelect = document.getElementById('category') as HTMLSelectElement;
        if (categorySelect) {
            categorySelect.innerHTML = '<option value="">Select a category</option>';
            this.categoryArray.forEach(category => {
                const option = document.createElement('option');
                option.value = category.name;
                option.textContent = category.name;
                categorySelect.appendChild(option);
            });
        }
    }

    createCat=(cat:ICategory)=>{
        const ulcat=document.getElementById('ul-category');
        if(ulcat){
            const li = document.createElement("li");
            li.className =
                "list-group-item d-flex justify-content-between align-items-start";
            li.innerHTML = `<span class="text-todo">${cat.name}</span>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-warning">Delete</button>
        </div>`;
            ulcat.appendChild(li);
        }
        

    }
    

    createTodo(expenseObj: IExpenseContent): void {
        const eleList = document.querySelector('#ul-expenses');
        if (expenseObj && eleList) {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-start";
            li.innerHTML = `
                <span>${expenseObj.description} (${expenseObj.category})</span>
                <span>${expenseObj.amount}</span>
                <button type="button" class="btn btn-warning delete-btn" data-desc="${expenseObj.description}">Delete</button>
            `;
            eleList.appendChild(li);
            this.updateTotal();
        }
    }

    updateTotal(): void {
        const totalElement = document.querySelector('#total-expense');
        if (totalElement) {
            totalElement.textContent = this.getTotal().toString();
        }
    }

    getTotal(): number {
        return this.expenseArray.reduce((acc, val) => acc + val.amount, 0);
    }

    addExpenses(value: IExpenseContent): void {
        if (value) {
            this.expenseArray.push(value);
            console.log('Expense Added');
            this.saveAllExpenses();
            this.createTodo(value);
        }
    }

    removeExpense(value: string): void {
        let index = this.expenseArray.findIndex(val => val.description === value);
            this.expenseArray.splice(index, 1);
            console.log('Expense Deleted');
            this.saveAllExpenses();
            this.refreshExpenseList();
        
    }

    refreshExpenseList(): void {
        const eleList = document.querySelector('#ul-expenses');
        if (eleList) {
            eleList.innerHTML = '';
            this.expenseArray.forEach(expense => this.createTodo(expense));
        }
    }

    filterExpensesByCategory(category: string): void {
        const eleList = document.querySelector('#ul-expenses');
        if (eleList) {
            eleList.innerHTML = '';
            const filteredExpenses = this.expenseArray.filter(expense => expense.category === category);
            filteredExpenses.forEach(expense => this.createTodo(expense));
        }
    }

    filterByDate(date:string):void{
        const eleList = document.querySelector('#ul-expenses');
        if (eleList) {
            eleList.innerHTML = '';
            const filteredExpenses = this.expenseArray.filter(expense => expense.date.includes(date));
            filteredExpenses.forEach(expense => this.createTodo(expense));
        }

        
    }
}

const user1 = new Expenses('Pandurang');
// user1.createCategory({name:'Food'})
// user1.createCategory({name:'Rent'})
// user1.createCategory({name:'Travell'})
// user1.createCategory({name:'Stationary'})

document.getElementById('expense-form')?.addEventListener('submit',  (event)=> {
    event.preventDefault();
    const description = (document.getElementById('description') as HTMLInputElement).value;
    const amount = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
    const category = (document.getElementById('category') as HTMLSelectElement).value;
    const date = (document.getElementById('date') as HTMLInputElement).value;
    
    if (description && amount && category && date) {
        user1.addExpenses({ amount, category, date, description });
        (document.getElementById('expense-form') as HTMLFormElement).reset();
    }
});

document.getElementById('ul-expenses')?.addEventListener('click', function (event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('delete-btn')) {
        const description = target.getAttribute('data-desc');
        if (description) {
            user1.removeExpense(description);
        }
    }
});

document.getElementById('category')?.addEventListener('change', function (event) {
    const selectedCategory = (event.target as HTMLSelectElement).value;
    if (selectedCategory) {
        user1.filterExpensesByCategory(selectedCategory);
    } else {
        user1.refreshExpenseList();
    }
});

document.getElementById('button-category')?.addEventListener('click',(e)=>{
    e.preventDefault();
    const inputBox = document.getElementById('input-category') as HTMLInputElement;
    let name=inputBox.value;

    if(inputBox && name){
        user1.createCategory({name:name});
    }
})

document.getElementById('ul-category')?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('btn-warning')) {
        const categoryItem = target.closest(".list-group-item");
        if (categoryItem) {
            const categoryName = categoryItem.textContent?.trim();
            if (categoryName) {
                user1.removeCategory(categoryName);
                categoryItem.remove(); 
            }
        }
    }
});


document.getElementById('button-date')?.addEventListener("click",()=>{

    const inputdate=document.getElementById('input-date') as HTMLInputElement;
    
        const data= inputdate.value.trim();
        console.log(data);
        if(data){
            console.log(data);
            
            user1.filterByDate(data);
        }

})

document.getElementById('button-cat')?.addEventListener("click",()=>{

    const inputdate=document.getElementById('input-cat') as HTMLInputElement;
    
        const data= inputdate.value.trim();
        console.log(data);
        if(data){
            console.log(data);
            
            user1.filterExpensesByCategory(data);
        }

})




