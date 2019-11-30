angular
    .module('filtrosApp', [])
    .filter('cpf', formatarCPF)
    .filter('cnpj', formatarCNPJ);

function formatarCPF() {
    /**
     * @description Simula salvamento dos dados do formulário
     */
    return function (input) {
        var str = input + '';
        if (str.length <= 11) {
            str = str.replace(/\D/g, '');
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        return str;
    }
}

function formatarCNPJ() {
    /**
     * @description Monta mascara CNPJ
     */
    return function (input) {
        var str = input + '';
        if (str.length <= 15) {
            str = str.replace(/\D/g, '');
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d)/, "$1.$2");
            str = str.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        return str;
    }
}