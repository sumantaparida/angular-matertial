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
app.controller('flightCtrl', function($scope) {

});
// flightController
app.controller('hotelCtrl', function($scope) {

});
