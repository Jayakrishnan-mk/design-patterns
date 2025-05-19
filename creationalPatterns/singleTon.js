
// singleton pattern:
// it ensures only one instance of a class exists in the whole application

class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.connection = 'Connected to DB';
        Database.instance = this;
    }

    getConnection() {
        return this.connection;
    }
}

let db1 = new Database();
let db2 = new Database();

console.log(db1 === db2); // true


// 📦 Use cases in Backend:
// ------------------------
// Database connections
// Caching services (e.g., Redis client)
// Configuration managers
// Logger services
