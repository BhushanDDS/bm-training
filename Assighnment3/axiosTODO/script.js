document.addEventListener("DOMContentLoaded", () => {
    const inputTodo = document.getElementById("input-todo");
    const buttonTodo = document.getElementById("button-todo");
    const ulTodo = document.getElementById("ul-todo");
    const deleteAllBtn = document.getElementById("dltAll");



    const API_URL = "https://jsonplaceholder.typicode.com/todos";

    const loadAllTodo = async() => {
        try {
            const res = await axios.get(`${API_URL}?_limit=5`);
            res.data.forEach(todo => createTodo(todo.id, todo.title));
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    buttonTodo.addEventListener("click", async() => {
        const text = inputTodo.value.trim();
        try {
            const res = await axios.post(API_URL, { title: text, completed: false });
            createTodo(res.data.id, text);
            inputTodo.value = "";
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    });


    // buttonTodo.addEventListener("click", async() => {
    //     const text = inputTodo.value.trim();
    //     if (!text) return;

    //     const tempId = `temp-${Date.now()}`; // Generate a temporary unique ID
    //     createTodo(tempId, text); // Add the task to the UI immediately

    //     try {
    //         const res = await axios.post(API_URL, { title: text, completed: false });

    //         // Find the temporary task and update its ID with the correct API ID
    //         const li = document.querySelector(`[data-id="${tempId}"]`);
    //         if (li) li.dataset.id = res.data.id; // Update to real API ID
    //     } catch (error) {
    //         console.error("Error adding todo:", error);
    //     }

    //     inputTodo.value = "";
    // });



    const createTodo = (id, task) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-start";
        li.dataset.id = id;
        li.innerHTML = `
            <span class="text-todo">${task}</span>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-danger">Edit</button>
                <button type="button" class="btn btn-warning">Delete</button>
            </div>
        `;
        ulTodo.appendChild(li);
    };

    ulTodo.addEventListener("click", async(e) => {
        if (e.target.classList.contains("btn-warning")) {
            const li = e.target.closest(".list-group-item");
            const todoId = li.dataset.id;

            await axios.delete(`${API_URL}/${todoId}`);
            li.remove();

        }
    });

    ulTodo.addEventListener("click", async(e) => {
        if (e.target.classList.contains("btn-danger")) {
            const li = e.target.closest(".list-group-item");
            const taskSpan = li.querySelector(".text-todo");
            const editButton = e.target;
            const todoId = li.dataset.id;

            if (editButton.textContent === "Edit") {
                const inputField = document.createElement("input");
                inputField.type = "text";
                inputField.className = "form-control";
                inputField.value = taskSpan.textContent;
                taskSpan.replaceWith(inputField);
                editButton.textContent = "Save";
            } else {
                const inputField = li.querySelector("input");
                const updatedText = inputField.value.trim();
                await axios.put(`${API_URL}/${todoId}`, { title: updatedText, completed: false });

                const newSpan = document.createElement("span");
                newSpan.className = "text-todo";
                newSpan.textContent = updatedText;
                inputField.replaceWith(newSpan);
                editButton.textContent = "Edit";

            }
        }
    });

    // ulTodo.addEventListener("click", async(e) => {
    //     if (e.target.classList.contains("btn-danger")) {
    //         const li = e.target.closest(".list-group-item");
    //         const taskSpan = li.querySelector(".text-todo");
    //         const editButton = e.target;
    //         let todoId = li.dataset.id;

    //         if (editButton.textContent === "Edit") {
    //             const inputField = document.createElement("input");
    //             inputField.type = "text";
    //             inputField.className = "form-control";
    //             inputField.value = taskSpan.textContent;
    //             taskSpan.replaceWith(inputField);
    //             editButton.textContent = "Save";
    //         } else {
    //             const inputField = li.querySelector("input");
    //             const updatedText = inputField.value.trim();

    //             // Prevent updating tasks with temporary IDs
    //             if (!todoId.startsWith("temp-")) {
    //                 await axios.put(`${API_URL}/${todoId}`, { title: updatedText, completed: false });
    //             }

    //             const newSpan = document.createElement("span");
    //             newSpan.className = "text-todo";
    //             newSpan.textContent = updatedText;
    //             inputField.replaceWith(newSpan);
    //             editButton.textContent = "Edit";
    //         }
    //     }
    // });


    deleteAllBtn.addEventListener("click", async() => {
        if (!confirm("Are you sure you want to delete all todos?")) return;

        const allTodos = document.querySelectorAll(".list-group-item");
        allTodos.forEach(todo => todo.remove());

    });

    loadAllTodo();
});