import axios from 'axios';
import Toastify from 'toastify-js';

document.addEventListener("DOMContentLoaded", async function () {
    const productsContainer = document.getElementById("products-container") as HTMLElement;
    const productForm = document.getElementById("product-form") as HTMLFormElement | null;

    interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        image: string;
        category: string;
    }

    const responseForFailedRequests = async (error: any) => {
        Toastify({
            text: `Error: ${error.response?.status || "Unknown Error"}`,
            duration: 3000,
            gravity: "top",
            position: "center",
            backgroundColor: "red",
        }).showToast();
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
            displayProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            responseForFailedRequests(error);
        }
    };

    function displayProducts(products: Product[]) {
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
        attachEventListeners();
    }

    function attachEventListeners() {
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const target = e.target as HTMLElement;
                const productId = target.getAttribute("data-id");
                if (productId) deleteProduct(parseInt(productId));
            });
        });

        document.querySelectorAll(".update-btn").forEach(button => {
            button.addEventListener("click", (e) => {
                const target = e.target as HTMLElement;
                const productId = target.getAttribute("data-id");
                if (productId) updateProduct(parseInt(productId));
            });
        });
    }

    async function createProduct(e: Event) {
        e.preventDefault();
        
        const newProduct: Omit<Product, 'id'> = {
            title: (document.getElementById("product-title") as HTMLInputElement).value,
            price: parseFloat((document.getElementById("product-price") as HTMLInputElement).value),
            description: (document.getElementById("product-description") as HTMLTextAreaElement).value,
            image: (document.getElementById("product-image") as HTMLInputElement).value,
            category: (document.getElementById("product-category") as HTMLInputElement).value
        };

        try {
            const response = await axios.post("https://fakestoreapi.com/products", newProduct);
            if (response.status === 201) {
                Toastify({
                    text: "Product created successfully!",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "green",
                }).showToast();
                fetchProducts();
            }
        } catch (error) {
            console.error("Error creating product:", error);
            responseForFailedRequests(error);
        }
    }

    async function updateProduct(productId: number) {
        const updatedProduct: Partial<Product> = {
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
                    text: "Product updated successfully!",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "blue",
                }).showToast();
                fetchProducts();
            }
        } catch (error) {
            console.error("Error updating product:", error);
            responseForFailedRequests(error);
        }
    }

    async function deleteProduct(productId: number) {
        try {
            const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
            if (response.status === 200) {
                Toastify({
                    text: "Product deleted successfully!",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "red",
                }).showToast();
                fetchProducts();
            }
        } catch (error) {
            responseForFailedRequests(error);
        }
    }

    async function fetchProductsByCategory(category: string | null) {
        if (!category) return;
        try {
            const response = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
            displayProducts(response.data);
        } catch (error) {
            console.error(`Error fetching category "${category}":`, error);
            responseForFailedRequests(error);
        }
    }

    document.querySelectorAll(".category-btn").forEach(button => {
        button.addEventListener("click",  () => {
            const selectedCategory = (this as unknown as HTMLElement).getAttribute("data-category");
            fetchProductsByCategory(selectedCategory);
        });
    });

    if (productForm) productForm.addEventListener("submit", createProduct);

    fetchProducts();
});
