
// observer pattern - A behavioural pattern
// ----------------

// Build a Weather Station system using the Observer Pattern.
// ------------------------------

class WeatherStation {
    constructor() {
        this.observers = [];
    }

    subscribeOnce(observer) {
        const wrapper = {
            update: (data) => {
                observer.update(data);
                this.unsubscribe(wrapper);
            }
        }
        this.subscribe(wrapper);
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class PhoneDisplay {
    update(data) {
        if (parseFloat(data) > 30) {
            console.log(`📱 Phone shows temperature: ${data}°C`)
        }
    }
}

class LEDPanelDisplay {
    update(data) {
        if (parseFloat(data) > 30) {
            console.log(`💡 LED panel displays: ${data}°C`)
        }
    }
}


class Logger {
    update(data) {
        if (parseFloat(data) > 30) {
            console.log(`📝 Temperature recorded: ${data}°C`)
        }
    }
}

const weather = new WeatherStation();
const phone = new PhoneDisplay();
const panel = new LEDPanelDisplay();
const logger = new Logger();

weather.subscribeOnce(phone);
weather.subscribe(panel);
weather.subscribe(logger);

weather.notify("31.5");
weather.notify("30.1");
weather.notify("21.2");

// Here i implemented the Observer Pattern by creating a WeatherStation as the subject,
// and PhoneDisplay, LEDPanelDisplay, and Logger as observers.
// When the station pushes temperature updates, each subscribed observer reacts independently.
// This makes the system loosely coupled, so we can add or remove displays without-
// changing the core station logic — a good application of the Open-Closed Principle.