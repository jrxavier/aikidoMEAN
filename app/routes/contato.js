function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app) {

    var controller = app.controllers.contato;

    //Instancia do Express (app) possui uma funcao route - Nào teremos mais identificadores duplicados, mas
    // saberemos que cada um deles responderá a mais de um verbo HTTP
    app.route('/contatos')
        .get(verificaAutenticacao, controller.listaContatos)
        .post(verificaAutenticacao, controller.salvaContato);

    app.route('/contatos/:id')
        .get(verificaAutenticacao, controller.obtemContato)
        .delete(verificaAutenticacao, controller.removeContato);




};