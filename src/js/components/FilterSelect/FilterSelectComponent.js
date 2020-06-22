myApp.component('filterSelectComponent', {
    templateUrl: './js/components/FilterSelect/FilterSelectComponent.html',
    controller: FilterSelectComponentController,
    controllerAs: 'vm',
    bindings: {
        firstItem: '=',
        items: '=',
        function: '=',
    }
});

function FilterSelectComponentController() {
    const vm = this;
}