controllers.controller("IndexCtrl", ['$rootScope', "$scope", "$stateParams", "$q", "$location", "$window", "Logger", '$ionicLoading', "$ionicSideMenuDelegate", '$ionicScrollDelegate', '$timeout', 'config', '$ionicModal','indexService','$cordovaPush','PushService','$ionicPlatform',
    function($rootScope, $scope, $stateParams, $q, $location, $window, Logger, $ionicLoading, $ionicSideMenuDelegate, $ionicScrollDelegate, $timeout, config, $ionicModal, indexService, $cordovaPush, PushService, $ionicPlatform) {
	
	//Push notification - initialize device id 
	$ionicPlatform.ready(function () {
		PushService.getDeviceId();
	});

	$scope.toggleLeft = function(event) {
		event.preventDefault();
		event.stopPropagation();
	    $ionicSideMenuDelegate.toggleLeft();
	};
	
	$scope.goTo = function(page, hideMenu) {
	    Logger.log('Going to ' + page);
	    if(hideMenu){
	    	$ionicSideMenuDelegate.toggleLeft();
	    }else{
	    	
	    }
	    $timeout(function(){
	    	$ionicScrollDelegate.scrollTop(false);
		},1000);
	    $location.url('/'+config.appName+'/' + page);
	};
	
	$scope.data = {};
	$scope.getData = function(){
		indexService.getDataFromServer().then(function(resp){
			$scope.data = resp;
		});
	};
	
	}
]);
