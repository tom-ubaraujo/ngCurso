angular
    .module('app', [])
    .controller('FormController', formController);

function formController($scope, $window) {
    /**
     * @description Simula salvamento dos dados do formulário
     */

    $scope.nomeFormulario;
    $scope.salvar = function () {

        $scope.nomeFormulario = '';
        $window.alert('Operação realizada com suceso!');

    };
}