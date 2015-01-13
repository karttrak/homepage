angular.module('mainApp', [])
	.controller('mainController', function($scope) {

		$scope.pic = 'http://i.imgur.com/FzkHbdU.jpg?1';

		var pic1 = 'http://i.imgur.com/FzkHbdU.jpg?1';
		var pic2 = 'http://i.imgur.com/Gz0lNPZ.gif';

		$scope.switchImage = function() {

			if ($scope.pic == pic1)
				$scope.pic = pic2;
			else $scope.pic = pic1;
		};
	});
