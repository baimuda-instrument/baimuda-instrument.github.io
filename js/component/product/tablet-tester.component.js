angular.module('MyApp')
    .component('tabletTester', {
        templateUrl: 'js/component/product/tablet-tester.component.html',
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
            vm.tabletTesterData = [{
                    title: '錠劑硬度計',
                    url: '/#!product/tablet-hardness-tester',
                    imgSrc: 'img/product/硬度計縮圖.jpg'
                },
                {
                    title: '崩散試驗機',
                    url: '/#!product/disintegration-tester',
                    imgSrc: 'img/product/BMD-CT-2縮圖.jpg'
                }
            ]
        }
    })
    .component('tabletHardnessTester', { // 藥錠硬度計可能好幾款，之後可能再改
        template: '<div><img src="img/product/錠劑硬度計.jpg" /></div>'
    })
    .component('disintegrationTester', { // 崩散試驗機內頁
        template: '<div><img src="img/product/BMD-崩解試驗器.jpg" /></div>'
    })