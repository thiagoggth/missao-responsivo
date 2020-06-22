myApp.controller('SubclasseController', SubclasseController);

SubclasseController.$inject = ['ApiFactory'];
function SubclasseController(api) {
    const vm = this;

    vm.subclassesList = [];
    vm.itemsSecoes = [];
    vm.itemsDivisoes = [];
    vm.itemsGrupos = [];
    vm.itemsClasses = [];
    vm.secaoId;
    vm.divisaoId;
    vm.grupoId;

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
                    vm.itemsClasses = response;
                });

            api.getAllSubclassesPorSecao(secaoId)
                .then(response => {
                    vm.subclassesList = response;
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
                .then(reponse => {
                    vm.itemsClasses = reponse;
                });

            api.getAllSubclasses()
                .then(response => {
                    vm.subclassesList = response;
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
                    vm.itemsClasses = response;
                });
            api.getAllSubclassesPorDivisao(divisaoId)
                .then(response => {
                    vm.subclassesList = response;
                });
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
                        vm.itemsClasses = reponse;
                    });
                api.getAllSubclasses()
                    .then(response => {
                        vm.subclassesList = response;
                    });
            }
        }
    }

    vm.filtrarPorGrupo = function (grupoId) {
        vm.grupoId = grupoId;

        if (grupoId) {
            api.getAllClassesPorGrupo(grupoId)
                .then(response => {
                    vm.itemsClasses = response;
                });
            api.getAllSubclassesPorGrupo(grupoId)
                .then(response => {
                    vm.subclassesList = response;
                });
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
                api.getAllSubclasses()
                    .then(reponse => {
                        vm.subclassesList = reponse;
                    });
            }
        }
    }

    vm.filtrarPorClasse = function (classeId) {
        if (classeId) {
            api.getAllSubclassesPorClasse(classeId)
                .then(response => {
                    vm.subclassesList = response;
                });
        } else {
            if (vm.secaoId || vm.divisaoId || vm.grupoId) {
                if (vm.secaoId && vm.divisaoId && vm.grupoId) {
                    vm.filtrarPorGrupo(vm.grupoId);
                } else if (vm.secaoId && vm.divisaoId) {
                    vm.filtrarPorDivisao(vm.divisaoId);
                } else if (vm.secaoId) {
                    vm.filtrarPorSecao(vm.secaoId);
                } else {
                    if (vm.divisaoId) {
                        vm.filtrarPorDivisao(vm.divisaoId);
                    } else {
                        vm.filtrarPorGrupo(vm.grupoId);
                    }
                }
            } else {
                api.getAllSubclasses()
                    .then(reponse => {
                        vm.subclassesList = reponse;
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
                vm.itemsClasses = response;
            })

    } else {
        vm.itemsClasses = api.classesList;
    }

    if (api.subclassesList[0] === undefined) {
        api.getAllSubclasses()
            .then(response => {
                vm.subclassesList = response;
            });
    } else {
        vm.subclassesList = api.subclassesList;
    }
}