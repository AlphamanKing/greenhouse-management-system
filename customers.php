<?php

require 'db.php';

$name = @$_POST['name'];
$username = @$_POST['username'];
$mobile_no = @$_POST['mobile_no'];
$email = @$_POST['email'];
$password = @$_POST['-password'];
$cpassword = @$_POST['-cpassword'];
$encrypt = sha1($password);

if (isset($_POST['register'])) {
    if ($name && $username && $mobile_no && $password && $cpassword) {
        if ($password == $cpassword) {
            $querry = mysqli_query($con, "INSERT INTO customers VALUES('$name','$username','$mobile_no','$email','$encrypt')");

            echo "<script>alert('Dear $name Successfully registered. login and purchase')</script>";
        } else {
            echo "<script>alert('Password does not match');</script>";
        }
    } else {
        echo "<script>alert('Fill all the fields');</script>";
    }
}
