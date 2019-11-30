angular
    .module('diretivaApp', [])
    .directive('primeiraDiretiva', primeiraDiretiva)
    .directive('segundaDiretiva', segundaDiretiva);

function primeiraDiretiva() {
    return {
        restrict: 'AECM',
        template: '<p>Fiz minha primeira diretiva!!</p>',
        replace: true // restrict M só funciona com o replace true
    };
}

function segundaDiretiva() {
    return {
        restrict: 'AECM',
        template: ' style="color:red;" ',
        replace: true // restrict M só funciona com o replace true
    };
}