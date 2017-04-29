var app = angular.module('app',['ui.router']);
app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	// Routes
	$stateProvider
	.state('/', {
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
  $locationProvider.html5Mode(true);
});
// flightController
app.controller('flightCtrl', function($scope) {

});
// flightController
app.controller('hotelCtrl', function($scope) {

});
