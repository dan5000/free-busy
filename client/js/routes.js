app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
	$stateProvider.state('FreeBusy', {
		url : '/FreeBusy',
		abstract: true,
		templateUrl : 'templates/side.html',
	}).state('FreeBusy.index', {
		url : '/index',
		views: {
	        'menuContent' :{
	        	controller : "IndexCtrl",
	    		templateUrl : 'templates/index.html'
	        }
	      }
	}).state('FreeBusy.home', {
		url : '/home',
		views: {
	        'menuContent' :{
	        	controller : "HomeCtrl",
	    		templateUrl : 'templates/home.html'
	        }
	      }
	}).state('FreeBusy.login', {
		url : '/login',
		views: {
	        'menuContent' :{
	        	controller : "LoginCtrl",
	    		templateUrl : 'templates/login.html'
	        }
	      }
	}).state('FreeBusy.Schedule', {
		url : '/Schedule',
		views: {
			'menuContent' :{
				controller : 'ScheduleCtrl',
				templateUrl : 'templates/Schedule.html'
			}
		}
	})
	;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/FreeBusy/index');

});