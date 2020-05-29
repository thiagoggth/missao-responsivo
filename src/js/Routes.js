angular.module('myApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/HomeView.html',
                controller: 'HomeController as vm'
            })
            .when('/home', {
                redirectTo: '/'
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
            .when('/classes', {
                templateUrl: 'templates/ClasseView.html',
                controller: 'ClasseController as vm'
            })
            .when('/subclasses', {
                templateUrl: 'templates/SubclasseView.html',
                controller: 'SubclasseController as vm'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])