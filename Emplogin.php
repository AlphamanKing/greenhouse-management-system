<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Greenhouse management system</title>
    <link href="datafile/css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <link href="datafile/css/style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="container">


    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 form-wrapper">
            <form class="employees_form" method="post" action="">
                <center><h4>EMPLOYEES LOGIN</h4></center>
                Username:
                <input class="form-control" type="text" name="username"/>
                Password:
                <input class="form-control" type="password" name="password"/><br/>
                <!-- User type:
                 <select name="user_type" class="form-control">
                     <option value="" selected="">select your category</option>
                     <option value="employee">Employee</option>
                     <option value="hod">Customer</option>
                     <option value="admin">Administrator</option>
                 </select><br />-->
                <div class="row">
                    <div class="col-lg-6">
                        <button class="btn btn-success btn-block" name="login" type="submit">LOGIN</button>
                    </div>
                    <div class="col-lg-6">
                        <button class="btn btn-danger btn-block" name="cancel" type="reset">CANCEL</button>
                    </div>

                </div>
                <br/>

                <?php

require 'db.php';

$username = @$_POST['username'];
$password = @$_POST['password'];

if (isset($_POST['login'])) {
    if ($username && $password) {
        $querry = mysqli_query($con, "SELECT * FROM employee WHERE username = '$username'");
        $check = mysqli_num_rows($querry);

        if (mysqli_num_rows($querry) != 0) {
            while ($row = mysqli_fetch_assoc($querry)) {
                $db_username = $row['username'];
                $db_password = $row['password'];
            }

            if ($username == $db_username && $password == $db_password) {
                @$_SESSION["username"] = $username;
                echo "<script>location.href = 'employee_homepage.php';</script>";
                
            } else {
                echo "<script>alert('Wrong Details');</script>";
            }
        } else {
            echo "<script>alert('Cannot find the employee username');</script>";
        }
    } else {
        echo "<script>alert('fill all the fields');</script>";
    }
}
?>
            </form>
        </div>
        <div class="col-lg-4"></div>
    </div>
</div>

</body>
</html>