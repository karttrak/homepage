<?php

  echo $_GET['yourname'] . $_GET['year'] . $_GET['month'] . $_GET['day'];
  $birthdate = $_GET['year'] . "-" . $_GET['month'] . "-" . $_GET['day'];

  $birthday = date_create($birthdate);
  $today = new DateTime("now");
  $interval = date_diff($birthday, $today);
  $age = $interval->format('%a days');
  echo "You are $age old";

?>