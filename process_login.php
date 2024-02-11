<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Untitled Document</title>
</head>

<body>
<?php
session_start();
require 'db.php';

$username = @$_POST['username'];
$password = @$_POST['password'];
$encrypt = sha1($password);

if (isset($_POST['login'])) {
    if ($username && $password) {
        $querry = mysqli_query($conn, "SELECT username, password FROM customers where username = '" . $username . "'");
        $check = mysqli_num_rows($querry);

        if (mysqli_num_rows($querry) != 0) {
            while ($row = mysqli_fetch_assoc($querry)) {
                $db_username = $row['username'];
                $db_password = $row['password'];
            }

            if ($username == $db_username && $password == $db_password) {
                @$_SESSION["username"] = $username;
                header("Location:cart.php");
            } else {
                echo "<script>alert('Wrong Details');</script>";
            }
        } else {
            echo "<script>alert('Cannot find the username');</script>";
        }
    } else {
        echo "<script>alert('fill all the fields');</script>";
    }
}
?>
</body>
</html>
