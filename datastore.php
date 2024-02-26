<?php

require 'db.php';

$category = @$_POST['category'];
$data_details = @$_POST['data_details'];
$challeges = @$_POST['challeges'];

if (isset($_POST['store'])) {
    if ($category && $data_details && $challeges) {
        $querry = mysqli_query($con, "INSERT INTO daily_record VALUES('$Category','$datadetails','$challeges')");
        echo "<script>alert('Data Successfully Entered the data')</script>";
    } else {
        echo "<script>alert('Fill all the fields');</script>";
    }
}
?>