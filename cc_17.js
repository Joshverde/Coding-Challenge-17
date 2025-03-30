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