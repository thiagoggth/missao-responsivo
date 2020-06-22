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
        getAllDivisoesPorSecao: function (secaoId) {
            return $http.get(`${this.url}secoes/${secaoId}/divisoes`)
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
        getAllGruposPorSecao: function (secaoId) {
            return $http.get(`${this.url}secoes/${secaoId}/grupos`)
                .then(response => {
                    this.gruposList = response.data
                    return this.gruposList;
                });
        },
        getAllGruposPorDivisao: function (divisaoId) {
            return $http.get(`${this.url}divisoes/${divisaoId}/grupos`)
                .then(response => {
                    this.gruposList = response.data
                    return this.gruposList;
                })
        },
        getAllClasses: function () {
            return $http.get(`${this.url}classes`)
                .then(response => {
                    this.classesList = response.data;
                    return this.classesList;
                });
        },
        getAllClassesPorSecao: function (secaoId) {
            return $http.get(`${this.url}secoes/${secaoId}/classes`)
                .then(response => {
                    this.classesList = response.data;
                    return this.classesList;
                });
        },
        getAllClassesPorDivisao: function (divisaoId) {
            return $http.get(`${this.url}divisoes/${divisaoId}/classes`)
                .then(response => {
                    this.classesList = response.data;
                    return this.classesList;
                });
        },
        getAllClassesPorGrupo: function (grupoId) {
            return $http.get(`${this.url}grupos/${grupoId}/classes`)
                .then(response => {
                    this.classesList = response.data;
                    return this.classesList;
                })
        },
        getAllSubclasses: function () {
            return $http.get(`${this.url}subclasses`)
                .then(response => {
                    this.subclassesList = response.data;
                    return this.subclassesList;
                });
        },

        getAllSubclassesPorSecao: function (secaoId) {
            return $http.get(`${this.url}secoes/${secaoId}/subclasses`)
                .then(response => {
                    this.subclassesList = response.data;
                    return this.subclassesList;
                });
        },

        getAllSubclassesPorDivisao: function (divisaoId) {
            return $http.get(`${this.url}divisoes/${divisaoId}/subclasses`)
                .then(response => {
                    this.subclassesList = response.data;
                    return this.subclassesList;
                });
        },
        getAllSubclassesPorGrupo: function (grupoId) {
            return $http.get(`${this.url}grupos/${grupoId}/subclasses`)
                .then(response => {
                    this.subclassesList = response.data;
                    return this.subclassesList;
                });
        },
        getAllSubclassesPorClasse: function (classeId) { 
            return $http.get(`${this.url}classes/${classeId}/subclasses`)
                .then(response=>{
                    this.subclassesList = response.data;
                    return this.subclassesList;
                });
        },
    }
}