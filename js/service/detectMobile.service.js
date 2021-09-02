angular.module('MyApp').service('DetectMobileService', function() {

    var smallScreen = window.matchMedia("only screen and (max-width: 550px)").matches
    var isMobileOS = / Android | webOS | iPhone | iPad | iPod | BlackBerry | IEMobile | Opera Mini /i.test(navigator.userAgent)

    this.isMobile = smallScreen //&& isMobileOS;
});