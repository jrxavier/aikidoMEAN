var http = require('http');
var app = require('./config/express')();

//Conexão com o banco de dados
require('./config/database.js')('mongodb://localhost/aikido');


http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});