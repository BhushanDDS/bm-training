declare const axios: any;

document.addEventListener("DOMContentLoaded", async function () {
    const productsContainer = document.getElementById("products-container") as HTMLDivElement;

    interface Product {
        id: number;
        title: string;
        price: number;
        image: string;
    }

    document.querySelectorAll(".category-btn").forEach(button => {
        button.addEventListener("click", function (e) {
            const target = e.target as HTMLElement;
            const categoryItem = target.closest(".btn-outline-primary");
            const selectedCategory = categoryItem?.getAttribute("data-category");
            if (selectedCategory) {
                fetchProductsByCategory(selectedCategory);
            }
        });
    });

    const fetchProductsByCategory = async (category: string) => {
        try {
            if(category==="All Products"){
                fetchProducts();
            }
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            displayProducts(response.data);
        } catch (error) {
            console.error(`Error fetching category "${category}":`, error);
            alert("Failed to load category products.");
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products?limit=9");
            displayProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const displayProducts = (products: Product[]) => {
        if (productsContainer) {
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
                            <button class="btn btn-primary mt-auto view-product" data-id="${product.id}">View Product</button>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
        }
    };

    document.addEventListener("click", function (e) {
        const eventtarget = e.target as HTMLElement;
        if (eventtarget.classList.contains("view-product")) {
            const productId = eventtarget.getAttribute("data-id");
            if (productId) {
                window.location.href = `singleProduct.html?id=${productId}`;
            }
        }
    });

    fetchProducts();
});
