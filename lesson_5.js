


/* Create an Express app with a route / that responds with "Welcome to my site" using res.send().
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my site');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

*/



/*📝 Question 2:
Make a /profile route that sends JSON data containing a name and age using res.json().



const express = require('express');
const app = express();

app.get('/profile', (req, res) => {
    res.json({
        name: 'Fatima',
        age: 22
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
*/

/*
📝 Question 3:
Make a /notfound route that returns the message "Page not found" with HTTP status code 404 using res.status() and res.send().



const express = require('express');
const app = express();

// ✅ 200 OK
app.get('/ok', (req, res) => {
    res.status(200).send('Everything is fine ✅');
});

// ❌ 404 Not Found
app.get('/notfound', (req, res) => {
    res.status(404).send('Oops! Page not found ❌');
});

// 💥 500 Internal Server Error
app.get('/error', (req, res) => {
    res.status(500).send('Server crashed 💥 Please try again later.');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


const express = require('express');
const path = require('path');
const app = express();

// Route to send a file
app.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, 'example.txt'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// test.js
console.log(__dirname);*/

/*📝 Question 5:
Create a middleware using app.use() that logs the request method and URL for every incoming request, then continue to the next route.


const express = require('express');
const app = express();

// Middleware - logs every request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // move to the next middleware or route
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello! This is the home page.');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


const express = require('express');
const app = express();

// Middleware: log every request
app.use((req, res, next) => {
    console.log(`📌 ${req.method} request made to ${req.url}`);
    next(); // Pass control to the next route or middleware
});

// Routes
app.get('/', (req, res) => {
    res.send('🏠 Home Page');
});

app.get('/about', (req, res) => {
    res.send('ℹ️ About Page');
});

app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
});*/

/*Q5:
Create an Express.js app where:

app.use() is used to serve static files from a folder named public.

The public folder contains an index.html file.

When you open http://localhost:3000/, the index.html file should be shown in the browser.*/


const express = require('express');
const path = require('path');
const app = express();

// Send index.html directly
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
});
