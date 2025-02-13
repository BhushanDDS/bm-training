var _a, _b, _c, _d, _e;
var Expenses = /** @class */ (function () {
    function Expenses(name) {
        this.categoryArray = [];
        this.expenseArray = [];
        this.createCat = function (cat) {
            var ulcat = document.getElementById('ul-category');
            if (ulcat) {
                var li = document.createElement("li");
                li.className =
                    "list-group-item d-flex justify-content-between align-items-start";
                li.innerHTML = "<span class=\"text-todo\">".concat(cat.name, "</span>\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic mixed styles example\">\n          <button type=\"button\" class=\"btn btn-warning\">Delete</button>\n        </div>");
                ulcat.appendChild(li);
            }
        };
        this.name = name;
        this.loadCategories();
        this.loadExpenses();
        this.greet();
    }
    Expenses.prototype.greet = function () {
        var greetElement = document.querySelector('#name');
        if (greetElement) {
            greetElement.textContent = "Welcome ".concat(this.name);
        }
    };
    Expenses.prototype.createCategory = function (value) {
        if (value) {
            this.categoryArray.push(value);
            console.log('Category Added');
            this.saveAllCategories();
        }
    };
    Expenses.prototype.removeCategory = function (value) {
        var index = this.categoryArray.findIndex(function (val) { return val.name === value; });
        this.categoryArray.splice(index, 1);
        console.log('Category Deleted');
        this.saveAllCategories();
        this.loadCategories();
    };
    Expenses.prototype.saveAllCategories = function () {
        localStorage.setItem("".concat(this.name, "_Categories"), JSON.stringify(this.categoryArray));
    };
    Expenses.prototype.saveAllExpenses = function () {
        localStorage.setItem("".concat(this.name, "_Expenses"), JSON.stringify(this.expenseArray));
    };
    Expenses.prototype.loadCategories = function () {
        var _this = this;
        var storedCategories = localStorage.getItem("".concat(this.name, "_Categories"));
        this.categoryArray = storedCategories ? JSON.parse(storedCategories) : [];
        this.categoryArray.forEach(function (cat) { return _this.createCat(cat); });
        this.populateCategoryDropdown();
    };
    Expenses.prototype.loadExpenses = function () {
        var _this = this;
        var storedData = localStorage.getItem("".concat(this.name, "_Expenses"));
        this.expenseArray = storedData ? JSON.parse(storedData) : [];
        this.expenseArray.forEach(function (expense) { return _this.createTodo(expense); });
    };
    Expenses.prototype.populateCategoryDropdown = function () {
        var categorySelect = document.getElementById('category');
        if (categorySelect) {
            categorySelect.innerHTML = '<option value="">Select a category</option>';
            this.categoryArray.forEach(function (category) {
                var option = document.createElement('option');
                option.value = category.name;
                option.textContent = category.name;
                categorySelect.appendChild(option);
            });
        }
    };
    Expenses.prototype.createTodo = function (expenseObj) {
        var eleList = document.querySelector('#ul-expenses');
        if (expenseObj && eleList) {
            var li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-start";
            li.innerHTML = "\n                <span>".concat(expenseObj.description, " (").concat(expenseObj.category, ")</span>\n                <span>").concat(expenseObj.amount, "</span>\n                <button type=\"button\" class=\"btn btn-warning delete-btn\" data-desc=\"").concat(expenseObj.description, "\">Delete</button>\n            ");
            eleList.appendChild(li);
            this.updateTotal();
        }
    };
    Expenses.prototype.updateTotal = function () {
        var totalElement = document.querySelector('#total-expense');
        if (totalElement) {
            totalElement.textContent = this.getTotal().toString();
        }
    };
    Expenses.prototype.getTotal = function () {
        return this.expenseArray.reduce(function (acc, val) { return acc + val.amount; }, 0);
    };
    Expenses.prototype.addExpenses = function (value) {
        if (value) {
            this.expenseArray.push(value);
            console.log('Expense Added');
            this.saveAllExpenses();
            this.createTodo(value);
        }
    };
    Expenses.prototype.removeExpense = function (value) {
        var index = this.expenseArray.findIndex(function (val) { return val.description === value; });
        this.expenseArray.splice(index, 1);
        console.log('Expense Deleted');
        this.saveAllExpenses();
        this.refreshExpenseList();
    };
    Expenses.prototype.refreshExpenseList = function () {
        var _this = this;
        var eleList = document.querySelector('#ul-expenses');
        if (eleList) {
            eleList.innerHTML = '';
            this.expenseArray.forEach(function (expense) { return _this.createTodo(expense); });
        }
    };
    Expenses.prototype.filterExpensesByCategory = function (category) {
        var _this = this;
        var eleList = document.querySelector('#ul-expenses');
        if (eleList) {
            eleList.innerHTML = '';
            var filteredExpenses = this.expenseArray.filter(function (expense) { return expense.category === category; });
            filteredExpenses.forEach(function (expense) { return _this.createTodo(expense); });
        }
    };
    return Expenses;
}());
var user1 = new Expenses('Pandurang');
// user1.createCategory({name:'Food'})
// user1.createCategory({name:'Rent'})
// user1.createCategory({name:'Travell'})
// user1.createCategory({name:'Stationary'})
(_a = document.getElementById('expense-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var description = document.getElementById('description').value;
    var amount = parseFloat(document.getElementById('amount').value);
    var category = document.getElementById('category').value;
    var date = document.getElementById('date').value;
    if (description && amount && category && date) {
        user1.addExpenses({ amount: amount, category: category, date: date, description: description });
        document.getElementById('expense-form').reset();
    }
});
(_b = document.getElementById('ul-expenses')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('delete-btn')) {
        var description = target.getAttribute('data-desc');
        if (description) {
            user1.removeExpense(description);
        }
    }
});
(_c = document.getElementById('category')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', function (event) {
    var selectedCategory = event.target.value;
    if (selectedCategory) {
        user1.filterExpensesByCategory(selectedCategory);
    }
    else {
        user1.refreshExpenseList();
    }
});
(_d = document.getElementById('button-category')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function (e) {
    e.preventDefault();
    var inputBox = document.getElementById('input-category');
    var name = inputBox.value;
    if (inputBox && name) {
        user1.createCategory({ name: name });
    }
});
(_e = document.getElementById('ul-category')) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function (event) {
    var _a;
    var target = event.target;
    if (target.classList.contains('btn-warning')) {
        var categoryItem = target.closest(".list-group-item");
        if (categoryItem) {
            var categoryName = (_a = categoryItem.textContent) === null || _a === void 0 ? void 0 : _a.trim();
            if (categoryName) {
                user1.removeCategory(categoryName);
                categoryItem.remove();
            }
        }
    }
});
