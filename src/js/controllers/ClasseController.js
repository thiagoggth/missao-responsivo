myApp.controller('ClasseController', ClasseController);

ClasseController.$inject = ['ApiFactory']
function ClasseController(api) {
    const vm = this;

    vm.classesList = [];

    if (api.classesList[0] === undefined) {
        api.getAllClasses()
            .then(response => {
                vm.classesList = response;
            })

    } else {
        vm.classesList = api.classesList;
    }


}