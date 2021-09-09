angular.module('MyApp').service('DetectMobileService', function() {

    this.isMobile = isSmallScreen; //&& isMobileOS;


    function isSmallScreen(){
        return window.matchMedia("only screen and (max-width: 550px)").matches;
    }

    function isMobileOS(){
        return / Android | webOS | iPhone | iPad | iPod | BlackBerry | IEMobile | Opera Mini /i.test(navigator.userAgent);
    }
});