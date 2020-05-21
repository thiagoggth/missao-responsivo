myApp.factory('ApiFactory', ApiFactory);

ApiFactory.$inject = ['$http'];

function ApiFactory($http) {
    return {
        get url() {
            return 'https://servicodados.ibge.gov.br/api/v2/cnae/'
        },
        secoesList: [],
        divisoesList: [],
        gruposList: [],
        getAllSecoes: function () {
            return $http.get(`${this.url}secoes`)
                .then(response => {
                    this.secoesList = response.data
                    return this.secoesList;
                });
        },
        getAllDivisoes: function () {
            return $http.get(`${this.url}divisoes`)
                .then(response => {
                    this.divisoesList = response.data
                    return this.divisoesList;
                });
        },
        getAllGrupos: function () {
            return $http.get(`${this.url}grupos`)
                .then(response => {
                    this.gruposList = response.data;
                    return this.gruposList;
                });
        }
    }
}