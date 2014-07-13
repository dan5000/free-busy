controllers.controller("ScheduleCtrl", ["$scope", "$stateParams", "$q", "$location", "$window", "$ionicSideMenuDelegate", 'config',"ScheduleService", 
                                     function($scope, $stateParams, $q, $location, $window, $ionicSideMenuDelegate, config, ScheduleService) {
  $scope.getData = function(){
	  ScheduleService.getData().then(function(resp){
			console.log(resp);
		});
	}
}]);
