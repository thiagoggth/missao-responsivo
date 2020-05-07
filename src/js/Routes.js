angular.module('myApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/HomeView.html',
                controller: 'HomeController as vm'
            })
            .when('/secao', {
                templateUrl: 'templates/SecaoView.html',
                controller: 'SecaoController as vm'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])