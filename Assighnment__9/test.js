"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
document.addEventListener("DOMContentLoaded", function () {
    return __awaiter(this, void 0, void 0, function () {
        var productsContainer, fetchProductsByCategory, fetchProducts, displayProducts;
        var _this = this;
        return __generator(this, function (_a) {
            productsContainer = document.getElementById("products-container");
            document.querySelectorAll(".category-btn").forEach(function (button) {
                button.addEventListener("click", function (e) {
                    var target = e.target;
                    var categoryItem = target.closest(".btn-outline-primary");
                    var selectedCategory = categoryItem === null || categoryItem === void 0 ? void 0 : categoryItem.getAttribute("data-category");
                    if (selectedCategory) {
                        fetchProductsByCategory(selectedCategory);
                    }
                });
            });
            fetchProductsByCategory = function (category) { return __awaiter(_this, void 0, void 0, function () {
                var response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios_1.default.get("https://fakestoreapi.com/products/category/".concat(category))];
                        case 1:
                            response = _a.sent();
                            displayProducts(response.data);
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error("Error fetching category \"".concat(category, "\":"), error_1);
                            alert("Failed to load category products.");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            fetchProducts = function () { return __awaiter(_this, void 0, void 0, function () {
                var response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, axios_1.default.get("https://fakestoreapi.com/products?limit=9")];
                        case 1:
                            response = _a.sent();
                            displayProducts(response.data);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error("Error fetching products:", error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); };
            displayProducts = function (products) {
                if (productsContainer) {
                    productsContainer.innerHTML = "";
                    products.forEach(function (product) {
                        var productCard = document.createElement("div");
                        productCard.className = "col-md-4 mb-4";
                        productCard.innerHTML = "\n                    <div class=\"card h-100 shadow-sm\">\n                        <img src=\"".concat(product.image, "\" class=\"card-img-top p-3\" alt=\"").concat(product.title, "\" style=\"height: 200px; object-fit: contain;\">\n                        <div class=\"card-body d-flex flex-column\">\n                            <h5 class=\"card-title text-truncate\" title=\"").concat(product.title, "\">").concat(product.title, "</h5>\n                            <p class=\"fw-bold text-success\">$").concat(product.price, "</p>\n                            <button class=\"btn btn-primary mt-auto view-product\" data-id=\"").concat(product.id, "\">View Product</button>\n                        </div>\n                    </div>\n                ");
                        productsContainer.appendChild(productCard);
                    });
                }
            };
            document.addEventListener("click", function (e) {
                var eventtarget = e.target;
                if (eventtarget.classList.contains("view-product")) {
                    var productId = eventtarget.getAttribute("data-id");
                    if (productId) {
                        window.location.href = "singleProduct.html?id=".concat(productId);
                    }
                }
            });
            fetchProducts();
            return [2 /*return*/];
        });
    });
});
