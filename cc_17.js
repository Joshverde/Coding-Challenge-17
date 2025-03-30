// Task 1 -New customer creation and total spent after purchases.
class Customer {
    // creates a class
    constructor(name, email) {
      // constructor with two parameters
      this.name = name; // assigns name
      this.email = email; // assigns email
      this.purchaseHistory = []; // creates an emnpty array
    }
    addPurchase(amount) {
      // creates a method with one parameter
      this.purchaseHistory.push(amount); // adds amount to purhcase history
    }
    totalSpent() {
      // creates a new method with no parameters
      return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    } // uses reduce to find the total a customer spent
  }
  // test values
  const Customer1 = new Customer("Josh", "AOL"); // creates a new customer
  Customer1.addPurchase(100); // calls method to add a purchase amount
  Customer1.addPurchase(200); // calls method to add a purchase amount

  
// Task 2 - Sales rep’s clients and total spent for a specific client.
class salesRep {
    // creates a class
    constructor(name) {
      // constructor with one parameter
      this.name = name; // assigns name
      this.clients = []; // creates an empty array
    }
    addClient(customer) {
      // creates a method with one paramter
      if (customer instanceof Customer) {
        // uses instance of to check that the customer is in the customer class
        this.clients.push(customer); // adds to this.clients array
      }
    }
    getClientTotal(name) {
      // creates a method
      const client = this.clients.find((client) => client.name === name); // finds client name in client array
      if (client)
        // if it is found
        client.totalSpent(); // calle the method totalSpent()
    }
  }
  // Test Values 2
  const salesRep1 = new salesRep("John"); // creates a new sales rep
  salesRep1.addClient(Customer1); // adds a client
  salesRep1.getClientTotal("Josh"); // uses client name to search their total amount