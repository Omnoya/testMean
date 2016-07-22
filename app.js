angular.module('app', ['ngRoute'])
    .controller('mainController', mainController)
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainController'
            })
    })