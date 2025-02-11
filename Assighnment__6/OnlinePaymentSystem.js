// class Payment {
//     constructor(amount, date) {
//         this.amount = amount;
//         this.date = date;
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     processPayment() {
//         throw new Error("processPayment() must be implemented in subclasses");
//     }
// }
var Payment = /** @class */ (function () {
    function Payment(amount, date) {
        this.amount = amount;
        this.date = date;
    }
    Payment.prototype.processPayment = function () {
        throw new Error("this has to be implemented");
    };
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(amount, date, cardNumber, cardHolderName) {
        var _this = _super.call(this, amount, date) || this;
        _this.cardNumber = cardNumber;
        _this.cardHolderName = cardHolderName;
        return _this;
    }
    CreditCardPayment.prototype.processPayment = function () {
        return "Processing credit card payment of $".concat(this.amount, " on ").concat(this.date, " for ").concat(this.cardHolderName, ".");
    };
    return CreditCardPayment;
}(Payment));
var PaypalPayment = /** @class */ (function (_super) {
    __extends(PaypalPayment, _super);
    function PaypalPayment(amount, date, paypalEmail) {
        var _this = _super.call(this, amount, date) || this;
        _this.paypalEmail = paypalEmail;
        return _this;
    }
    PaypalPayment.prototype.processPayment = function () {
        return "Processing PayPal payment of $".concat(this.amount, " on ").concat(this.date, " for ").concat(this.paypalEmail, ".");
    };
    return PaypalPayment;
}(Payment));
var CryptoPayment = /** @class */ (function (_super) {
    __extends(CryptoPayment, _super);
    function CryptoPayment(amount, date, walletAddress) {
        var _this = _super.call(this, amount, date) || this;
        _this.walletAddress = walletAddress;
        return _this;
    }
    return CryptoPayment;
}(Payment));
// Example Usage
var creditCard = new CreditCardPayment(100, "2025-02-04", "1111-2222-2222-2222", "abcd");
console.log(creditCard.processPayment());
var paypal = new PaypalPayment(75, "2025-02-04", "walletaddress");
console.log(paypal.processPayment());
var crypto1 = new CryptoPayment(200, "2025-02-04", "0xABC123XYZ456DEF");
console.log(crypto1.processPayment());
