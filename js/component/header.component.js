angular.module('MyApp').component('headerComp', {
    templateUrl: 'js/component/header.component.html',
    controllerAs: 'vm',
    controller: function() {
        var vm = this;
        vm.openDropdown = false;

        vm.toggleDropdown = function() {
            vm.openDropdown = !vm.openDropdown;
        }
    }
})