const express = require('express');
const app = express();

// app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render(__dirname+'/public/index.html');
});``

app.listen(2019, () => {
});