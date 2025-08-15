/*
what are the path parameters?


Path parameters (also called route parameters) are dynamic values in a URL that are defined with a colon (:) inside the route path.
They allow you to capture parts of the URL and use them in your backend logic.

They replace hard-coded values in a route.

*/


/*Create a route /user/:id that returns the user id provided in the URL.
Example: /user/10 → “User ID is 10”


const express=require('express');
const app=express();

app.get('/user/:id', (req, res) => {
  const { id } = req.params;          // extract id from path
  res.send(`User ID is ${id}`);
});
app.listen(3000,()=>{
    console.log('your app is runnign' )
})*/


/*2️⃣ Question:
Create a route /product/:category/:productId that returns both parameters.
Why: We can use multiple path parameters in the same route.

const express=require('express');
const app=express();
app.get('/product/:category/:productId',(req,res)=>{
    const{category,productId}=req.params;
    res.send(`category:${category},productId:${productId}`)


})
app.listen(3000,()=>{
    console.log('hello');
})*/


/*3️⃣ Question:
Make /greet/:name/:age that returns a personalised greeting.
Why: Great example to practice string interpolation with params.


const express=require('express');
const app=express();
app.get('/greet/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send(`Hello ${name}, you are ${age} years old`);
});
*/





