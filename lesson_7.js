/*
Query strings are key-value pairs that are added to the end of a URL after a question mark (?).
They are usually used to send extra data with a request — like filters, search terms, page numbers, etc.

http://localhost:3000/products?category=electronics&page=2


| Part                   | Meaning                                 |
| ---------------------- | --------------------------------------- |
| `?`                    | Starts the query string                 |
| `category=electronics` | key = `category`, value = `electronics` |
| `&`                    | Separates multiple key/value pairs      |
| `page=2`               | key = `page`, value = `2`               |


app.get('/products', (req, res) => {
  const category = req.query.category;
  const page = req.query.page;
  res.send(`Category: ${category}, Page: ${page}`);
});



/products?category=clothes&page=3


| Feature   | Path Parameter                  | Query String                  |
| --------- | ------------------------------- | ----------------------------- |
| Syntax    | `/user/:id`                     | `?key=value`                  |
| Location  | In the URL path                 | After the `?`                 |
| Required? | Usually required                | Optional                      |
| Used for  | Identifying a specific resource | Filtering, search, pagination |


*/


//------------------------------------practice questions------------------------------------------



/*Route: /search?q=phone
URL Example: http://localhost:3000/search?q=phone
Code:Create /search?q=value.
Why: Query strings are used to send extra data with GET requests.

const express=require('express');
const app=express();

app.get('/search', (req, res) => {
  const { q } = req.query;
  res.send(`You searched for: ${q}`);
});

app.listen(3000,()=>{
    console.log('data is availabel')
})
*/

/* 
Why: Allows multiple query params.

✅ Solution:
*/

const express=require('express');
const app=express();
app.get('/filter', (req, res) => {
  const { type, price } = req.query;
  res.json({ type, price });
});

app.listen(3000,()=>{
    console.log('data is availabel')
})


/*9️⃣ Question:
Create /welcome?name=... and show “Guest” if not provided.
Why: Demonstrates default values.

✅ Solution:

app.get('/welcome', (req, res) => {
  const { name } = req.query;
  const userName = name ? name : 'Guest';
  res.send(`Welcome, ${userName}!`);
});*/