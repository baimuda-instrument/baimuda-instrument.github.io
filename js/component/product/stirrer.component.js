angular.module('MyApp')
    .component('stirrer', {
        templateUrl: 'js/component/product/stirrer.component.html',
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
            vm.stirrerData = [{
                    title: '數位無刷攪拌機',
                    url: '/#!product/stirrer_1'
                }, {
                    title: '直流攪拌機',
                    url: '/#!product/stirrer_2'
                }, {
                    title: '電動攪拌機',
                    url: '/#!product/stirrer_3'
                }, {
                    title: '數位高年度攪拌機',
                    url: '/#!product/stirrer_4'
                }, {
                    title: '高速攪拌機',
                    url: '/#!product/stirrer_5'
                }, {
                    title: '落地式迷你型攪拌機',
                    url: '/#!product/stirrer_6'
                },

            ]
        }
    })
    .component('stirrer1', {
        template: '<div><img src="img/product/數位式直流無刷攪拌機DIG系列.jpg" /></div>'
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