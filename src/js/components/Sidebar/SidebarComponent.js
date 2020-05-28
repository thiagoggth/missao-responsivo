myApp.component('sidebarComponent', {
    templateUrl: './js/components/Sidebar/SidebarComponent.html',
    controller: SidebarComponentController,
    controllerAs: 'vm'
});

function SidebarComponentController() {
    const vm = this;
    vm.title = 'controller test';
}