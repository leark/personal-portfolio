// Create app
var myApp = angular.module("myApp", ["ui.router"]);
// Configure app

myApp.config(function($stateProvider) {
	$stateProvider
		.state("home", {
			url:'/',
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.state("content", {
			url:'/content',
			templateUrl: 'templates/content.html',
			controller: 'ContentController'
		})
		.state("about", {
			url:'/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController'
		})
})

// Landing page controller: define $scope.number as a number
myApp.controller("HomeController", function ($scope, $http) {
	$scope.number = 3;
})

// About page controller: define $scope.about as a string
myApp.controller("AboutController", function ($scope, $http) {
	$scope.about = "this is about";
})

// Content controller: define $scope.url as an image
myApp.controller("ContentController", function ($scope, $http) {
	$scope.url = "img/simba.png";
})

