var express = require('express');

module.exports = function() {
    var app = express();
    var home = require('../app/routes/home'); // Configuracao de rota
    var load = require('express-load');
    var bodyParser = require('body-parser');


    //Variaveis de Ambiente - definicao através do método app.set()
    app.set('port', 3000);

    app.set('view engine', 'ejs');
    app.set('views', './app/views'); //No Express, template engines são configurados em variáveis de Ambiente

    //Middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(require('method-override')());


    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;

}