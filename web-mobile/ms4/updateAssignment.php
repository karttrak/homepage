<?php
$con=mysqli_connect("stardock.cs.virginia.edu","cs4720kat4ma","fall2014","cs4720kat4ma");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// escape variables for security
$username = mysqli_real_escape_string($con, $_POST['username']);
$class = mysqli_real_escape_string($con, $_POST['classTitle']);
$assignment = mysqli_real_escape_string($con, $_POST['assignment']);
$dueDate = mysqli_real_escape_string($con, $_POST['dueDate']);

mysqli_query($con,"UPDATE assignments SET username='$username', class='$class', assignment='$assignment', dueDate='$dueDate'
	WHERE assignment='$assignment', dueDate='$dueDate'");

mysqli_close($con);
?>