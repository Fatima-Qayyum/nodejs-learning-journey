app.get('/about', (req, res) => {

    const data=['ali','usman ','bisma','laiba'];
    res.render('about',{data});
})
