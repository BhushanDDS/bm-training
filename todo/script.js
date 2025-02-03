document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const ulTodo = document.getElementById("ul-todo");

    let editMode = false;
    let editElement = null;

    buttonTodo.addEventListener("click", () => {
        const text = inputTodo.value;

        createTodo(text);

        inputTodo.value = "";
        saveAllTodo();
    });

    const createTodo = (task) => {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-start";
        li.innerHTML = `<span class="text-todo">${task}</span>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger">Edit</button>
      <button type="button" class="btn btn-warning">Delete</button>
    </div>`;
        ulTodo.appendChild(li);
    };
    ulTodo.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-warning")) {
            e.target.closest(".list-group-item").remove();
            saveAllTodo();
        }

        if (e.target.classList.contains("btn-danger")) {
            const li = e.target.closest(".list-group-item");
            const taskSpan = li.querySelector(".text-todo");

            const editButton = e.target;

            if (editButton.textContent === "Edit") {

                const inputField = document.createElement("input");
                inputField.type = "text";
                inputField.className = "form-control";
                inputField.value = taskSpan.textContent;
                taskSpan.replaceWith(inputField);
                inputField.focus();
                editButton.textContent = "Save";
            } else {
                const inputField = li.querySelector("input");
                const newSpan = document.createElement("span");
                newSpan.className = "text-todo";
                newSpan.textContent = inputField.value;
                inputField.replaceWith(newSpan);
                editButton.textContent = "Edit";
                saveAllTodo();
            }
        }
    });


    document.getElementById("dltAll").addEventListener("click", () => {
        const confirmation = confirm("Are you sure you want to delete all todos?");
        if (confirmation) {
            ulTodo.innerHTML = "";
            localStorage.removeItem("allTodos");
        }
    });

    const saveAllTodo = () => {
        const allTodos = [...document.querySelectorAll(".text-todo")].map(
            (task) => task.textContent
        );

        localStorage.setItem("allTodos", JSON.stringify(allTodos));
    };

    const loadAllTodo = () => {
        const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
        allTodos.forEach((task) => createTodo(task));
    };

    loadAllTodo();
});