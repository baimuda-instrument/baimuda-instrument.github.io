angular.module('MyApp').component('productList', {
    templateUrl: 'js/component/productList.component.html',
    controllerAs: 'vm',
    controller: function(ProductService, DetectMobileService, $scope) {
        var vm = this;
        vm.collapseList = false;

        vm.$onInit = function(){
            vm.productData = ProductService.productData;
            vm.isMobile = DetectMobileService.isMobile();
        }

        $(window).resize(function(){
            vm.isMobile = DetectMobileService.isMobile();
            $scope.$digest();
        })

        vm.toggle = function() {
            vm.collapseList = !vm.collapseList
        }
        
    }

});