var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.addEventListener("DOMContentLoaded", function () {
    return __awaiter(this, void 0, void 0, function () {
        function displayProducts(products) {
            productsContainer.innerHTML = "";
            products.forEach(function (product) {
                var productCard = document.createElement("div");
                productCard.className = "col-md-4 mb-4";
                productCard.innerHTML = "\n                <div class=\"card h-100 shadow-sm\">\n                    <img src=\"".concat(product.image, "\" class=\"card-img-top p-3\" alt=\"").concat(product.title, "\" style=\"height: 200px; object-fit: contain;\">\n                    <div class=\"card-body d-flex flex-column\">\n                        <h5 class=\"card-title text-truncate\" title=\"").concat(product.title, "\">").concat(product.title, "</h5>\n                        <p class=\"fw-bold text-success\">$").concat(product.price, "</p>\n                        <button class=\"btn btn-warning update-btn w-100 mb-2\" data-id=\"").concat(product.id, "\">Update</button>\n                        <button class=\"btn btn-danger delete-btn w-100\" data-id=\"").concat(product.id, "\">Delete</button>\n                    </div>\n                </div>\n            ");
                productsContainer.appendChild(productCard);
            });
            attachEventListeners();
        }
        function attachEventListeners() {
            document.querySelectorAll(".delete-btn").forEach(function (button) {
                button.addEventListener("click", function (e) {
                    var target = e.target;
                    var productId = target.getAttribute("data-id");
                    if (productId)
                        deleteProduct(parseInt(productId));
                });
            });
            document.querySelectorAll(".update-btn").forEach(function (button) {
                button.addEventListener("click", function (e) {
                    var target = e.target;
                    var productId = target.getAttribute("data-id");
                    if (productId)
                        updateProduct(parseInt(productId));
                });
            });
        }
        function createProduct(e) {
            return __awaiter(this, void 0, void 0, function () {
                var newProduct, response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            e.preventDefault();
                            newProduct = {
                                title: document.getElementById("product-title").value,
                                price: parseFloat(document.getElementById("product-price").value),
                                description: document.getElementById("product-description").value,
                                image: document.getElementById("product-image").value,
                                category: document.getElementById("product-category").value
                            };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios.post("https://fakestoreapi.com/products", newProduct)];
                        case 2:
                            response = _a.sent();
                            if (response.status === 201 || response.status === 200) {
                                Toastify({
                                    text: "Product created successfully!",
                                    duration: 3000,
                                    gravity: "top",
                                    position: "center",
                                    backgroundColor: "green",
                                }).showToast();
                                fetchProducts();
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error("Error creating product:", error_1);
                            responseForFailedRequests(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        function updateProduct(productId) {
            return __awaiter(this, void 0, void 0, function () {
                var updatedProduct, response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            updatedProduct = {
                                title: "Updated Product Name",
                                price: 49.99,
                                description: "This is a manually updated product description.",
                                image: "https://via.placeholder.com/150",
                                category: "electronics"
                            };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios.put("https://fakestoreapi.com/products/".concat(productId), updatedProduct)];
                        case 2:
                            response = _a.sent();
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
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _a.sent();
                            console.error("Error updating product:", error_2);
                            responseForFailedRequests(error_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        function deleteProduct(productId) {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios.delete("https://fakestoreapi.com/products/".concat(productId))];
                        case 1:
                            response = _a.sent();
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
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _a.sent();
                            responseForFailedRequests(error_3);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        function fetchProductsByCategory(category) {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!category)
                                return [2 /*return*/];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, axios.get("https://fakestoreapi.com/products/category/".concat(category))];
                        case 2:
                            response = _a.sent();
                            displayProducts(response.data);
                            return [3 /*break*/, 4];
                        case 3:
                            error_4 = _a.sent();
                            console.error("Error fetching category \"".concat(category, "\":"), error_4);
                            responseForFailedRequests(error_4);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        var productsContainer, productForm, responseForFailedRequests, fetchProducts;
        var _this = this;
        return __generator(this, function (_a) {
            productsContainer = document.getElementById("products-container");
            productForm = document.getElementById("product-form");
            responseForFailedRequests = function (error) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    Toastify({
                        text: "Error: ".concat(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || "Unknown Error"),
                        duration: 3000,
                        gravity: "top",
                        position: "center",
                        backgroundColor: "red",
                    }).showToast();
                    return [2 /*return*/];
                });
            }); };
            fetchProducts = function () { return __awaiter(_this, void 0, void 0, function () {
                var response, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios("https://fakestoreapi.com/products")];
                        case 1:
                            response = _a.sent();
                            displayProducts(response.data);
                            return [3 /*break*/, 3];
                        case 2:
                            error_5 = _a.sent();
                            console.error("Error fetching products:", error_5);
                            responseForFailedRequests(error_5);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            document.querySelectorAll(".category-btn").forEach(function (button) {
                button.addEventListener("click", function (e) {
                    var target = e.target;
                    var categoryBtn = target.closest(".category-btn");
                    var selectedCategory = categoryBtn === null || categoryBtn === void 0 ? void 0 : categoryBtn.getAttribute("data-category");
                    if (selectedCategory) {
                        fetchProductsByCategory(selectedCategory);
                    }
                });
            });
            if (productForm)
                productForm.addEventListener("submit", createProduct);
            fetchProducts();
            return [2 /*return*/];
        });
    });
});
