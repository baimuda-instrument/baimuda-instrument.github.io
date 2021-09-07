angular.module('MyApp')
    .component('tabletTester', {
        templateUrl: 'js/component/product/tablet-tester.component.html',
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
            vm.tabletTesterData = [{
                    title: '硬度計',
                    url: '/#!product/tablet-hardness-tester',
                    imgSrc: 'img/product/硬度計縮圖.jpg'
                },
                // {
                //     title: '凝集試驗器',
                //     url: '/#!product/JT',
                //     imgSrc: 'img/product/BMD_JT-6S縮圖.jpg'
                // }
            ]
        }
    })
    .component('tabletHardnessTester', { // 藥錠硬度計可能好幾款，之後可能再改
        template: '<div><img src="img/product/錠劑硬度計.jpg" /></div>'
    })