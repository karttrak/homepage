angular.module('mainApp', [])
	.controller('mainController', function($scope) {

		$scope.courseList = [
								{
									'title': 'Capstone',
									'url': 'https://collab.itc.virginia.edu/portal/site/54bcbf62-81cb-45bc-bf8c-c7d46467bba5',
									'links': [
												{
													'text': 'Shelter GitHub',
													'url': 'https://github.com/uva-slp/shelter'
												},
												{
													'text': 'Notes',
													'url': 'http://aaronbloomfield.github.io/slp/README.html'
												},
												{
													'text': 'Shelter',
													'url': 'http://pegasus.cs.virginia.edu/shelter/'
												},
												{
													'text': 'Circle CI',
													'url': 'https://circleci.com/gh/uva-slp/shelter/tree/master'
												},
												{
													'text': 'Piazza',
													'url': 'https://piazza.com/class/hzuo6i9f2tp6at'
												}
											]

								},
								{
									'title': 'Game Design',
									'url': 'https://cs4730.cs.virginia.edu/',
									'links': [
												{
													'text': 'Gamer Card',
													'url': 'https://stardock.cs.virginia.edu/gamercard-cs4730-s15/'
												},
												{
													'text': 'Lectures',
													'url': 'https://cs4730.cs.virginia.edu/lecture/'
												},
												{
													'text': 'Schedule',
													'url': 'https://cs4730.cs.virginia.edu/schedule.html'
												},
												{
													'text': 'Fullerton Textbook',
													'url': 'fullerton.pdf'
												},
												{
													'text': 'Piazza',
													'url': 'https://piazza.com/class/i4k89f431742qw'
												}
											]

								},
								{
									'title': 'OS',
									'url': 'https://collab.itc.virginia.edu/portal/site/916d864b-c206-4484-976d-1df1a5b90182',
									'links': [
												{
													'text': 'Textbook',
													'url': 'os-textbook.pdf'
												},
												{
													'text': 'Notes',
													'url': 'https://drive.google.com/drive/#folders/0B-hBN7_4yhz8dzF5REhLeTVaNFU'
												}
											]

								},
								{
									'title': '3240',
									'url': 'https://collab.itc.virginia.edu/portal/site/6b272103-d1dd-481e-ac2f-1bd3057072f9',
									'links': [
												{
													'text': 'Textbook',
													'url': 'williamstext.pdf'
												},
												{
													'text': 'Project Github',
													'url': 'https://github.com/karttrak/3240-team10'
												},
												{
													'text': 'Pivotal Tracker',
													'url': 'https://www.pivotaltracker.com/n/projects/1301738'
												},
												{
													'text': 'Piazza',
													'url': 'https://piazza.com/class/i4vkwnudwmp66n'
												}
											]

								},
								{
									'title': 'STS',
									'url': '',
									'links': [
												{
													'text': 'Sources',
													'url': 'sts/sources.html'
												}
											]

								},
								{
									'title': 'Other',
									'url': '',
									'links': [
												{
													'text': 'Collab',
													'url': 'https://collab.itc.virginia.edu/portal?containerLogin=true'
												},
												{
													'text': 'Google Drive',
													'url': 'https://drive.google.com/drive/#my-drive'
												},
												{
													'text': 'Github',
													'url': 'https://github.com/karttrak?tab=repositories'
												},
												{
													'text': 'SIS',
													'url': 'https://sisuva.admin.virginia.edu/psp/epprd/EMPLOYEE/EMPL/h/?tab=PAPP_GUEST'
												},
												{
													'text': 'Reaction Test',
													'url': 'reaction.html'
												},
												{
													'text': 'Color Game',
													'url': 'http://game.ioxapp.com/color/'
												},
												{
													'text': 'CavAd',
													'url': 'cavAd/cavAd.html'
												},
												{
													'text': 'Prototype',
													'url': 'Prototype-kat4ma-mac.zip'
												}
											]

								}
							];

		// $scope.selectedCourse = 4;
		$scope.viewedCourse = 5;

		// $scope.viewCourse = function(index) {

		// 	$scope.viewedCourse = index;
		// };

		$scope.selectCourse = function(index) {

			// $scope.selectedCourse = index;
			$scope.viewedCourse = index;
		};

		$scope.pic = 'http://i.imgur.com/FzkHbdU.jpg?1';

		var pic1 = 'http://i.imgur.com/FzkHbdU.jpg?1';
		var pic2 = 'http://i.imgur.com/Gz0lNPZ.gif';

		$scope.switchImage = function() {

			if ($scope.pic == pic1)
				$scope.pic = pic2;
			else $scope.pic = pic1;
		};
	});
