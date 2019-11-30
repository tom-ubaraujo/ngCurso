angular
    .module('app', [])
    .controller('ControladorController', controladorController);

function controladorController($scope) {
    $scope.nome = 'Tomzeras';
    $scope.qtdCliques = 0;

    /**
     * @description Adiciona 1 à variável qtdCliques
     */

    $scope.contarCliques = function () {
        //$scope.qtdCliques = $scope.qtdCliques + 1;
        $scope.qtdCliques++;
    }

    $scope.limpaCliques = function () {
        $scope.qtdCliques = 0;
    }
}