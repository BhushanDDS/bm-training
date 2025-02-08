document.addEventListener("DOMContentLoaded", async function() {
    const productsContainer = document.getElementById("products-container");
    const productForm = document.getElementById("product-form");

    function failed(response) {
        Toastify({
            text: `error lol  ${response.status}`,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();

    }

    async function fetchProducts() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            displayProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    function displayProducts(products) {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "col-md-4 mb-4";
            productCard.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 200px; object-fit: contain;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate" title="${product.title}">${product.title}</h5>
                        <p class="fw-bold text-success">$${product.price}</p>
                        <button class="btn btn-warning update-btn w-100 mb-2" data-id="${product.id}">Update</button>
                        <button class="btn btn-danger delete-btn w-100" data-id="${product.id}">Delete</button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });

        nowAttachingTheEventToNewlyAppendedElement();

    }

    function nowAttachingTheEventToNewlyAppendedElement() {
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function() {
                deleteProduct(this.getAttribute("data-id"));
            });
        });

        document.querySelectorAll(".update-btn").forEach(button => {
            button.addEventListener("click", function() {
                updateProduct(this.getAttribute("data-id"));
            });
        });
    }

    async function createProduct(e) {
        e.preventDefault();
        const newProduct = {
            title: document.getElementById("product-title").value,
            price: parseFloat(document.getElementById("product-price").value),
            description: document.getElementById("product-description").value,
            image: document.getElementById("product-image").value,
            category: document.getElementById("product-category").value
        };

        try {
            const response = await axios.post("https://fakestoreapi.com/products", newProduct);
            if (response.status === 200 || response.status === 201) {
                Toastify({
                    text: `Product created successfully! ${response.status}`,
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "green",
                }).showToast();
                productForm.reset();

            }
        } catch (error) {
            console.error("Error creating product:", error);
            failed(response);
        }
    }
    async function updateProduct(productId) {
        const updatedProduct = {
            title: "Updated Product Name",
            price: 49.99,
            description: "This is a manually updated product description.",
            image: "https://via.placeholder.com/150",
            category: "electronics"
        };

        try {
            const response = await axios.put(`https://fakestoreapi.com/products/${productId}`, updatedProduct);
            if (response.status === 200) {
                Toastify({
                    text: `Product updated successfully! \n response status: ${response.status}`,
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "blue",
                }).showToast();
            }
        } catch (error) {
            console.error("Error updating product:", error);
            failed(response);
        }
    }
    async function deleteProduct(productId) {
        try {
            const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
            if (response.status == 200) {
                Toastify({
                    text: "Product deleted successfully!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "red",
                }).showToast();
            }

        } catch (error) {
            failed(response)
        }
    }

    productForm.addEventListener("submit", createProduct);

    document.querySelectorAll(".category-btn").forEach(button => {
        button.addEventListener("click", function() {
            const selectedCategory = this.getAttribute("data-category");
            fetchProductsByCategory(selectedCategory);
        });
    });
    async function fetchProductsByCategory(category) {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            displayProducts(response.data);
        } catch (error) {
            console.error(`Error fetching category "${category}":`, error);
            alert("Failed to load category products.");
        }
    }

    fetchProducts();


});