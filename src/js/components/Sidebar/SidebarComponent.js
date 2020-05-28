myApp.component('sidebarComponent', {
    templateUrl: './js/components/Sidebar/SidebarComponent.html',
    controller: SidebarComponentController,
    controllerAs: 'vm'
});

SidebarComponentController.$inject = ['$location']
function SidebarComponentController($location) {
    const vm = this;

    vm.isSelected = function (menuOption) {
        
        if (menuOption === $location.path()) {
            return 'active';
        }

        return '';
    }
}