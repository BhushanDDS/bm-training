
abstract class Payment{
    amount:number;
    date:string;

    constructor(amount:number, date:string) {
                this.amount = amount;
                this.date = date;
            }

    processPayment() {
        throw new Error("this has to be implemented");
    }
}

class CreditCardPayment extends Payment {
    private cardNumber:string;
    private cardHolderName:string;

    constructor(amount:number, date:string, cardNumber:string, cardHolderName:string) {
        super(amount, date);
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
    }

    processPayment():string {
        return `Processing credit card payment of $${this.amount} on ${this.date} for ${this.cardHolderName}.`;
    }
}

class PaypalPayment extends Payment {
    private paypalEmail:string;
    constructor(amount:number, date:string, paypalEmail:string) {
        super(amount, date);
        this.paypalEmail = paypalEmail;
    }

    processPayment():string {
        return `Processing PayPal payment of $${this.amount} on ${this.date} for ${this.paypalEmail}.`;
    }
}

class CryptoPayment extends Payment {
    private walletAddress:string;
    constructor(amount:number, date:string, walletAddress:string) {
        super(amount, date);
        this.walletAddress = walletAddress;
    }

    // processPayment():string {
    //     return `Processing crypto payment of $${this.amount} on ${this.date} to wallet ${this.walletAddress}.`;
    // }
}
/*
If we dont implement
C:\Users\bhushan\Desktop\BM\bm-training\Assighnment__6\OnlinePaymentSystem.js:31
        throw new Error("this has to be implemented");
        ^

Error: this has to be implemented
*/

const creditCard = new CreditCardPayment(100, "2025-02-04", "1111-2222-2222-2222", "abcd");
console.log(creditCard.processPayment());

const paypal = new PaypalPayment(75, "2025-02-04", "walletaddress");
console.log(paypal.processPayment());

const crypto1 = new CryptoPayment(200, "2025-02-04", "0xABC123XYZ456DEF");
console.log(crypto1.processPayment());



/*
If we do implement all 


 npx tsc .\OnlinePaymentSystem.ts | node .\OnlinePaymentSystem.js
Processing credit card payment of $100 on 2025-02-04 for abcd.
Processing PayPal payment of $75 on 2025-02-04 for walletaddress.
Processing crypto payment of $200 on 2025-02-04 to wallet 0xABC123XYZ456DEF.

*/