const express = require('express');
const path = require('path');

const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');

const sql = require('./sqlmanager');

var app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', (req, res) => 

    res.sendFile(path.join(__dirname, 'views', 'index.html'))
);
 
app.get('/user', async (req, res) => {

    let result = await sql.getUser()

    res.json(result);
});

app.listen(5000,() => debug('Listeningsssdd on port ' + chalk.red('5000')));