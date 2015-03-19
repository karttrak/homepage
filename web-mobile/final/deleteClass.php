<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

$con=mysqli_connect("stardock.cs.virginia.edu","cs4720kat4ma","fall2014","cs4720kat4ma");

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// escape variables for security
$username = mysqli_real_escape_string($con, $_POST['username']);
$classTitle = mysqli_real_escape_string($con, $_POST['classTitle']);

$sql="DELETE FROM classes 
	WHERE user='$username' AND class='$classTitle'";

if (!mysqli_query($con,$sql)) {
  die('Error: ' . mysqli_error($con));
}

echo "Deleting " . $classTitle . " from " . $username . "\'s account.";

mysqli_close($con);
?>