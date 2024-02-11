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
    <title>Login | Greenhouse Shop</title>
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

</head><!--/head-->

<body>
<header id="header"><!--header-->
    </div><!--/header_top-->

    <div class="header-middle" style="background-color:#A6BF40"><!--header-middle-->
        <div class="container">
            <div class="row-sm-1">
                <div class="col-sm-4">
                    <div class="logo pull-left">

                        <a href="index.php"><h5>GREENHOUSE-SHOP</h5></a>
                    </div>

                </div>
                <div class="col-sm-8">
                    <div class="shop-menu pull-right">
                        <ul class="nav navbar-nav">
                            <li><a href="account.php" style=" background-color: #A6BF40"><i class="fa fa-user"></i>My
                                    Account</a></li>
                            <li><a href="cart.php" style=" background-color: #A6BF40"><i
                                            class="fa fa-shopping-cart"></i> Cart</a></li>
                            <li><a href="login.php" style=" background-color: #A6BF40"><i class="fa fa-lock"></i> Login
                                    / <span class="glyphicon glyphicon-user"></span>Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

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
                    <div class="mainmenu pull-left">
                        <ul class="nav navbar-nav collapse navbar-collapse">
                            <li><a href="index.php">Home</a></li>
                            <li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                <ul role="menu" class="sub-menu">
                                    <li><a href="index.php">Products</a></li>

                                    <li><a href="cart.php">Cart</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-18">
                    <div class="search_box pull-right">
                        <form method="post" action="">
                            <input type="text" name="searchresult" placeholder="Search"/>
                            <button type="submit" class="btn btn-default" name="search">Search</button>
                        </form>

                    </div>
                </div>
            </div>
            <div class="row">
                <?php
                include 'db.php';
                $search = @$_POST['searchresult'];

                if (isset($_POST['searchresult'])) {
                    if ($search) {
                        $query = mysqli_query($con, "SELECT * FROM products WHERE product_name LIKE '%$search%'");

                        while ($products = mysqli_fetch_object($query)) {

                            ?>
                            <div class="col-lg-3">
                                <p> <?php echo $products->product_id; ?></p>
                                <img src="<?php echo $products->product_image; ?>" class="img-responsive" height="200"/>
                                <p><?php echo $products->product_name; ?></p>
                                <h2>Ksh <?php echo $products->price; ?></h2>
                                <p><?php echo $products->product_description; ?></p>
                                <a href="cart.php?id=<?php echo $products->product_id ?>">Order Now</a>
                            </div>
                            <?php
                        }
                    }
                }
                ?>
            </div>
        </div>
    </div>
    </div><!--/header-bottom-->
</header><!--/header-->

<!--form-->
<div class="container">
    <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
            <div class="login-form"><!--login form-->
                <h2>Login to your account</h2>
                <form action="" method="post">
                    <input type="text" name="username" placeholder="username"/>
                    <input type="password" name="password" placeholder="Password"/>

                    <button type="submit" class="btn btn-default" name="login">Login</button>
                    <?php

                    require 'db.php';

                    $username = @$_POST['username'];
                    $password = @$_POST['password'];
                    $encrypt = sha1($password);
                    $username = mysqli_real_escape_string($con, $username);
                    $encrypt = mysqli_real_escape_string($con, $encrypt);

                    if (isset($_POST['login'])) {
                        if ($username && $password) {
                            $querry = mysqli_query($con, "SELECT username, password FROM customers where username = '" . $username . "'");
                            $check = mysqli_num_rows($querry);

                            if (mysqli_num_rows($querry) != 0) {
                                while ($row = mysqli_fetch_assoc($querry)) {
                                    $db_username = $row['username'];
                                    $db_password = $row['password'];
                                }

                                if ($username == $db_username && sha1($password) == $db_password) {
                                    @$_SESSION["username"] = $username;
                                    echo "<script>location.href = 'cart.php';</script>";
                                    // header("Location:cart.php");
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
                </form>
                <div class="shop-menu pull-right">
                    <ul class="nav navbar-nav">
                        <li><a href="forgetpass.php"><i class="fa fa-user"></i>Forgot_Password?</a></li>
                    </ul>
                </div>
            </div><!--/login form-->
        </div>
        <div class="col-sm-1">
            <h2 class="or">OR</h2>
        </div>
        <div class="col-sm-4">
            <div class="signup-form"><!--sign up form-->
                <h2>New User Signup!</h2>
                <form action="" method="post">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="username" placeholder="username"/>
                    <input type="text" name="mobile_no" placeholder="Mobile Number"/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="cpassword" placeholder="Confirm Password"/>
                    <button type="submit" class="btn btn-default" name="register">Signup</button>
                </form>
            </div><!--/sign up form-->
            <?php include 'customers.php'; ?>
        </div>
    </div>
</div>

<br><br><br><br><br><br><br><br><br><br><br><br><br>

<footer id="footer"> <!--Footer-->
    <div class="footer-top">
        <div class="container">

        </div>
    </div>

    <div class="footer-widget">

    </div>

    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <p class="pull-left">Copyright Â© 2023 GREENHOUSE SHOP. All rights reserved.</p>
                <p class="pull-right">Designed by <span><a target="_blank" href="#">betty</a></span></p>
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