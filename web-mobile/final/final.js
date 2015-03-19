angular.module('mainApp', [])
	.controller('mainController', function($scope, $http) {

        $scope.username = '';
        $scope.loggedIn = false;
        getClassList();

		$scope.classForm = {

            classTitle: '',
            show: false
        };

		$scope.deleteForm = {

            classTitle: '',
            show: false
        };

		$scope.updateForm = {

            oldTitle: '',
            newTitle: '',
            show: false
        };

        // Login
		$scope.login = function(username, password) {

            if (username == 0) {

                alert('Please enter a username.');
            } else {

                $scope.username = username;
                $scope.loggedIn = true;

                insertUser(username, password);

                getClassList();
            }
		};

		$scope.createUser = function(username, password, password2) {

			if (password != password2) {

				alert('Passwords must match.');
			} else {

				insertUser(username, password);

                getClassList();
			}
		};

        $scope.logout = function() {

            $scope.loggedIn = false;
            $scope.username = '';
            $scope.classForm.show = false;
            $scope.deleteForm.show = false;
            $scope.updateForm.show = false;
        };

		// Forms
		var clearClassForm = function() {

			$scope.classForm.classTitle = '';
			$scope.classForm.show = false;
		};

		$scope.cancelClassForm = function() {

			clearClassForm();
		};

        var clearUpdateForm = function() {

            $scope.updateForm.oldTitle = '';
            $scope.updateForm.newTitle = '';
            $scope.updateForm.show = false;
        };

        $scope.cancelUpdateForm = function() {

            clearUpdateForm();
        };

        var clearDeleteForm = function() {

            $scope.deleteForm.classTitle = '';
            $scope.deleteForm.show = false;
        };

        $scope.cancelDeleteForm = function() {

            clearDeleteForm();
        };

        // Class functionality
		$scope.submitClassForm = function() {

			var classTitle = $scope.classForm.classTitle;

			if (classTitle.length == 0) {

				alert('You must provide a class title.');
			} else {

				console.log('In submitClassForm adding ' + classTitle);

				insertClass();

				clearClassForm();
			}
		};

        $scope.updateClass = function() {

            updateClass();

            clearUpdateForm();
        };

        $scope.deleteClass = function() {

			var confirmDelete = confirm('Are you sure you want to delete ' + $scope.deleteForm.classTitle + '?');

            if (confirmDelete) {

                console.log('Deleting now!');

                deleteClass();

                clearDeleteForm();
            }

            console.log('Done deleting.');
        };

        // Database calls
		function insertUser(username, password) {

		    $.ajax ({
		    	type: "POST",
		        url: "createUser.php",
		        data: { username : username, password : password }, //optional
		        success: function( response ) {

                    console.log(response);
		            $scope.username = username;
                    $scope.loggedIn = true;
		        }
		    });
		};

        function login(username, password) {

            $.ajax({
                type: "POST",
                url: "login.php",
                data: { username : username, password : password },
                success: function( response ) {

                    console.log(response);
                    $scope.loggedIn = true;
                    $scope.username = username;
                }
            })
        };

		function insertClass() {
			console.log('In insertClass. Adding ' + $scope.classForm.classTitle + ' to ' + $scope.username);

		    $.ajax ({
		    	type: "POST",
		        url: "createClass.php",
		        data: { username : $scope.username, classTitle : $scope.classForm.classTitle }, //optional
		        success: function() {

		            getClassList();
		        }
		    });
		};

        function updateClass() {

            var username = $scope.username;
            var oldTitle = $scope.updateForm.oldTitle;
            var newTitle = $scope.updateForm.newTitle;

            console.log('In updateClass to update ' + oldTitle + ' to ' + newTitle);

            $.ajax ({
                type: "POST",
                url: "updateClass.php",
                data: { username : username, oldTitle : oldTitle, newTitle : newTitle },
                success: function(response) {

                    console.log(response);
                    getClassList();
                }
            })
        };

        function deleteClass() {

            var username = $scope.username;
            var classTitle = $scope.deleteForm.classTitle;

            console.log('In deleteClass to delete ' + classTitle);

            $.ajax ({
                type: "POST",
                url: "deleteClass.php",
                data: { username : username, classTitle : classTitle }, //optional
                success: function(response) {

                    console.log(response);
                    getClassList();
                }
            });

//            $http.post("deleteClass.php", { classTitle: classTitle})
//                .success(function(data) {
//
//                    console.log(data);
//
//                    getClassList();
//                });
        };

        function getClassList() {
            console.log("Getting class list...");

//            $.ajax({
//                type: "POST",
//                url: "getClassList.php",
//                data: { username: $scope.username },
//                success: function(response) {
//
//                    console.log(response);
//                    $("#database").html(data);
//                }
//            });

            $http.get("getClassList.php")
                .success(function(data) {

//                    console.log(data);

                    $("#database").html(data);
                });
        };
	});