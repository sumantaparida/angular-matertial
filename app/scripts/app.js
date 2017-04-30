var app = angular.module('app',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider.state('flight', {
		    url: '/',
		    templateUrl: 'views/flight.html',
		    controller: 'flightCtrl',
		    authenticate: true
		})
	  .state('hotel', {
	    url: '/hotel',
	    templateUrl: 'views/hotel.html',
	    controller: 'hotelCtrl',
	    authenticate: true
	  });
		$urlRouterProvider.otherwise("/");
	// $locationProvider.html5Mode({
	//   enabled: true,
	//   requireBase: false
	// }).hashPrefix('!');
}]);

// flightController
app.controller("flightCtrl",['$scope','$state', function($scope, $state){
	//$scope.state = $state.is('flight');
	$('.datepicker').pickadate();
	$('.mdb-select').material_select();
	console.log($state.is('flight'));
}]);
// flightController
app.controller("hotelCtrl",['$scope','$state', function($scope, $state){
	//$scope.state = $state.is('hotel');
	$('.datepicker').pickadate();
	$('.mdb-select').material_select();
	console.log($state.is('hotel'));
}]);
