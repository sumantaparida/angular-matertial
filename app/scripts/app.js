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
	  })
		.state('packages', {
	    url: '/packages',
	    templateUrl: 'views/packages.html',
	    controller: 'packagesCtrl',
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
	$scope.state1 = $state.is('flight');
	$('.datepicker').pickadate();
	$('.mdb-select').material_select();
	console.log($scope.state1);
}]);
// flightController
app.controller("hotelCtrl",['$scope','$state', function($scope, $state){
	$scope.state2 = $state.is('hotel');
	$('.datepicker').pickadate();
	$('.mdb-select').material_select();
	console.log($scope.state2);
}]);
// packgesController
app.controller("packagesCtrl",['$scope','$state', function($scope, $state){
	$scope.state3 = $state.is('packages');
	$('.datepicker').pickadate();
	$('.mdb-select').material_select();
	console.log($scope.state2);
}]);
