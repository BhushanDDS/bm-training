"use strict";
document.addEventListener("DOMContentLoaded", async function () {
    const productDetails = document.getElementById("product-details");
    if (!productDetails)
        return;
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    if (!productId) {
        productDetails.innerHTML = `<p class="text-danger">Invalid product ID.</p>`;
        return;
    }
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok)
            throw new Error("Failed to fetch product details");
        const product = await response.json();
        productDetails.innerHTML = `
            <div class="col-md-8 mx-auto">
                <div class="card shadow-lg border-0">
                    <img src="${product.image}" class="card-img-top p-4" alt="${product.title}" style="height: 300px; object-fit: contain;">
                    <div class="card-body">
                        <h2 class="card-title fw-bold">${product.title}</h2>
                        <h4 class="text-primary fw-semibold">$${product.price}</h4>
                        <p class="card-text text-muted">${product.description}</p>
                        <p class="fw-bold"><strong>Category:</strong> <span class="text-capitalize">${product.category}</span></p>
                        <a href="index.html" class="btn btn-secondary mt-3">Back to Products</a>
                    </div>
                </div>
            </div>
        `;
    }
    catch (error) {
        productDetails.innerHTML = `<p class="text-danger">Error loading product details.</p>`;
        console.error(error);
    }
});
