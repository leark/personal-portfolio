// Create app
var myApp = angular.module("myApp", ["ui.router"]);

// Configure app
myApp.config(function($stateProvider) {
	$stateProvider
		.state("home", {
			url:'',
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.state("projects", {
			url:'/projects',
			templateUrl: 'templates/projects.html',
			controller: 'ProjectsController'
		})
		.state("about", {
			url:'/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController'
		})
})

// Landing page controller
myApp.controller("HomeController", function ($scope, $http) {
	$scope.home = "Hi you're viewing Seung's Portfolio website!";
})

// About page controller
myApp.controller("AboutController", function ($scope, $http) {
	$scope.about = "My name is Seung Lee and I am an informatics major at the University of Washington.";
})

// Project controller. Pulls data from JSON file using GET
myApp.controller("ProjectsController", function ($scope, $http) {
	$http({
		method: "GET",
		url: "../data/data.json"
	}).then(function successCallback(response) {
		$scope.projects = response.data;
	})	
})

