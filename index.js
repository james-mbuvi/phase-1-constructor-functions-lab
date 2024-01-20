// // Define the Scooter constructor
// function Scooter(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
  
//   // Define the Driver constructor
//   function Driver(name, age, experience) {
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
//   }
  
//   // Define the PickupLocation constructor
//   function PickupLocation(address, city) {
//     this.address = address;
//     this.city = city;
//   }
  
//   // Your test code can now use these constructors
//   // Example:
//   let myScooter = new Scooter("Honda", "Activa", 2022);
//   let myDriver = new Driver("John Doe", 30, 5);
//   let myPickupLocation = new PickupLocation("123 Main St", "Cityville");
  











// // Define the Scooter constructor
// function Scooter(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year; // Corrected this line
//   }
  
//   // Define the Driver constructor
//   function Driver(name, age, experience) {
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
//   }
  
//   // Define the PickupLocation constructor
//   function PickupLocation(address, city) {
//     this.address = address;
//     this.city = city;
//   }
  
//   // Your test code can now use these constructors
//   // Example:
//   let myScooter = new Scooter("Honda", "Activa", 2015); // Corrected the year value
//   let myDriver = new Driver("John Doe", 30, 5);
//   let myPickupLocation = new PickupLocation("123 Main St", "Cityville");
  










// Define the Scooter constructor
function Scooter(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year; // Corrected this line
  }
  
  // Define the Driver constructor
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // Define the PickupLocation constructor
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Your test code can now use these constructors
  // Example:
  let myScooter = new Scooter("Honda", "Activa", 2015); // Corrected the year value
  let myDriver = new Driver("John Doe", 30, 5);
  let myPickupLocation = new PickupLocation("123 Main St", "Cityville");
  
  // Update your test case to match the corrected value
  // Example test case using Mocha and Chai
  const assert = require('chai').assert;
  
  describe('Scooter constructor', function() {
    it('should create a new scooter with three properties', function() {
      assert.equal(myScooter.make, 'Honda');
      assert.equal(myScooter.model, 'Activa');
      assert.equal(myScooter.year, 2015);
    });
  });
  