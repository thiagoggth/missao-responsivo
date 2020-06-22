myApp.controller('GruposController', GruposController);

GruposController.$inject = ['ApiFactory'];
function GruposController(api) {
    const vm = this;

    vm.gruposList = [];
    vm.itemsSecoes = [];
    vm.itemsDivisoes = [];
    vm.secaoId;

    vm.filtrarPorSecao = function (secaoId) {
        vm.secaoId = secaoId;
        if (secaoId) {
            api.getAllDivisoesPorSecao(secaoId)
                .then(response => {
                    vm.itemsDivisoes = response;
                });
            api.getAllGruposPorSecao(secaoId)
                .then(response => {
                    vm.gruposList = response;
                });
        }
        else {
            api.getAllDivisoes()
                .then(reponse => {
                    vm.itemsDivisoes = reponse;
                });
            api.getAllGrupos()
                .then(reponse => {
                    vm.gruposList = reponse;
                });
        }
    }

    vm.filtrarPorDivisao = function (divisaoId) {
        if (divisaoId) {
            api.getAllGruposPorDivisao(divisaoId)
                .then(response => {
                    vm.gruposList = response;
                });
        }
        else {
            if (vm.secaoId) {
                vm.filtrarPorSecao(vm.secaoId);
            } else {
                api.getAllGrupos()
                    .then(reponse => {
                        vm.gruposList = reponse;
                    });
            }

        }
    }

    if (api.secoesList[0] === undefined) {
        api.getAllSecoes()
            .then(response => {
                vm.itemsSecoes = response;
            });
    } else {
        vm.itemsSecoes = api.secoesList;
    }

    if (api.divisoesList[0] === undefined) {
        api.getAllDivisoes()
            .then(response => {
                vm.itemsDivisoes = response;
            });
    } else {
        vm.itemsDivisoes = api.divisoesList;
    }

    if (api.gruposList[0] === undefined) {
        api.getAllGrupos()
            .then(response => {
                vm.gruposList = response;
            });
    } else {
        vm.gruposList = api.gruposList;
    }
}