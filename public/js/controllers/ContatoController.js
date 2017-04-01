angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato) {

    //var Contato = $resource('/contatos/:id');

    Contato.query(
        function(contatos) {
            $scope.contatos = contatos;
        });

    if ($routeParams.contatoId) {
        Contato.get({ id: $routeParams.contatoId },
            function(contato) {
                $scope.contato = contato;
            },
            function(error) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o contato'
                };
                console.log(error);
            }
        );
    } else {
        $scope.contato = new Contato();
    }

    $scope.salva = function() {
        $scope.contato.$save()
            .then(function() {
                $scope.mensagem = {
                    texto: 'O registro de ' + $scope.contato.nome + ' foi salvo com sucesso'
                };
                //Objeto contato é apagado da tela após salvar
                // $scope.contato = new Contato();
            })
            .catch(function(error) {
                $scope.mensagem = {
                    texto: 'Não foi possível salvar'
                };
            });

    };

});