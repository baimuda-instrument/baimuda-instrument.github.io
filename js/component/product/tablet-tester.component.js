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
            }, {
                title: '凝集試驗器',
                url: '/#!product/JT',
                imgSrc: 'img/product/BMD_JT-6S目錄.jpg'
            }]
        }
    })
    .component('tabletHardnessTester', { // 藥錠硬度計可能好幾款，之後可能再改
        template: '<div><img src="img/product/錠劑硬度計.jpg" /></div>'
    })
    .component('jt', { // 凝集試驗器 JT-6S ??
        template: `<div><img src="img/product/BMD-凝集試驗器.jpg" /></div>
        <div class="download-container"><a class="download-btn" href="img/product/BMD-凝集試驗器.jpg" download>下載目錄</a></div>
        `
    })