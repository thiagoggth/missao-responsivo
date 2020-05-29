myApp.controller('SubclasseController', SubclasseController);

SubclasseController.$inject = ['ApiFactory'];
function SubclasseController(api) {
    const vm = this;

    vm.subclassesList = [];

    if (api.subclassesList[0] === undefined) {
        api.getAllSubclasses()
            .then(response => {
                vm.subclassesList = response;
            });
    } else {
        vm.subclassesList = api.subclassesList;
    }
}