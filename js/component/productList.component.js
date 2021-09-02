angular.module('MyApp').component('productList', {
    templateUrl: 'js/component/productList.component.html',
    controllerAs: 'vm',
    controller: function(ProductService, DetectMobileService) {
        var vm = this;
        vm.productData = ProductService.productData;
        vm.isMobile = DetectMobileService.isMobile;

        vm.collapseList = false;

        vm.toggle = function() {
            vm.collapseList = !vm.collapseList;
        }
    }

});