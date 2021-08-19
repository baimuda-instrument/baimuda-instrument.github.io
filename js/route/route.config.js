angular.module('MyApp').config(
    
    function($stateProvider,$urlRouterProvider){

    $stateProvider.state({
        name: 'index',
        url: '',
        views:{
            'main@':{
                component:'indexComp'
            }
        }
    })

    $stateProvider.state({
        name:'contact',
        url:'/contact',
        views:{
            'main@':{
                component: 'contactComp'
            }
        }
    });

    $urlRouterProvider.otherwise('/');

    
})