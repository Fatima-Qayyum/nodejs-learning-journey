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

🧪 Example:
js
Copy
Edit
// script.js
console.log(process.argv);

node script.js hello world
Output:


[ 'node-path', 'script-path', 'hello', 'world' ]
👉 You can access custom arguments like this:


let name = process.argv[2];
console.log("Hello", name);



*/


console.log(process.argv);        