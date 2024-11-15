angular.module('MyApp')
    .component('stirrer', {
        templateUrl: 'js/component/product/stirrer.component.html',
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
            vm.stirrerData = [{
                    title: '數位無刷攪拌機',
                    url: '/#!product/stirrer_1',
                    imgSrc: 'img/product/BMD_數位無刷攪拌機縮圖.jpg'
                }, {
                    title: '直流攪拌機',
                    url: '/#!product/stirrer_2',
                    imgSrc: 'img/product/BMD_DC整台縮圖.jpg'
                }, {
                    title: '電動攪拌機',
                    url: '/#!product/stirrer_3',
                    imgSrc: 'img/product/BMD_G-TYPE縮圖.jpg'
                }, {
                    title: '數位高黏度攪拌機',
                    url: '/#!product/stirrer_4',
                    imgSrc: 'img/product/BMD數位高黏度攪拌機縮圖.jpg'
                }, {
                    title: '高速攪拌機',
                    url: '/#!product/stirrer_5',
                    imgSrc: 'img/product/BMD高速攪拌機縮圖.jpg'
                }, {
                    title: '落地式迷你型攪拌機',
                    url: '/#!product/stirrer_6',
                    imgSrc: 'img/product/BMD落地式迷你型攪拌機縮圖.jpg'
                },

            ]
        }
    })
    .component('stirrer1', { // 數位無刷攪拌機
        template: '<div><img src="img/product/BMD-數位式直流無刷攪拌機DIG系列.jpg" /></div>'
    })
    .component('stirrer2', { // 直流攪拌機
        template: '<div><img src="img/product/BMD-DC直流攪拌機.jpg"></div>'
    })
    .component('stirrer3', { // 電動攪拌機
        template: '<div><img src="img/product/BMD-G系列攪拌機.jpg"></div>'
    })
    .component('stirrer4', { // 數位高黏度攪拌機
        template: '<div><img src="img/product/BMD-High Torque Stirrer 高黏度攪拌機.jpg"></div>'
    })
    .component('stirrer5', { // 高速攪拌機
        template: '<div><img src="img/product/高速攪拌機G-750 R.jpg"></div>'
    })
    .component('stirrer6', { // 落地式迷你型攪拌機
        template: '<div><img src="img/product/落地式攪拌機.jpg"></div>'
    })