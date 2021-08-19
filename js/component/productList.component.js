angular.module('MyApp').component('productList',{
templateUrl:'js/component/productList.component.html',
controllerAs:'vm',
controller:function(ProductService){
var vm = this;
vm.productData = ProductService.productData;
}

});