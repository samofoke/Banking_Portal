const fs = require('fs');
const path = require('path');


const express = require('express');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index', {title: 'index'}));

app.listen(4002, ()=> console.log('Server running on port:4002'));