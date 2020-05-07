myApp.controller('SecaoController', SecaoController);

SecaoController.$inject = ['ApiFactory'];

function SecaoController(ApiFactory) {
    const vm = this;
    vm.secoesList = [];


    if (ApiFactory.secoesList.length) {
        vm.secoesList = ApiFactory.secoesList;
    } else {
        ApiFactory.getAllSecoes()
            .then(resp => {
                vm.secoesList = resp;
            })
    }

}