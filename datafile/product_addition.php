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
    <title>new products | E-SAMS SHOP</title>
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
    <div class="header_top"><!--header_top-->
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="contactinfo">
                        <ul class="nav nav-pills">
                            <li><a href=""><i class="fa fa-phone"></i> +254 704 286 441</a></li>
                            <li><a href=""><i class="fa fa-envelope"></i> sir.mwanzia@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="social-icons pull-right">
                        <ul class="nav navbar-nav">
                            <li><a href=""><i class="fa fa-facebook"></i></a></li>
                            <li><a href=""><i class="fa fa-twitter"></i></a></li>
                            <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                            <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                            <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div><!--/header_top-->

    <div class="header-middle"><!--header-middle-->
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="logo pull-left">
                        <a href="index.php"><h3 style="color:orange;">E-SAMS SHOP</h3></a>
                    </div>

                </div>
                <div class="col-sm-8">
                    <div class="shop-menu pull-right">
                        <ul class="nav navbar-nav">
                            <li><a href="#"><i class="fa fa-user"></i> Account</a></li>
                            <li><a href="checkout.php"><i class="fa fa-crosshairs"></i> Checkout</a></li>
                            <li><a href="cart.php"><i class="fa fa-shopping-cart"></i> Cart</a></li>
                            <li><a href="login.php"><i class="fa fa-lock"></i> Login</a></li>
                        </ul>
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
                                    <li><a href="shop.html">Products</a></li>
                                    <li><a href="product-details.html">Product Details</a></li>
                                    <li><a href="checkout.php">Checkout</a></li>
                                    <li><a href="cart.php">Cart</a></li>
                                    <li><a href="login.php">Login</a></li>
                                </ul>
                            </li>

                            <li><a href="product_addition.php" class="active">Product Addition</a></li>

                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="search_box pull-right">
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
            </div>
        </div>
    </div><!--/header-bottom-->
</header><!--/header-->

<div id="contact-page" class="container">
    <div class="signup-form">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="title text-center">ADD <strong>NEW PRODUCT</strong></h2>
                <form class="col-lg-6" method="post" action="">
                    <select name="category" class="form-control">
                        <option value="fashion">FASHION</option>
                        <option value="electronic">ELECTRONIC</option>
                        <option value="motors">MOTORS</option>
                        <option value="sportsware">SPORTSWARE</option>
                    </select><br/>
                    <input class="form-control" type="text" name="product_name" placeholder="Enter product name"/><br/>
                    <textarea class="form-control" name="description"
                              placeholder="Enter description of the product"></textarea><br/>
                    <input class="form-control" type="text" name="price" placeholder="Enter price"/><br/>
                    <select name="quantity" class="form-control">
                        <option value="">Select quantity</option>
                        <?php
                        $i = 1;
                        for ($i = 1; $i < 1 + 10; $i++) {
                            echo "<option value=" . $i . ">" . $i . "</option>";
                        }
                        ?>
                    </select><br/>
                    <button class="btn btn-block btn-success" type="submit" name="product">ADD PRODUCT</button>
                    <br/>
                    <?php
                    require $_SERVER['DOCUMENT_ROOT'] . '/db.php';
                    $category = @$_POST['category'];
                    $product_name = @$_POST['product_name'];
                    $description = @$_POST['description'];
                    $price = @$_POST['price'];
                    $quantity = @$_POST['quantity'];

                    if (isset($_POST['product'])) {
                        if ($category && $product_name && $description && $price && $quantity) {
                            $querry = mysqli_query($con, "INSERT INTO products VALUES('','$category','images/home/sale.PNG','$product_name','$description','$price','$quantity')");

                            echo "<p class='alert alert-success'>Product added.<a href='product_addition.php?action=image'>Click here to enter product image<a></p>";

                            $_SESSION["product_name"] = $product_name;

                        } else {
                            echo "<script>alert('Fill all the fields');</script>";
                        }
                    }
                    ?>
                </form>
                <div class="col-lg-6">

                    <?php
                    echo $product_name;
                    if (@$_GET['action'] == "image") {
                        include $_SERVER['DOCUMENT_ROOT'] . '/product_image.php';
                    }
                    ?>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">

            </div>
            <div class="col-md-3"></div>
        </div>


        <footer id="footer"><!--Footer-->
            <div class="footer-top">

            </div>

            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <p class="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
                        <p class="pull-right">Designed by <span><a target="_blank"
                                                                   href="http://www.themeum.com">Themeum</a></span></p>
                    </div>
                </div>
            </div>

        </footer><!--/Footer-->


        <script src="js/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
        <script type="text/javascript" src="js/gmaps.js"></script>
        <script src="js/contact.js"></script>
        <script src="js/price-range.js"></script>
        <script src="js/jquery.scrollUp.min.js"></script>
        <script src="js/jquery.prettyPhoto.js"></script>
        <script src="js/main.js"></script>
</body>
</html>