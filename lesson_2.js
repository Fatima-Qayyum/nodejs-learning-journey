/*------------------------------modulexports---------------------------------------------
//module.exports is the object that a Node.js module returns when it is required using the require() function in another file.It is used to export functions, objects, or variables from one file so they can be imported and used in another.To organize code across multiple files.

To reuse functions, variables, or classes.

To follow modular programming — clean, readable, and maintainable code.*/

function add(a, b) {
  return a + b;
}

module.exports = {add,userName,square}; // exporting the function




function userName(name){
    return ` username  is  ${name}`

}


//Q2: Create a module named greet.js that exports a function called greetUser(name). This function should take a user's name as a parameter and return a greeting message like:

function userName(name){
    return ` username  is  ${name}`

}


//Q3: Create a module file math.js that exports a function square(num) which returns the square of a number.


function square(num) {
  return num * num;
}


//Q4:In your main file app.js, take a number from the command line and print its square using the imported function.














/*✅ Goal:To export multiple modules from a folder so they can be easily imported using just the folder name.

📁 Folder Structure Example:
lua
Copy code
myUtils/
├── math.js
├── string.js
└── index.js
📘 1. math.js – (Inside myUtils/)
js
Copy code
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
📘 2. string.js – (Inside myUtils/)
js
Copy code
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { capitalize };
📘 3. index.js – (Inside myUtils/)
This file gathers and exports everything from the folder.

js
Copy code
const math = require('./math');
const string = require('./string');

module.exports = {
  ...math,
  ...string
};
✅ index.js acts as the entry point for the whole folder.

📘 4. main.js – (Outside myUtils/)
js
Copy code
const utils = require('./myUtils');

console.log(utils.add(2, 3));           // 5
console.log(utils.capitalize("fatima")); // Fatima
🔁 Benefit:
Now instead of importing each file separately, you can just import the whole folder:

js
Copy code
const utils = require('./myUtils');
Let me know if you want this with ES Modules (import/export) or need this turned into a PDF.*/