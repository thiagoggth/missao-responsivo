angular.module('myApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/HomeView.html',
                controller: 'HomeController as vm'
            })
            .when('/secoes', {
                templateUrl: 'templates/SecaoView.html',
                controller: 'SecaoController as vm'
            })
            .when('/divisoes', {
                templateUrl: 'templates/DivisaoView.html',
                controller: 'DivisaoController as vm'
            })
            .when('/grupos', {
                templateUrl: 'templates/GruposView.html',
                controller: 'GruposController as vm'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])