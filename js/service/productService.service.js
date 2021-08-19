angular.module('MyApp').service('ProductService', function() {
    this.productData = [{
            name: '攪拌機',
            url: "/#!product/stirrer"
        },
        {
            name: '攪拌機配件&翼片',
            url: '/#!product/stirrer-accessory'
        },
        {
            name: '電氣加熱板',
            url: '/#!product/heating-plate'
        },
        {
            name: '離心機',
            url: '/#!product/centrifuge'
        },
        {
            name: '真空幫浦',
            url: '/#!/product/vacummn-pump'
        }

    ];
})