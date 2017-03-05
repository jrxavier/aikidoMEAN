angular.module('contatooh').controller('ContatosController', function($scope) {

    $scope.total = 0;
    $scope.filtro = '';

    $scope.contatos = [{
            _id: 1,
            "nome": 'Flavio Henrique',
            "email": 'souza@gmail.com'
        },
        {
            _id: 2,
            "nome": 'Jose Ricardo',
            "email": 'jrxavier@gmail.com'

        }
    ];

    $scope.exibir = true;
    $scope.salario = 100.12;
    $scope.admissao = new Date();

    $scope.incrementa = function() {
        $scope.total++;
    };

});