
// -------------------------------------------------------------------------
// Factory-Method-Pattern:
// It is used to abstract object creation logic based on a condition/input.
// -------------------------------------------------------------------------

// Design a Notification Factory System that supports the following:
// ✅ Notification Types:
// Email
// SMS
// Push
// WhatsApp 
// -------------------------------------------------------------------------

class NotificationFactory {
    //  factory methods are usually static or stateless.....
    static create(type) {
        switch (type) {
            case 'email':
                return new Email();
            case 'sms':
                return new Sms();
            case 'push':
                return new Push();
            case 'whatsapp':
                return new Whatsapp();
            default:
                throw new Error(`Unknown notification type: ${type}`);
        }
    }
}

class Email {
    sendMessage() {
        console.log('Sending EMAIL: Welcome to our app!')
    }
}

class Sms {
    sendMessage() {
        console.log('Sending Sms: Your code is 456789!')
    }
}

class Push {
    sendMessage() {
        console.log('Sending Push: Welcome to our app!')
    }
}

class Whatsapp {
    sendMessage() {
        console.log('Sending Whatsapp: Hello from WhatsApp!')
    }
}

let emailNotify = NotificationFactory.create('email');
emailNotify.sendMessage();
let smsNotify = NotificationFactory.create('sms');
smsNotify.sendMessage();
let pushNotify = NotificationFactory.create('push');
pushNotify.sendMessage();
let whatsappNotify = NotificationFactory.create('whatsapp');
whatsappNotify.sendMessage();

// The Factory Pattern provides a way to create objects without exposing the creation logic to the client.
// In this example, I created a NotificationFactory that returns the appropriate notification-
// handler (Email, SMS, Push, or WhatsApp) based on the input type.
// This allows clean separation of concerns and follows the Open-Closed Principle —
// I can add new types without modifying the calling code 🔥