angular.module('MyApp').component('indexComp', {
    templateUrl: 'js/component/index.component.html',
    controller: function() {

        var vm = this;
        vm.$onInit = function() {
            angular.element('.main .index .scroll-effect-cover').css('width', '0%');
        }
    }
})