/*
Topics covered:
1 :introduction to node js?
2 : process and process.agrv?

*/




/*Node.js is a JavaScript runtime environment built on Google’s V8 JavaScript engine. It allows developers to run JavaScript code outside the browser, mainly on the server side.
🔹 Key Features:
Runs on the V8 engine (same as Chrome).
Uses non-blocking, event-driven architecture.
Enables building fast and scalable network applications.
Supports file system, network, process, and other low-level operations using built-in core modules.

How is Node.js Different from Browser JavaScript?
Node.js and browser JavaScript both use the JavaScript language, but they run in different environments and serve different purposes. Node.js runs on the server-side, while browser JavaScript runs on the client-side (in the browser). In the browser, JavaScript can interact with the DOM (Document Object Model) to update the UI, but it cannot access files on your computer for security reasons. On the other hand, Node.js does not have access to the DOM, but it can interact with the file system, network, and operating system using built-in modules like fs, http, and os. Node.js uses CommonJS (require) for modules, while browsers typically use ES Modules (import). In short, browser JS is used for frontend development, and Node.js is used for backend/server-side development.



*/


/*Node.js – process and process.argv
🔹 What is process in Node.js?
process is a global object in Node.js that provides information about, and control over, the current Node.js process.
It can be used to:

Access environment variables (process.env)

Exit a program (process.exit())

Get memory usage (process.memoryUsage())

🔹 What is process.argv?
process.argv is an array that holds command-line arguments passed when starting a Node.js script.

The first two values are always:

Path to the Node.js executable

Path to the script file

The rest are the actual arguments.


// script.js
console.log(process.argv);

node script.js hello world
Output:


[ 'node-path', 'script-path', 'hello', 'world' ]
👉 You can access custom arguments like this:


let name = process.argv[2];
console.log("Hello", name);

console.log(process.argv); 

*/


      


// Q1: Write a Node.js program that takes any number of words as command-line arguments and prints each word on a new line with its index.

const userArgs=process.argv.slice(2); // Get command-line arguments excluding the first two
if (userArgs.length === 0) {
  console.log("No arguments provided.");
} else {
  // Loop through each argument and print with index
  userArgs.forEach((arg, index) => {
    console.log(`Arg ${index + 1}: ${arg}`);
  });
}

//Write a Node.js program that accepts two numbers from the command line, adds them, and prints the result.

/* Use indexing and parseFloat to get numeric values
let number1 = parseFloat(process.argv[2]);
let number2 = parseFloat(process.argv[3]);

// Validate the inputs
if (isNaN(number1) || isNaN(number2)) {
  console.log("❌ Please provide two valid numbers.");
} else {
  let sum = number1 + number2;
  console.log(`✅ Sum of the two numbers you provided is: ${sum}`);
}*/

//  Q3: Write a Node.js program that takes one number from the command line and checks if the number is even or odd.If no number is provided or the input is not a valid number, show an error message.Otherwise, print whether the number is Even or Odd.



/*Q1: Write a Node.js program that takes your full name as a command-line argument and prints:

Hello, <name>! Have a great day!

const name =process.argv[2];
if(!name){
  console.log('please first provide your name');
}
else{
  console.log(`your name is ${name}`);
}*/


/*Accept a list of numbers from the command line and print only the even numbers.J

let  data=process.argv[2];
if(data%2==0){

  console.log('congratulations you have entered a even number');

}

else{
  console.log('you have entered a add number');
}



// one more method for above question;

let numbers=process.argv.splice(2).map(Number);
numbers.forEach(num => {
    if (!isNaN(num) && num % 2 === 0) {
        console.log(num);
    }
});*/

/*Q3: Take a single command-line argument for temperature in Celsius and convert it to Fahrenheit.


const celsius = parseFloat(process.argv[2]);
if (isNaN(celsius)) {
    console.log("❌ Please provide a valid temperature.");
} else {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C = ${fahrenheit}°F`);
}
*/


/*Q5: Accept two numbers and print which one is larger (or if they are equal).*/
const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("❌ Please provide two valid numbers.");
} else if (num1 > num2) {
    console.log(`${num1} is larger.`);
} else if (num2 > num1) {
    console.log(`${num2} is larger.`);
} else {
    console.log("Both numbers are equal.");
}



