myApp.component('tableComponent', {
    templateUrl: './js/components/Table/TableComponent.html',
    controller: TableComponentController,
    controllerAs: 'vm',
    bindings: {
        list: '=',
        header: '=',
        fields: '=',
    }
});

function TableComponentController() {
    const vm = this;
}