myApp.controller('GruposController', GruposController);

GruposController.$inject = ['ApiFactory'];
function GruposController(api) {
    const vm = this;

    vm.gruposList = [];

    if (api.gruposList[0] === undefined) {
        api.getAllGrupos()
            .then(response => {
                vm.gruposList = response;
            });
    } else {
        vm.gruposList = api.gruposList;
    }
}