


const utilis = require('./lesson_2'); // importing from math.js

console.log(utilis.add(5, 3)); // Output: 8
console.log(utilis.userName('fatima'));




const input = process.argv[2]; // Get number from command line
const num = parseFloat(input);

if (isNaN(num)) {
  console.log("❌ Please provide a valid number.");
} else {
  console.log(`✅ Square of ${num} is ${utilis.square(num)}`);
}

