


/* Create an Express app with a route / that responds with "Welcome to my site" using res.send().*/
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my site');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});