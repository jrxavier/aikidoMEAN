var contatos = [{
        _id: 1,
        nome: 'Jose Ricardo 1',
        email: 'jrxavier@gmail.com'
    },
    {
        _id: 2,
        nome: 'Jose Ricardo 2',
        email: 'jrxavier@gmail.com'
    },
    {
        _id: 3,
        nome: 'Jose Ricardo 3',
        email: 'jrxavier@gmail.com'
    },
    {
        _id: 4,
        nome: 'Jose Ricardo 4',
        email: 'jrxavier@gmail.com'
    }

]

module.exports = function() {
    var controller = {};

    controller.listaContatos = function(req, res) {
        res.json(contatos);
    };

    controller.obtemContato = function(req, res) {
        var idContato = req.params.id;

        var contato = contatos.filter(function(contato) {
            return contato._id == idContato;
        })[0];

        contato ?
            res.json(contato) :
            res.status(404).send('Contato não encontrado');
    };

    return controller;
}