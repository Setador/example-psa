/*Create angular module with ngRoute. The ngRoute module provides routing, deeplinking services and directives for angular apps.*/
var app = angular.module('myApp', ['ngRoute']);

/*We will use $routeProvider service from the ngRoute module. For each route, we need to specify templateUrl and controller.*/
app.config(function ($routeProvider) {
   $routeProvider
       .when('/', {
           templateUrl : 'pages/home.html',
           controller : 'HomeController'
       })
       .when('/blog', {
           templateUrl : 'pages/blog.html',
           controller : 'BlogController'
       })
       .when('/about', {
           templateUrl : 'pages/about.html',
           controller : 'AboutController'
       })
       .otherwise({redirectTo: '/'});
});

/*Then we need to build controllers for every route (we already specified their names in routeProvider)*/
app.controller('HomeController', function ($scope) {
    $scope.message = "Hello from HomeController";
})
app.controller('BlogController', function ($scope) {
    $scope.message = "Hello from BlogController";
})
app.controller('AboutController', function ($scope) {
    $scope.message = "Hello from AboutController";
})
