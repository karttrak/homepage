angular.module('mainApp', [])
	.service('classesService', function() {

		return {

			classList: [],

			classForm: {

				classTitle: '',
				show: false
			}
		}
	})
	.controller('mainController', function($scope, classesService) {

		$scope.classList = classesService.classList;
		$scope.classForm = classesService.classForm;
		$scope.username = 'kart';
		$scope.loggedIn = true;

		$scope.login = function(username, password) {

			$scope.loggedIn = true;
		};

		$scope.createUser = function(username, password, password2) {

			if (password != password2) {

				alert('Passwords must match.');
			} else {

				insertUser(username, password);

				$scope.loggedIn = true;
			}
		};

		// Class form
		var clearClassForm = function() {

			$scope.classForm.classTitle = '';
			$scope.classForm.show = false;
		};

		$scope.cancelClassForm = function() {

			clearClassForm();
		};

		$scope.submitClassForm = function() {

			var classTitle = $scope.classForm.classTitle;

			var classExists = checkClass(classTitle);

			if (classTitle.length == 0) {

				alert('You must provide a class title.');
			} else if (classExists) {

				alert('You already have a class called ' + classTitle + '.');
			} else {

				console.log('In submitClassForm');

				insertClass(classTitle);

				console.log('Pushing a class');
				$scope.classList.push({

					classTitle: classTitle,
					assignmentList: [],
					assignmentForm: {

						assignmentName: '',
						dueDate: '',
						show: false
					}
				});

				clearClassForm();
			}
		};

		$scope.deleteClass = function(c, index) {

			var confirmDelete = confirm('Are you sure you want to delete ' + c.classTitle + '?');

			if (confirmDelete) {

				$scope.classList.splice(index, 1);

				if ($scope.classList.length == 0) {

					$scope.deleteMode = false;
				}
			}
		};

		// Assignment form
		var clearAssignmentForm = function(c) {

			c.assignmentForm.assignmentName = '';
			c.assignmentForm.dueDate = '';
			c.assignmentForm.show = false;
		};

		$scope.cancelAssignmentForm = function(c) {

			clearAssignmentForm(c);
		};

		$scope.submitAssignmentForm = function(c) {

			if (c.assignmentForm.assignmentName.length == 0 || c.assignmentForm.dueDate.length == 0) {

				alert('Must provide input for both fields.');
			} else {

				c.assignmentList.push({

					name: c.assignmentForm.assignmentName,
					dueDate: c.assignmentForm.dueDate,
					edit: false
				});

				clearAssignmentForm(c);
			}
		};

		// Editing assignments
		$scope.updateAssignment = function(c, index, name, dueDate) {

			c.assignmentList.splice(index, 1, 
				{
					name: name,
					dueDate: dueDate,
					edit: false
				}
			);
		};

		$scope.deleteAssignment = function(c, index) {

			c.assignmentList.splice(index, 1);
		};

		function insertUser(username, password) {

		    $.ajax ({
		    	type: "POST",
		        url: "createUser.php",
		        data: { username : username, password : password }, //optional
		        success: function( result ) {

		            $scope.username = result;
		            return result;
		        }
		    });
		};

		function insertClass(classTitle) {
			console.log('In insertClass. Adding ' + classTitle + ' to ' + $scope.username);

		    $.ajax ({
		    	type: "POST",
		        url: "createClass.php",
		        data: { username : $scope.username, classTitle : classTitle }, //optional
		        success: function( result ) {

		            return result;
		        }
		    });
		};

		function checkClass(classTitle) {

			for (var i = 0; i < $scope.classList.length; i++) {

				if (classTitle == $scope.classList[i].classTitle) {

					return true;
				}
			}

			return false;
		};
	});