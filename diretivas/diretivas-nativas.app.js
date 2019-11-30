angular
    .module('app', [])
    .controller('DiretivasNativasController', diretivasNativasController);

function diretivasNativasController($scope) {

    $scope.valoresDiv = {
        ehVermelho: false,
        descricaoInterna: "Nenhuma cor aplicada"
    };

    $scope.aplicarVermelho = aplicarVermelho;

    function aplicarVermelho() {
        $scope.valoresDiv = {
            ehVermelho: true,
            descricaoInterna: 'Vermelho Aplicado'
        }
    }

    $scope.retirarVermelho = retirarVermelho;

    function retirarVermelho() {
        $scope.valoresDiv.ehVermelho = false;
        $scope.valoresDiv.descricaoInterna = "Nenhuma cor aplicada";
    }


}