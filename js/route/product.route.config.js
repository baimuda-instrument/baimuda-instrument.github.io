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


    $stateProvider.state({
        name: 'centrifuge',
        parent: 'product',
        url: '/centrifuge',
        views: {
            'productDetail@product': {
                component: 'centrifuge'
            }
        }
    });

    $stateProvider.state({
        name: 'stirrer',
        parent: 'product',
        url: '/stirrer',
        views: {
            'productDetail@product': {
                component: 'stirrer'
            }
        }
    });

    $stateProvider.state({
        name: 'heating-plate',
        parent: 'product',
        url: '/heating-plate',
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
    });




});