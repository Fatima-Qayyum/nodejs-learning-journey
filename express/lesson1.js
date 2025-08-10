/*Express.js – Beginner Notes
1. Installing Express.js
Initialize your project:
npm init -y
Install Express:

npm install express
Import and create an Express app:

const express = require("express");
const app = express();


2. app.listen() – Starting the Server
Purpose: Starts the Express server and listens for incoming requests on a specific port.

Syntax:


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
Notes:

Without app.listen(), your server will not run.

The first parameter is the port number (e.g., 3000).

The second parameter is an optional callback function that runs after the server starts.

3. app.use() – Using Middleware
Purpose: Runs a function for every request before passing it to the route handler.


app.use((req, res, next) => {
  console.log("Request made:", req.method, req.url);
  next(); // Pass control to the next middleware or route
});
Notes:

Middleware can be used for logging, authentication, parsing data, etc.

next() is required to continue to the next step in the request-response cycle.

If next() is not called, the request will stop and no response will be sent.*/