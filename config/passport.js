var passport = require('passport');
var mongoose = require('mongoose');
var GitHubStrategy = require('passport-github').Strategy;


module.exports = function() {

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: '7e304448f989f24e3839',
        clientSecret: '1d35e66cc97b42e26fcff6339c926880ee2b9e3e',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {

        Usuario.findOrCreate({ "login": profile.username }, { "nome": profile.username },
            function(erro, usuario) {
                if (erro) {
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario)
            }
        );
    }));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
            .then(function(usuario) {
                done(null, usuario);
            });
    });
}