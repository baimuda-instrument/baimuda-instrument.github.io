var app=angular.module("MyApp",["ngRoute","ui.router"]);
angular.module("MyApp").config(["$stateProvider",function(t){t.state({name:"product",url:"/product",views:{main:{component:"product"},"productList@product":{component:"productList"},"productDetail@product":{component:"productDetail"}}}),t.state({name:"stirrer",parent:"product",url:"/stirrer",views:{"productDetail@product":{component:"stirrer"}}}).state({name:"centrifuge",parent:"product",url:"/centrifuge",views:{"productDetail@product":{component:"centrifuge"}}}).state({name:"heating-plate",parent:"product",url:"/heating-plate",views:{"productDetail@product":{component:"heatingPlate"}}}).state({name:"stirrer-accessory",parent:"product",url:"/stirrer-accessory",views:{"productDetail@product":{component:"stirrerAccessory"}}}).state({name:"vacummn-pump",parent:"product",url:"/vacummn-pump",views:{"productDetail@product":{component:"vacummnPump"}}}).state({name:"stirrer_1",parent:"product",url:"/stirrer_1",views:{"productDetail@product":{component:"stirrer1"}}}).state({name:"stirrer_2",parent:"product",url:"/stirrer_2",views:{"productDetail@product":{component:"stirrer2"}}}).state({name:"stirrer_3",parent:"product",url:"/stirrer_3",views:{"productDetail@product":{component:"stirrer3"}}}).state({name:"stirrer_4",parent:"product",url:"/stirrer_4",views:{"productDetail@product":{component:"stirrer4"}}}).state({name:"stirrer_5",parent:"product",url:"/stirrer_5",views:{"productDetail@product":{component:"stirrer5"}}}).state({name:"stirrer_6",parent:"product",url:"/stirrer_6",views:{"productDetail@product":{component:"stirrer6"}}}),t.state({name:"tablet-tester",parent:"product",url:"/tablet-tester",views:{"productDetail@product":{component:"tabletTester"}}}).state({name:"tablet-hardness-tester",parent:"product",url:"/tablet-hardness-tester",views:{"productDetail@product":{component:"tabletHardnessTester"}}}).state({name:"JT",parent:"product",url:"/JT",views:{"productDetail@product":{component:"jt"}}})}]);
angular.module("MyApp").config(["$stateProvider","$urlRouterProvider",function(t,e){t.state({name:"index",url:"",views:{"main@":{component:"indexComp"}}}),t.state({name:"contact",url:"/contact",views:{"main@":{component:"contactComp"}}}),e.otherwise(function(t,e){t=t.get("$state");""!==e.$$url&&e.$$url,t.go("index")})}]);
angular.module("MyApp").component("centrifuge",{template:'<div><img src="img/product/電動離心機.jpg"></div>'});
angular.module("MyApp").component("heatingPlate",{template:'<div><img src="img/product/電氣加熱板.jpg"></div>'});
angular.module("MyApp").component("jt",{template:`<div><img src="img/product/BMD-凝集試驗器.jpg" /></div>
        <div class="download-container"><a class="download-btn" href="img/product/BMD-凝集試驗器.jpg" download>下載目錄</a></div>
        `});
angular.module("MyApp").component("stirrerAccessory",{template:`<div>
                    <img src="img/product/攪拌機配件.jpg">
                    <img src="img/product/攪拌機配件2.jpg">
                    <img src="img/product/攪拌機配件3.jpg">
                    <img src="img/product/攪拌機配件4.jpg">
                </div>`});
angular.module("MyApp").component("stirrer",{templateUrl:"js/component/product/stirrer.component.html",controllerAs:"vm",controller:function(){this.stirrerData=[{title:"數位無刷攪拌機",url:"/#!product/stirrer_1",imgSrc:"img/product/BMD_數位無刷攪拌機縮圖.jpg"},{title:"直流攪拌機",url:"/#!product/stirrer_2",imgSrc:"img/product/BMD直流攪拌機縮圖.jpg"},{title:"電動攪拌機",url:"/#!product/stirrer_3",imgSrc:"img/product/BMD電動攪拌機縮圖.jpg"},{title:"數位高黏度攪拌機",url:"/#!product/stirrer_4",imgSrc:"img/product/BMD數位高黏度攪拌機縮圖.jpg"},{title:"高速攪拌機",url:"/#!product/stirrer_5",imgSrc:"img/product/BMD高速攪拌機縮圖.jpg"},{title:"落地式迷你型攪拌機",url:"/#!product/stirrer_6",imgSrc:"img/product/BMD落地式迷你型攪拌機縮圖.jpg"}]}}).component("stirrer1",{template:'<div><img src="img/product/BMD-數位式直流無刷攪拌機DIG系列.jpg" /></div>'}).component("stirrer2",{template:'<div><img src="img/product/直流攪拌器.jpg"></div>'}).component("stirrer3",{template:'<div><img src="img/product/電動攪拌器.jpg"></div>'}).component("stirrer4",{template:'<div><img src="img/product/高黏度攪拌機.jpg"></div>'}).component("stirrer5",{template:'<div><img src="img/product/高速攪拌器.jpg"></div>'}).component("stirrer6",{template:'<div><img src="img/product/落地式攪拌機.jpg"></div>'});
angular.module("MyApp").component("tabletTester",{templateUrl:"js/component/product/tablet-tester.component.html",controllerAs:"vm",controller:function(){this.tabletTesterData=[{title:"硬度計",url:"/#!product/tablet-hardness-tester",imgSrc:"img/product/硬度計縮圖.jpg"}]}}).component("tabletHardnessTester",{template:'<div><img src="img/product/錠劑硬度計.jpg" /></div>'});
angular.module("MyApp").component("vacummnPump",{template:'<div><img src="img/product/真空幫浦.jpg"></div>'});
angular.module("MyApp").component("contactComp",{templateUrl:"js/component/contact.component.html"});
angular.module("MyApp").component("fixContact",{templateUrl:"js/component/fixContact.component.html"});
angular.module("MyApp").component("footerComp",{templateUrl:"js/component/footer.component.html"});
angular.module("MyApp").component("headerComp",{templateUrl:"js/component/header.component.html",controllerAs:"vm",controller:function(){var o=this,n=$(".myCollapse");o.openDropdown=!1,o.toggleDropdown=function(){o.openDropdown=!o.openDropdown,n.css("right",o.openDropdown?"0":"-100%")}}});
angular.module("MyApp").component("indexComp",{templateUrl:"js/component/index.component.html",controller:function(){this.$onInit=function(){angular.element(".main .index .scroll-effect-cover").css("width","0%")}}});
angular.module("MyApp").component("product",{templateUrl:"js/component/product.component.html"});
angular.module("MyApp").component("productDetail",{templateUrl:"js/component/productDetail.component.html"});
angular.module("MyApp").component("productList",{templateUrl:"js/component/productList.component.html",controllerAs:"vm",controller:["ProductService","DetectMobileService","$scope",function(o,t,e){var i=this;i.collapseList=!1,i.$onInit=function(){i.productData=o.productData,i.isMobile=t.isMobile()},$(window).resize(function(){i.isMobile=t.isMobile(),e.$digest()}),i.toggle=function(){i.collapseList=!i.collapseList}}]});
angular.module("MyApp").service("DetectMobileService",function(){this.isMobile=function(){return window.matchMedia("only screen and (max-width: 550px)").matches}});
angular.module("MyApp").service("ProductService",function(){this.productData=[{name:"攪拌機",engName:"stirrer",url:"/#!product/stirrer"},{name:"攪拌機配件&翼片",engName:"stirrer accessory",url:"/#!product/stirrer-accessory"},{name:"電氣加熱板",engName:"heating plate",url:"/#!product/heating-plate"},{name:"藥錠試驗器系列",engName:"tablet tester",url:"/#!/product/tablet-tester"},{name:"凝集試驗器",url:"/#!/product/JT"},{name:"振盪 & 萃取 & 混合器系列",engName:"",url:""},{name:"磁性攪拌器",engName:"",url:""},{name:"乳化&均質機",engName:"",url:""},{name:"離心機",engName:"centrifuge",url:"/#!product/centrifuge"},{name:"標準篩震盪器",engName:"",url:""},{name:"球磨機",engName:"Ball Mill",url:""},{name:"COD分解 / 乾浴",engName:"",url:""},{name:"恆溫 水(油) 浴鍋槽",engName:"",url:""},{name:"真空幫浦",engName:"vacummn pump",url:"/#!/product/vacummn-pump"}]});