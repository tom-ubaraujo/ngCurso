angular
    .module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', definirRotas])
    .run([]);