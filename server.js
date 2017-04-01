var http = require('http');
var express = require('express');
var app = require('./config/express')();

require('./config/passport')();

//Conexão com o banco de dados
//require('./config/database.js')('mongodb://localhost/aikido');
require('./config/database.js')('mongodb://jrxavier:mestrado@ds147480.mlab.com:47480/aikido');

//mongodb://<dbuser>:<dbpassword>@ds147480.mlab.com:47480/aikido

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});