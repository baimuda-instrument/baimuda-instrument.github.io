angular.module('MyApp').service('ProductService', function() {
    this.productData = [{
            name: '攪拌機',
            engName: 'stirrer',
            url: "/#!product/stirrer"
        },
        {
            name: '攪拌機配件&翼片',
            engName: 'stirrer accessory',
            url: '/#!product/stirrer-accessory'
        },
        {
            name: '電氣加熱板',
            engName: 'heating plate',
            url: '/#!product/heating-plate'
        },
        {
            name: '離心機',
            engName: 'centrifuge',
            url: '/#!product/centrifuge'
        },
        {
            name: '真空幫浦',
            engName: 'vacummn pump',
            url: '/#!/product/vacummn-pump'
        },
        {
            name: '藥錠試驗器系列',
            engName: 'tablet tester',
            url: '/#!/product/tablet-tester'
        }

    ];
})