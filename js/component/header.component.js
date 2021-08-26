angular.module('MyApp').component('headerComp', {
    templateUrl: 'js/component/header.component.html',
    controllerAs: 'vm',
    controller: function() {
        var vm = this;
        var myCollapseDiv = $('.myCollapse');
        vm.openDropdown = false;

        vm.toggleDropdown = function() {
            vm.openDropdown = !vm.openDropdown;
            myCollapseDiv.css('right', vm.openDropdown ? '0' : '-100%');
        }
    }
})