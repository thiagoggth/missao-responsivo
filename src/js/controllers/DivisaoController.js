myApp.controller('DivisaoController', DivisaoController);

DivisaoController.$inject = ['ApiFactory'];
function DivisaoController(api) {

    const vm = this;
    vm.divisoesList = [];
    vm.items = [];
    
    vm.filtrarPorSecao = function (secaoId) {
        if (secaoId) {
            api.getAllDivisoesPorSecao(secaoId)
                .then(response => {
                    vm.divisoesList = response;
                });
        }
        else {
            api.getAllDivisoes()
                .then(reponse => {
                    vm.divisoesList = reponse;
                });
        }
    }

    if (api.secoesList[0] === undefined) {
        api.getAllSecoes()
            .then(response => {
                vm.items = response;
            });
    } else {
        vm.items = api.secoesList;
    }

    if (api.divisoesList[0] === undefined) {
        api.getAllDivisoes()
            .then(reponse => {
                vm.divisoesList = reponse;
            });
    } else {
        vm.divisoesList = api.divisoesList;
    }
}