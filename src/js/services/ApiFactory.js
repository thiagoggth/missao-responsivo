myApp.factory('ApiFactory', ApiFactory);

ApiFactory.$inject = ['$http'];

function ApiFactory($http) {
    return {
        get url() {
            return 'https://servicodados.ibge.gov.br/api/v2/cnae/'
        },
        secoesList: [],
        getAllSecoes: function () {
            return $http.get(`${this.url}secoes`)
                .then(response => response.data)
        }
    }
}