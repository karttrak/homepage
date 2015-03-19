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
$password = mysqli_real_escape_string($con, $_POST['password']);

$sql="SELECT * FROM users 
	WHERE user='$username' AND password='$password'";

if (!mysqli_query($con,$sql)) {
  die('Error: ' . mysqli_error($con));
}

echo "Logged in successfully."

mysqli_close($con);
?>
