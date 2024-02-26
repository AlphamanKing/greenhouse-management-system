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
    <title>Market</title>
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
    <div class="header-middle" style="background-color:#A6BF40"><!--header-middle-->
        <div class="container">
            <div class="row-sm-1">
                <div class="col-sm-24">
                    <div class="logo pull-left">
                        <a href="index.php"><h5>Greenhouse-Products</h5></a>
                    </div>
                </div>
                <div class="col-sm-24" style="background-color:#A6BF40">
                    <div class="shop-menu pull-right" style="background-color:#A6BF40">
                        <ul class="nav navbar-nav">
                            <li><a href="account.php" style=" background-color: #A6BF40"><i class="fa fa-user" "></i>My
                                    Account</a></li>
                            <li><a href="cart.php" style=" background-color: #A6BF40"><i
                                            class="fa fa-shopping-cart"></i> Cart</a></li>
                            <li><a href="login.php" style=" background-color: #A6BF40"><i class="fa fa-lock"></i> Login
                                    / <span class="glyphicon glyphicon-user"></span>Sign Up</a></li>
                            <li><a href="index.php?action=logout" style=" background-color: #A6BF40;"><span
                                            class="glyphicon glyphicon-off"></span> Logout</a></li>
                            <?php
                            if (@$_GET['action'] == "logout") {
                                session_destroy();
                                header("Location: index.php");
                            }
                            ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div><!--/header-middle-->
    <div class="header-bottom"><!--header-bottom-->
        <div class="container">
            <div class="row-sm-1">
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
                            <li><a href="indexx.php" class="active">Home</a></li>
                            <li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                <ul role="menu" class="sub-menu">
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
                            <button type="submit" class="btn btn-primary" name="search" style="margin-bottom:15px;">
                                Search
                            </button>
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
                    } else {
                        echo "<div class='alert alert-danger'><strong> Search Result!!! </strong>The item you are searching is out of stock.Please try another product
                                            <a href='#' class='close' data-dismiss = 'alert' aria-label ='close'>&times</a>
                                            </div>";
                    }
                }
                ?>
            </div>
        </div>
    </div><!--/header-bottom-->
</header><!--/header-->

<section id="slider"><!--slider-->
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#slider-carousel" data-slide-to="1"></li>
                        <li data-target="#slider-carousel" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <div class="col-sm-6">
                                <h1><span>G</span>-GRADE1</h1>
                                <h2>Get Quality Products here</h2>
                                <p>They last for long, and they are so sweet for spices</p>
                                <a href="index.php?action=electronic">
                                    <button type="button" class="btn btn-default get">Get now</button>
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <img src="images/home/images6.jpg" class="girl img-responsive" alt="laricpm"
                                     title="laricom"/>

                            </div>
                        </div>
                        <div class="item">
                            <div class="col-sm-6">
                                <h1>Grade2</h1>
                                <h2>The best Grade2 Tomatoes In East Africa</h2>
                                <p>Farmers don't be left behind, we are here for you </p>
                                <a href="index.php?action=fashion">
                                    <button type="button" class="btn btn-default get">Get it now</button>
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <img src="images/home/dress.png" class="girl img-responsive" alt=""/>

                            </div>
                        </div>

                        <div class="item">
                            <div class="col-sm-6">
                                <h1>Grade3 </h1>
                                <h2>All grade3 Tomatoes Available here</h2>

                                <a href="index.php?action=Sportsware">
                                    <button type="button" class="btn btn-default get">Get it now</button>
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <img src="images/home/images4.jpg" class="girl img-responsive" alt=""/>
                                <img src="images/home/images4.jpg" class="pricing" alt=""/>
                            </div>
                        </div>
                        <div class="item">
                            <div class="col-sm-6">
                                <h1>Grade4 "vunjika"</h1>
                                <h2>Available To all our Customers</h2>
                                <p></p>
                                <a href="index.php?action=motors">
                                    <button type="button" class="btn btn-default get">Get it now</button>
                                </a>
                            </div>
                            <div class="col-sm-6">
                                <img src="images/home/images13.jpg" class="girl img-responsive" alt=""/>

                            </div>
                        </div>

                    </div>

                    <a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>

            </div>
        </div>
    </div>
</section><!--/slider-->

<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <div class="left-sidebar">
                    <h2>Category</h2>
                    <div class="panel-group category-products" id="accordian"><!--category-productsr-->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                        <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                        Grade3
                                    </a>
                                </h4>
                            </div>
                            <div id="sportswear" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <ul>
                                        <?php
                                        include 'db.php';
                                        $check = mysqli_query($con, "SELECT * FROM products WHERE category='Grade3'");

                                        while ($products = mysqli_fetch_object($check)) {


                                            ?>
                                            <li style="text-transform: uppercase;"><a
                                                        href="cart.php?id=<?php echo $products->product_id ?>"><?php echo $products->product_name; ?></a><span
                                                        style="color:darkorange">(<?php echo $products->quantity; ?>
                                                    )</span></li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                        <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                        Grade2
                                    </a>
                                </h4>
                            </div>
                            <div id="mens" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <ul>
                                        <?php
                                        include 'db.php';
                                        $check = mysqli_query($con, "SELECT * FROM products WHERE category='Grade2'");

                                        while ($products = mysqli_fetch_object($check)) {
                                            ?>
                                            <li style="text-transform: uppercase;"><a
                                                        href="cart.php?id=<?php echo $products->product_id ?>"><?php echo $products->product_name; ?></a><span
                                                        style="color:darkorange">(<?php echo $products->quantity; ?>
                                                    )</span></li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                        <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                        Grade4
                                    </a>
                                </h4>
                            </div>
                            <div id="womens" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <ul>
                                        <?php
                                        include 'db.php';
                                        $check = mysqli_query($con, "SELECT * FROM products WHERE category='Grade4'");

                                        while ($products = mysqli_fetch_object($check)) {
                                            ?>
                                            <li style="text-transform: uppercase;"><a
                                                        href="cart.php?id=<?php echo $products->product_id ?>"><?php echo $products->product_name; ?></a><span
                                                        style="color:darkorange">(<?php echo $products->quantity; ?>
                                                    )</span></li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><a href="#">Grade1</a></h4>
                            </div>
                            <div class="panel-body">
                                <ul>
                                    <?php
                                    include 'db.php';
                                    $check = mysqli_query($con, "SELECT * FROM products WHERE category='Grade1'");

                                    while ($products = mysqli_fetch_object($check)) {
                                        ?>
                                        <li style="text-transform: uppercase;"><a
                                                    href="cart.php?id=<?php echo $products->product_id ?>"><?php echo $products->product_name; ?></a><span
                                                    style="color:darkorange">(<?php echo $products->quantity; ?>)</span>
                                        </li>
                                    <?php } ?>
                                </ul>
                            </div>
                        </div>

                    </div><!--/category-products-->
                </div>
            </div>

            <div class="col-sm-9 padding-right">
                <div class="features_items"><!--features_items-->
                    <h2 class="title text-center">Features Items</h2>

                </div><!--features_items-->

                <div class="category-tab"><!--category-tab-->
                    <div class="col-sm-12">

                        <ul class="nav nav-tabs">
                            <li class="active"><a href="index.php?action=Grade2"> Grade2</a></li>
                            <li><a href="index.php?action=Grade1">Grade1</a></li>
                            <li><a href="index.php?action=Grade3">Grade3</a></li>
                            <li><a href="index.php?action=Grade4">Grade4</a></li>

                        </ul>
                    </div>
                    <div class="tab-content">

                        <div class="tab-pane fade active in" id="tshirt">
                            <?php
                            if (@$_GET['action'] == "" || @$_GET['action'] == "Grade2") {
                                include 'fashion.php';
                            } else if (@$_GET['action'] == "Grade1") {
                                include 'electronic.php';
                            }
                            if (@$_GET['action'] == "addcart") {
                                require 'product_details.php';

                            }

                            if (@$_GET['action'] == "Grade4") {
                                require 'motors.php';

                            }

                            if (@$_GET['action'] == "Grade3") {
                                require 'sportsware.php';

                            }
                            ?>
                        </div>


                    </div>
                </div><!--/category-tab-->


            </div>
        </div>
    </div>
</section>

<footer id="footer"><!--Footer-->
    <div class="footer-top">
        <div class="container">

        </div>
    </div>

    <div class="footer-widget">
        <div class="container">

        </div>
    </div>

    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <p class="pull-left">Copyright © 2018 GREENHOUSE SHOP. All rights reserved.</p>
                <p class="pull-right">Designed by <span><a target="_blank" href="#">kelvinmutunga</a></span></p>
            </div>
        </div>
    </div>

</footer><!--/Footer-->


<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.scrollUp.min.js"></script>
<script src="js/price-range.js"></script>
<script src="js/jquery.prettyPhoto.js"></script>
<script src="js/main.js"></script>
</body>
</html>