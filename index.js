

// console.log(mathsOperations.addNumbers(20, 30));

// console.log(mathsOperations.subtract(30,23));

// console.log(mathsOperations.name);

// other method to solve it 

const mathOperationsM2 = require("./mathOperations M2");

const { addNumbers, subtract, name } = mathOperationsM2;

console.log(addNumbers(12, 12), name, subtract(23, 4));

// finding the filename 

const path = require("path");

console.log(path.parse(__filename));

//  joining the path

const profilePath = path.join(__dirname, "uploads");

console.log(profilePath);