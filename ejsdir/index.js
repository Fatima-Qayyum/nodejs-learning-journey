const express=require('express');
const app= express();
const path=require('path')
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))
app.listen(3000,()=>{
    console.log('app is listening');
})


// Route
app.get('/home', (req, res) => {
    const username = "Fatima Bibi";
    let age= 19;
    
    res.render('home', { username,age });  // passing value to ejs file
});




/*In EJS (Embedded JavaScript Templates), interpolation means inserting dynamic JavaScript values inside the HTML template.

Here are the two most basic interpolation syntaxes you need to know:*/