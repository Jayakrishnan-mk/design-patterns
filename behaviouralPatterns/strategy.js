
// strategy pattern - behavioural

// its the pattern that allows us to define multiple algos / strategies-
// and make them interchangeable at runtime.
// we encapsulate each strategy in its own class and inject it into a context class-
// to vary the behavioural without changing the context logic.


// Strategy interface......
class PaymentStrategy {
    pay(amount) {
        throw new Error("Method 'pay()' must be implemented.");
    }
}

// Concrete Strategies.....
class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`💳 Paid ₹${amount} using Credit Card.`);
    }
}

class UPIPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`📱 Paid ₹${amount} using UPI.`);
    }
}

class WalletPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`👛 Paid ₹${amount} using Wallet.`);
    }
}

// Context.......
class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(newStrategy) {
        this.strategy = newStrategy;
    }

    makePayment(amount) {
        this.strategy.pay(amount);
    }
}


const creditCard = new CreditCardPayment();
const upi = new UPIPayment();
const wallet = new WalletPayment();

const processor = new PaymentProcessor(creditCard);
processor.makePayment(1000); // 💳

processor.setStrategy(upi);
processor.makePayment(500); // 📱

processor.setStrategy(wallet);
processor.makePayment(250); // 👛
