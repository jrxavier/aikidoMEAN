var express = require('express');
var helmet = require('helmet');

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
    app.use(helmet());

    //Configuracoes de seguranca para a aplicacao
    app.use(helmet.hidePoweredBy({ setTo: 'Ruby on Rails 3' }));
    app.use(helmet.frameguard());
    app.use(helmet.xssFilter());
    app.use(helmet.noSniff());
    app.disable('x-powered-by');

    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    app.get('*', function(req, res) {
        res.status(404).render('404');
    });

    return app;

}