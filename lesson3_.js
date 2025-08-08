/*------------------------------NPM-------------------------------*/

/*
 WHAT IS NPM?
 NPM (Node Package Manager) is a tool that comes with Node.js and is used to install, manage, and share JavaScript packages (libraries or tools) for building web applications.
 
 */



 /* INSTALL PACKAGES
  How to Install Packages Using NPM
Definition:
To install packages means to download and add external libraries or tools to your Node.js project using NPM.

🔹 Basic Command
bash
Copy code
npm install <package-name>
Example:


npm install express
This installs the express package and adds it to node_modules and package.json.

















 Definition:
Installing the figlet package means adding it to your Node.js project so you can use it to create ASCII-style text output.

✅ Steps & Example:
📁 Step 1: Create a project folder
bash
Copy code
mkdir figlet-app
cd figlet-app
📁 Step 2: Initialize the project
bash
Copy code
npm init -y
This creates a package.json file.

📁 Step 3: Install figlet
bash
Copy code
npm install figlet
This adds:

figlet to node_modules/

figlet as a dependency in package.json

🧪 Example Usage: index.js
js
Copy code
const figlet = require('figlet');

figlet('Hello, Fatima!', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
 
 
 */








