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
  
  
//task 3 - VIP customer's total spent with bonus.
class VIPCustomer extends Customer {
    // creates an extension of customer class called VIPCustomer
    constructor(name, email, vipLevel) {
      // cosntructor with three prameters
      super(name, email); // uses super to call data from parent class
      this.viplevel = vipLevel; // assigns value
    }
    totalSpent() {
      // creates a methos
      const totalSpent = super.totalSpent(); // Call the parent class fucntion
      const bonus = totalSpent * 0.1; // Calculates bonus (bonus is 10%)
      return totalSpent + bonus; // Returns total amount
    }
  }
  // test values 3
  const VIPCustomer1 = new VIPCustomer("Jay", "jay@gmail.com", "Gold"); // Creates a new VIPcustomer
  VIPCustomer1.addPurchase(500); // adds purchase amount
  VIPCustomer1.addPurchase(300); // adds purchase amount
  salesRep1.addClient(VIPCustomer1); // adds vip to salesRep1 clients