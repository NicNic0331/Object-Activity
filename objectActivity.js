// Create an object called car with the properties type, model, and color
let car = {
    type: "SUV",
    model: "Honda CR-V",
    color: "Red"
  };

  console.log(typeof car); // Check the type of the object and logs "obejct"
  
  car.type = "Toyota"; // Update the type property to "Toyota"
  console.log(car); // Logs "{ type: 'Toyota', model: 'Honda CR-V', color: 'Red' }
  
  car.wheels = "4";  // Add a new property wheels with the value 4
  console.log(car); // Logs "{ type: 'Toyota', model: 'Honda CR-V', color: 'Red', wheels: "4" }"
