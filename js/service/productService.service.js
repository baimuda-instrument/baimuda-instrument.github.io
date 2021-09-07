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
            name: '藥錠試驗器系列',
            engName: 'tablet tester',
            url: '/#!/product/tablet-tester'
        }, {
            name: '凝集試驗器',
            url: '/#!/product/JT'
        },
        {
            name: '振盪 & 萃取 & 混合器系列',
            engName: '',
            url: ''
        },
        {
            name: '電磁加熱攪拌器',
            engName: '',
            url: ''
        },
        {
            name: '乳化&均質機',
            engName: '',
            url: ''
        },
        {
            name: '離心機',
            engName: 'centrifuge',
            url: '/#!product/centrifuge'
        },
        {
            name: '標準篩震盪器',
            engName: '',
            url: ''
        },
        {
            name: '球磨機',
            engName: 'Ball Mill',
            url: ''
        },
        {
            name: 'COD分解 / 乾浴',
            engName: '',
            url: ''
        },
        {
            name: '恆溫 水(油) 浴鍋槽',
            engName: '',
            url: ''
        },
        {
            name: '真空幫浦',
            engName: 'vacummn pump',
            url: '/#!/product/vacummn-pump'
        },


    ];
})