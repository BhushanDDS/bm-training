document.addEventListener("DOMContentLoaded", async function() {
    const productList = document.getElementById("product-list");

    try {
        const response = await axios.get("https://fakestoreapi.com/products?_limit=5");
        const products = response.data;
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("col-md-4", "mb-4");

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


            productList.appendChild(productCard);
        });


        document.querySelectorAll(".view-product").forEach(button => {
            button.addEventListener("click", function() {
                const productId = this.getAttribute("data-id");
                window.location.href = `singleProduct.html?id=${productId}`;
            });
        });

    } catch (error) {
        console.error("nt fecthing", error);
    }
});