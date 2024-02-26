<?php
session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Forget Password | Greenhouse Shop</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/prettyPhoto.css" rel="stylesheet">
    <link href="css/price-range.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    <link rel="shortcut icon" href="images/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch-icon-57-precomposed.png">
    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;

        }

        .topnav {
            overflow: hidden;
            background-color: green;
        }

        .topnav a {
            float: right;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 10px;
        }

        .forget {
            alignment: center;

        }

        .topnav a:hover {
            background-color: #ddd;
            color: black;
        }

        .active {
            background-color: #4CAF50;
            color: white;
        }

        .topnav .icon {
            display: none;
        }

    </style>
</head><!--/head-->

<body>
<header id="header"><!--header-->
    <div class="header_top"><!--header_top-->

    </div><!--/header_top-->
    <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="topnav" id="myTopnav" style="font-family:Comic Sans MS;">

            <a href="login.php"><i class="fa fa-lock"></i> Login / <span
                        class="glyphicon glyphicon-user"></span>Sign Up</a>
            <a href="cart.php"><i class="fa fa-shopping-cart"></i> Cart</a>
            <a href="account.php"><i class="fa fa-user"></i>My Account</a>
            <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
        </div>
    </div>

    </div><!--/header-middle-->

    <div class="header-bottom"><!--header-bottom-->
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div><!--/header-bottom-->
</header><!--/header-->

<!--form-->
<div class="forget">
    <div class="container">
        <div class="col-sm-6">
            <div class="signup-form"><!--sign up form-->
                <h2>User Forget Password!</h2>
                <form action="" method="post">
                    <input type="text" name="username" placeholder="username"/>
                    <input type="text" name="mobile_no" placeholder="Mobile Number"/>
                    <input type="password" name="password" placeholder="new Password"/>
                    <input type="password" name="cpassword" placeholder="Confirm new Password"/>
                    <button type="submit" class="btn btn-default" name="change" style="margin-bottom: 110px;">Change
                        Password
                    </button>
                </form>
            </div><!--/sign up form-->
        </div>
    </div>
</div>
</body>

<?php

require 'db.php';
$name = @$_POST['name'];
$username = @$_POST['username'];
$mobile_no = @$_POST['mobile_no'];
$password = @$_POST['password'];
$cpassword = @$_POST['cpassword'];
$encrypt = sha1($password);

if (isset($_POST['change'])) {
    if ($username && $mobile_no && $password && $cpassword) {
        if ($password == $cpassword) {
            $querry = mysqli_query($con, "UPDATE customers SET password='$encrypt' WHERE username='$username' && mobile_no='$mobile_no'");

            echo "<script>alert('Dear Customer you have Successfully Changed your password. login and purchase')</script>";

        } else {
            echo "<script>alert('UserName does not match');</script>";
        }
    } else {
        echo "<script>alert('Fill all the fields');</script>";
    }
}
?>


<footer id="footer"><!--Footer-->
    <div class="footer-top">
        <div class="container">

        </div>
    </div>

    <div class="footer-widget">

    </div>

    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <p class="pull-left"><b>Copyright Â© 2018 GREENHOUSE SHOP. All rights reserved.</b></p>
                <p class="pull-right">Designed by <span><a target="_blank" href="#">kelvinmutunga</a></span></p>
            </div>
        </div>
    </div>

</footer><!--/Footer-->


<script src="js/jquery.js"></script>
<script src="js/price-range.js"></script>
<script src="js/jquery.scrollUp.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.prettyPhoto.js"></script>
<script src="js/main.js"></script>
</body>
</html>