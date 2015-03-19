<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$con=mysqli_connect("stardock.cs.virginia.edu","cs4720kat4ma","fall2014","cs4720kat4ma");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// escape variables for security
// $username = mysqli_real_escape_string($con, $_POST['username']);

$result = mysqli_query($con,"SELECT * FROM classes 
	ORDER BY user");
// $list = array();

// while($row = mysqli_fetch_array($result)) {
//   array_push($list, array(
// 	'classTitle' => $row['class'],
// 	// 'assignmentList' => array(),
// 	// 'assignmentForm' => array(
// 	//   'assignmentName' => '',
// 	//   'dueDate' => '',
// 	//   'show' => false
// 	// )
//   ));
//   // $list .= "{\n";
//   // $list .= "\t'classTitle': '" . $row['class'] . "', \n";
//   // $list .= "\tassignmentList: [],\n";
//   // $list .= "\tassignmentForm: {\n";
//   // $list .= "\t\tassignmentName: '',\n";
//   // $list .= "\t\tdueDate: '',\n";
//   // $list .= "\t\tshow: false\n";
//   // $list .= "\t}\n";
//   // $list .= "}\n";
// }

// foreach($list as $l) {
// 	echo json_encode($l) . ',';
// };
// echo json_encode($list);

echo "<table class='table table-striped table-bordered'>";
echo "<tr><th>User</th><th>Class Title</th></tr>";
// <th></th><th></th>
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['user'] . "</td>";
  echo "<td>" . $row['class'] . "</td>";
  // echo("<td>" . "<button class='btn btn-xs btn-danger' data-ng-click='\$scope.classForm.show = !\$scope.classForm.show'>Delete</button>" . "</td>");
  // echo("<td>" . "<button class='btn btn-xs btn-success' data-ng-click='\$scope.classForm.show = !\$scope.classForm.show'>Update</button>" . "</td>");
  echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>
