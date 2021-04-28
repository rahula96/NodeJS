const express = require('express');
const app = express();

const server = app.listen(3100, () => {
    console.log('Start Server : locallhost:3000');
});

// app.set('views', __dirname + '/views');
app.set('views', __dirname + '/JavaScript');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
    // res.send('Hello World')
    res.render('index.html')
});

app.get('/about', function(req, res) {
    res.render('about.html')
})
