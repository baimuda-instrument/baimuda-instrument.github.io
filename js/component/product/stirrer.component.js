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
                    imgSrc: 'img/product/BMD直流攪拌機縮圖.jpg'
                }, {
                    title: '電動攪拌機',
                    url: '/#!product/stirrer_3',
                    imgSrc: 'img/product/BMD電動攪拌機縮圖.jpg'
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
    .component('stirrer1', {
        template: '<div><img src="img/product/BMD-數位式直流無刷攪拌機DIG系列.jpg" /></div>'
    })
    .component('stirrer2', {
        template: '<div><img src="img/product/直流攪拌器.jpg"></div>'
    })
    .component('stirrer3', {
        template: '<div><img src="img/product/電動攪拌器.jpg"></div>'
    })
    .component('stirrer4', {
        template: '<div><img src="img/product/高黏度攪拌機.jpg"></div>'
    })
    .component('stirrer5', {
        template: '<div><img src="img/product/高速攪拌器.jpg"></div>'
    })
    .component('stirrer6', {
        template: '<div><img src="img/product/落地式攪拌機.jpg"></div>'
    })