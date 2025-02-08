document.addEventListener("DOMContentLoaded", function() {
    const adminLink = document.getElementById("admin-link");

    adminLink.addEventListener("click", function(event) {
        event.preventDefault();
        alert('email : john@gmail.com \n password :m38rmF$')

        const authForm = document.createElement("div");

        authForm.innerHTML = `
            <div class="position-fixed top-50 start-50 translate-middle bg-dark p-4 rounded text-light shadow-lg">
                <h4 class="mb-3">Admin Login</h4>
                <input type="email" id="email" class="form-control mb-2" placeholder="mail: john@gmail.com">
                <input type="password" id="password" class="form-control mb-3" placeholder="pwd: m38rmF$">
                <button id="login-btn" class="btn btn-primary w-100">Login</button>
                <button id="close-btn" class="btn btn-secondary w-100 mt-2">Close</button>
            </div>
        `;
        document.body.appendChild(authForm);

        nowAttachingtheElement();

        document.getElementById("close-btn").addEventListener("click", function() {
            authForm.remove();
        });
    });


    function nowAttachingtheElement() {
        document.getElementById("login-btn").addEventListener("click", async function() {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch("https://fakestoreapi.com/users");
            const users = await response.json();

            const isValidUser = users.some(user => user.email === "john@gmail.com" && password === "m38rmF$");

            if (isValidUser) {
                alert("Login successful!");
                window.location.href = "admin.html";
            } else {
                alert("Invalid credentials. Try again!");
            }

        });

    }
});