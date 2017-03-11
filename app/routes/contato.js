module.exports = function(app) {

    var controller = app.controllers.contato;

    //Instancia do Express (app) possui uma funcao route - Nào teremos mais identificadores duplicados, mas
    // saberemos que cada um deles responderá a mais de um verbo HTTP
    app.route('/contatos')
        .get(controller.listaContatos)
        .post(controller.salvaContato);

    app.route('/contatos/:id')
        .get(controller.obtemContato)
        .delete(controller.removeContato);

};