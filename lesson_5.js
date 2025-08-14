


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
Make a /notfound route that returns the message "Page not found" with HTTP status code 404 using res.status() and res.send().*/



const express = require('express');
const app = express();

app.get('/notfound', (req, res) => {
    res.send('Page not found');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');})