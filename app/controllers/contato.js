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

    var ID_CONTATO_INC = 5;

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

    controller.removeContato = function(req, res) {
        var idContato = req.params.id;
        contatos = contatos.filter(function(contato) {
            return contato._id != idContato;
        });
        res.status(204).end();

        //console.log('API: removeContato:' + idContato);

    }

    controller.salvaContato = function(req, res) {
        var contato = req.body;

        contato = contato._id ?
            atualiza(contato) :
            adiciona(contato);

        res.json(contato);
    }

    function atualiza(contatoAlterar) {
        contatos = contatos.map(function(contato) {
            if (contato._id == contatoAlterar._id) {
                contato = contatoAlterar;
            }
            return contato;
        });
        return contatoAlterar;
    };

    function adiciona(contatoNovo) {
        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        return contatoNovo;
    };

    return controller;
}