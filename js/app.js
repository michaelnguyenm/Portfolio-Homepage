// Based on https://scotch.io/tutorials/angular-routing-using-ui-router

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })

        .state('projects', {
            url: '/projects',
            templateUrl: 'projects.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html',
            controller: function($scope) {
                // Obfuscation for fun
                $scope.host = "moc.liamg";
                $scope.user = "mneyugnleahcim";
                $scope.at = "@";
                // Based on http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
                function rev(x) { return x.split('').reverse().join(''); }
                $scope.mr = rev($scope.host + $scope.at + $scope.user);
            }
        });
});
