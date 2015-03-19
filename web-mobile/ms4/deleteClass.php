<?php
$con=mysqli_connect("stardock.cs.virginia.edu","cs4720kat4ma","fall2014","cs4720kat4ma");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// escape variables for security
$username = mysqli_real_escape_string($con, $_POST['username']);
$class = mysqli_real_escape_string($con, $_POST['classTitle']);

mysqli_query($con,"DELETE FROM classes 
	WHERE class='$class'");

mysqli_close($con);
?>