angular.module('mainApp', [])
	.controller('mainController', function($scope, $timeout) {

		$scope.dateFormat = 'MM/dd/yyyy';
		$scope.datepicker = new Date('5/7/2015');

		$scope.remainingPlusDollars = 327;
		$scope.remainingSwipes = 55;

		$scope.reload = function() {

			$scope.today = Date.now();
			$scope.weeksUntilDate = (new Date($scope.datepicker) - $scope.today) / 1000 / 3600 / 24 / 7;
			$scope.plusDollarsPerWeek = $scope.remainingPlusDollars / $scope.weeksUntilDate;
			$scope.swipesPerWeek = $scope.remainingSwipes / $scope.weeksUntilDate;
		};

		$scope.reload();

	});
