class Payment {
    constructor(amount, date) {
        this.amount = amount;
        this.date = date;
    }

    processPayment() {
        throw new Error("processPayment() must be implemented in subclasses");
    }
}

class CreditCardPayment extends Payment {#
    cardNumber;

    constructor(amount, date, cardNumber, cardHolderName) {
        super(amount, date);
        this.#cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
    }

    processPayment() {
        return `Processing credit card payment of $${this.amount} on ${this.date} for ${this.cardHolderName}.`;
    }
}

class PaypalPayment extends Payment {
    constructor(amount, date, paypalEmail) {
        super(amount, date);
        this.paypalEmail = paypalEmail;
    }

    processPayment() {
        return `Processing PayPal payment of $${this.amount} on ${this.date} for ${this.paypalEmail}.`;
    }
}

class CryptoPayment extends Payment {
    constructor(amount, date, walletAddress) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }

    processPayment() {
        return `Processing crypto payment of $${this.amount} on ${this.date} to wallet ${this.walletAddress}.`;
    }
}

// Example Usage
const creditCard = new CreditCardPayment(100, "2025-02-04", "1234-5678-9101-1121", "John Doe");
console.log(creditCard.processPayment());

const paypal = new PaypalPayment(75, "2025-02-04", "john.doe@example.com");
console.log(paypal.processPayment());

const crypto = new CryptoPayment(200, "2025-02-04", "0xABC123XYZ456DEF");
console.log(crypto.processPayment());