const express=require('express');
const app=express();
const path=require('path');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))


app.get('/ig/:username',(req,res)=>{
    const username = req.params.username;
    const information = require('./data.json');
    let data = information[username];  // ✅ correct
    res.render('instagram',{ data });
});

app.listen(2000,()=>{
    console.log('app is listening')
})