angular
    .module('app', [])
    .controller('LoopController', loopController);

function loopController($scope) {
    /**
     * @description grava nome de frutas
     */

    $scope.frutas = ['banana', 'maçã', 'laranja'];
    $scope.nomeFruta;

    $scope.salvarFruta = function () {
        $scope.frutas.push($scope.nomeFruta);
        $scope.nomeFruta = '';
    };
}