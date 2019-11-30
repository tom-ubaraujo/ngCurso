angular
    .module('app', ['filtrosApp'])
    .controller('FiltroController', filtroController);

function filtroController($scope) {

    $scope.cpfDigitado = '11111111111';
    $scope.cnpjDigitado = '111111111111111'
}