myApp.controller('ClasseController', ClasseController);

ClasseController.$inject = ['ApiFactory']
function ClasseController(api) {
    const vm = this;

    vm.classesList = [];
    vm.itemsSecoes = [];
    vm.itemsDivisoes = [];
    vm.itemsGrupos = [];
    vm.secaoId;
    vm.divisaoId;

    vm.filtrarPorSecao = function (secaoId) {
        vm.secaoId = secaoId;
        if (secaoId) {
            api.getAllDivisoesPorSecao(secaoId)
                .then(response => {
                    vm.itemsDivisoes = response;
                });

            api.getAllGruposPorSecao(secaoId)
                .then(response => {
                    vm.itemsGrupos = response;
                });

            api.getAllClassesPorSecao(secaoId)
                .then(response => {
                    vm.classesList = response;
                });
        }
        else {
            api.getAllDivisoes()
                .then(reponse => {
                    vm.itemsDivisoes = reponse;
                });
            api.getAllGrupos()
                .then(reponse => {
                    vm.itemsGrupos = reponse;
                });
            api.getAllClasses()
                .then(response => {
                    vm.classesList = response;
                })
        }
    }

    vm.filtrarPorDivisao = function (divisaoId) {
        vm.divisaoId = divisaoId;
        if (divisaoId) {
            api.getAllGruposPorDivisao(divisaoId)
                .then(response => {
                    vm.itemsGrupos = response;
                });
            api.getAllClassesPorDivisao(divisaoId)
                .then(response => {
                    vm.classesList = response;
                })
        }
        else {
            if (vm.secaoId) {
                vm.filtrarPorSecao(vm.secaoId);
            } else {
                api.getAllGrupos()
                    .then(reponse => {
                        vm.itemsGrupos = reponse;
                    });
                api.getAllClasses()
                    .then(reponse => {
                        vm.classesList = reponse;
                    });
            }
        }
    }

    vm.filtrarPorGrupo = function (grupoId) {
        if (grupoId) {
            api.getAllClassesPorGrupo(grupoId)
                .then(response => {
                    vm.classesList = response;
                })
        }
        else {
            if (vm.secaoId || vm.divisaoId) {
                if (vm.secaoId && vm.divisaoId) {
                    vm.filtrarPorDivisao(vm.divisaoId);
                } else if (vm.secaoId) {
                    vm.filtrarPorSecao(vm.secaoId);
                } else {
                    vm.filtrarPorDivisao(vm.divisaoId);
                }

            } else {
                api.getAllClasses()
                    .then(reponse => {
                        vm.classesList = reponse;
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
                vm.itemsGrupos = response;
            });
    } else {
        vm.itemsDivisoes = api.divisoesList;
    }

    if (api.classesList[0] === undefined) {
        api.getAllClasses()
            .then(response => {
                vm.classesList = response;
            })

    } else {
        vm.classesList = api.classesList;
    }
}