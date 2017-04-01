var express = require('express');

module.exports = function() {
    var app = express();
    //var home = require('../app/routes/home'); // Configuracao de rota
    var load = require('express-load');
    var bodyParser = require('body-parser');


    //Parte de segurança da aplicação
    var cookieParser = require('cookie-parser');
    var session = require('express-session');
    var passport = require('passport');

    //Variaveis de Ambiente - definicao através do método app.set()
    var port = process.env.PORT || 3000;
    app.set('port', port);
    app.set('view engine', 'ejs');
    app.set('views', './app/views'); //No Express, template engines são configurados em variáveis de Ambiente

    //Middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    //Ordem de definicao dos middleware de seguranca é necessária
    app.use(cookieParser());
    app.use(session({
        secret: 'aikido alberto',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;

}