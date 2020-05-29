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
        classesList: [],
        subclassesList: [],
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
        },
        getAllClasses: function () {
            return $http.get(`${this.url}classes`)
                .then(response => {
                    this.classesList = response.data;
                    return this.classesList
                });
        },
        getAllSubclasses: function () {
            return $http.get(`${this.url}subclasses`)
                .then(response => {
                    this.subclassesList = response.data;
                    return this.subclassesList;
                });
        }


    }
}