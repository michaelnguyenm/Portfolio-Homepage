// Based on https://scotch.io/tutorials/angular-routing-using-ui-router

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');

    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'home.html'
        })

        .state('projects', {
            url: 'projects',
            templateUrl: 'projects.html'
        })

        .state('contact', {
            // Nothing
        });
});
