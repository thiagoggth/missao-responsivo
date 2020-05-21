myApp.controller('DivisaoController', DivisaoController);

DivisaoController.$inject = ['ApiFactory'];
function DivisaoController(api) {

    const vm = this;
    vm.divisoesList = [];

    if (api.divisoesList[0] === undefined) {
        api.getAllDivisoes()
            .then(reponse => {
                vm.divisoesList = reponse;
            });
    } else {
        vm.divisoesList = api.divisoesList;
    }
}