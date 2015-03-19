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

$sql="INSERT INTO assignments (username, class, assignment, dueDate)
VALUES ('$username', '$class', '$assignment', '$dueDate')";


if (!mysqli_query($con,$sql)) {
  die('Error: ' . mysqli_error($con));
}
echo "New class created";

mysqli_close($con);
?>