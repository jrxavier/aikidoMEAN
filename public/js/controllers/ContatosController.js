angular.module('contatooh').controller('ContatosController', function(Contato, $scope) {

    $scope.filtro = '';

    $scope.contatos = [];

    $scope.mensagem = {
        texto: ''
    };

    $scope.init = function() {
        buscaContatos();
    };

    /**
     * O servico $resource nos devolve um objeto que permite realizar uma série de operações
     * seguindo o padrão REST para o recurso /contatos. O nome da variável está em maiusculo
     * algo internacional para diferencia-lo de uma possível variável que represente o model para contato
     */
    //var Contato = $resource('/contatos/:id');

    function buscaContatos() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista de Contatos'
                };
                console.log(erro);
            }
        );
    }

    $scope.remove = function(contato) {

        Contato.delete({ id: contato._id },
            buscaContatos,
            function(error) {
                $scope.mensagem = {
                    texto: 'Não foi possível remover contato'
                };
                console.log(erro);
            }
        );
    };

    //Método de inicilização do controller. Chama todos os métodos preparatórios dentro dele.
    $scope.init();

    //Exemplo do $http
    // $http.get('/contatos')
    //     .success(function(data) {
    //         $scope.contatos = data;
    //     })
    //     .error(function(statusText) {
    //         console.log("Não foi possível obter a lista de contatos");
    //         console.log(statusText);
    //     })

});