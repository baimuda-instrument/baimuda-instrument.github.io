angular.module('MyApp').config(

    function($stateProvider, $urlRouterProvider) {

        $stateProvider.state({
            name: 'index',
            url: '',
            views: {
                'main@': {
                    component: 'indexComp'
                }
            }
        })

        $stateProvider.state({
            name: 'contact',
            url: '/contact',
            views: {
                'main@': {
                    component: 'contactComp'
                }
            }
        });

        // $urlRouterProvider.otherwise('/');
        $urlRouterProvider.otherwise(function($injector, $location) {
            var $state = $injector.get('$state');
            if ($location.$$url === '' || $location.$$url === '/') {
                $state.go('index');
                return;
            }
            $state.go('index'); // some custom not found page
        });

    })