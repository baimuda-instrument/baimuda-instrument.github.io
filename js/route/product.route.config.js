angular.module('MyApp').config(function($stateProvider) {

    $stateProvider.state({
        name: 'product',
        url: '/product',
        views: {
            'main': {
                component: 'product'
            },
            'productList@product': {
                component: 'productList'
            },
            'productDetail@product': {
                component: 'productDetail'
            }
        }
    });

    // 商品類

    $stateProvider.state({
        name: 'stirrer',
        parent: 'product',
        url: '/stirrer',
        views: {
            'productDetail@product': {
                component: 'stirrer'
            }
        }
    }).state({
        name: 'centrifuge',
        parent: 'product',
        url: '/centrifuge',
        views: {
            'productDetail@product': {
                component: 'centrifuge'
            }
        }
    }).state({
        name: 'hot-plate',
        parent: 'product',
        url: '/hot-plate',
        views: {
            'productDetail@product': {
                component: 'heatingPlate'
            }
        }
    }).state({
        name: 'stirrer-accessory',
        parent: 'product',
        url: '/stirrer-accessory',
        views: {
            'productDetail@product': {
                component: 'stirrerAccessory'
            }
        }
    }).state({
        name: 'vacummn-pump',
        parent: 'product',
        url: '/vacummn-pump',
        views: {
            'productDetail@product': {
                component: 'vacummnPump'
            }
        }
    }).state({
        name: 'stirrer_1',
        parent: 'product',
        url: '/stirrer_1',
        views: {
            'productDetail@product': {
                component: 'stirrer1'
            }
        }
    }).state({
        name: 'stirrer_2',
        parent: 'product',
        url: '/stirrer_2',
        views: {
            'productDetail@product': {
                component: 'stirrer2'
            }
        }
    }).state({
        name: 'stirrer_3',
        parent: 'product',
        url: '/stirrer_3',
        views: {
            'productDetail@product': {
                component: 'stirrer3'
            }
        }
    }).state({
        name: 'stirrer_4',
        parent: 'product',
        url: '/stirrer_4',
        views: {
            'productDetail@product': {
                component: 'stirrer4'
            }
        }
    }).state({
        name: 'stirrer_5',
        parent: 'product',
        url: '/stirrer_5',
        views: {
            'productDetail@product': {
                component: 'stirrer5'
            }
        }
    }).state({
        name: 'stirrer_6',
        parent: 'product',
        url: '/stirrer_6',
        views: {
            'productDetail@product': {
                component: 'stirrer6'
            }
        }
    });

    // 商品類 藥品測試器系列
    $stateProvider.state({
        name: 'tablet-tester',
        parent: 'product',
        url: '/tablet-tester',
        views: {
            'productDetail@product': {
                component: 'tabletTester'
            }
        }
    }).state({
        name: 'tablet-hardness-tester',
        parent: 'product',
        url: '/tablet-hardness-tester',
        views: {
            'productDetail@product': {
                component: 'tabletHardnessTester'
            }
        }
    })
    .state({
        name: 'disintegration-tester',
        parent: 'product',
        url: '/disintegration-tester',
        views: {
            'productDetail@product': {
                component: 'disintegrationTester'
            }
        }
    })
    .state({
        name: 'JT',
        parent: 'product',
        url: '/JT',
        views: {
            'productDetail@product': {
                component: 'jt'
            }
        }
    })



});