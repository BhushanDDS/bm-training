document.addEventListener("DOMContentLoaded", async function() {
    const productsContainer = document.getElementById("products-container");


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



    try {


        async function fetchProducts() {
            try {
                const response = await axios.get("https://fakestoreapi.com/products?limit=9");
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
                             <button class="btn btn-primary mt-auto view-product" data-id="${product.id}">View Product</button>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });

            nowAttachingTheEventToNewlyAppendedElement();

        }


        function nowAttachingTheEventToNewlyAppendedElement() {

            document.querySelectorAll(".view-product").forEach(button => {
                button.addEventListener("click", function() {
                    const productId = this.getAttribute("data-id");
                    window.location.href = `singleProduct.html?id=${productId}`;
                });
            });

        }





        fetchProducts()


    } catch (error) {
        console.error("nt fecthing", error);
    }


});