<?php
session_start();

include 'db.php';
if ($_SESSION['username']) {

    $check = mysqli_query($con, "SELECT * FROM customers WHERE username='" . $_SESSION['username'] . "'");
    $rows = mysqli_num_rows($check);

    if (mysqli_num_rows($check) != 0) {
        while ($row = mysqli_fetch_assoc($check)) {

            $username = $row['username'];
            ?>

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="">
                <meta name="author" content="">
                <title><?php echo $row['name']; ?>| Greenhouse</title>
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
                <link rel="apple-touch-icon-precomposed" sizes="144x144"
                      href="images/ico/apple-touch-icon-144-precomposed.png">
                <link rel="apple-touch-icon-precomposed" sizes="114x114"
                      href="images/ico/apple-touch-icon-114-precomposed.png">
                <link rel="apple-touch-icon-precomposed" sizes="72x72"
                      href="images/ico/apple-touch-icon-72-precomposed.png">
                <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch-icon-57-precomposed.png">
            </head><!--/head-->

            <body>
            <header id="header"><!--header-->


                <div class="header-middle" style="background-color:#A6BF40"><!--header-middle-->
                    <div class="container">
                        <div class="row-sm-1">
                            <div class="col-sm-4">
                                <div class="logo pull-left">
                                    <a href="index.php"><h3>GREENHOUSE-SHOP</h3></a>
                                </div>

                            </div>
                            <div class="col-sm-8">
                                <div class="shop-menu pull-right">
                                    <ul class="nav navbar-nav">
                                        <li><a href="login.php" style=" background-color: #A6BF40"><i
                                                        class="fa fa-user"></i> Account</a></li>
                                        <li><a href="cart.php" style=" background-color: #A6BF40"><i
                                                        class="fa fa-shopping-cart"></i> Cart</a></li>
                                        <li><a href="login.php" style=" background-color: #A6BF40"><i
                                                        class="fa fa-lock"></i> Login</a></li>
                                        <li><a href="index.php?action=logout" style=" background-color: #A6BF40"><span
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
                                        <li><a href="index.php" class="active">Home</a></li>
                                        <li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                            <ul role="menu" class="sub-menu">


                                                <li><a href="cart.php">Cart</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
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
                                            <img src="<?php echo $products->product_image; ?>" class="img-responsive"
                                                 height="200"/>
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
                    <div class="row">
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                            <h4 style="color:darkorange;"><?php echo $row['name']; ?> below is a record of your
                                purchases</h4>
                            <table class=" table table-striped">
                                <tr class="theading">
                                    <th style="background-color:darkorange;">Date of purchase</th>
                                    <th style="background-color:darkorange;">City</th>
                                    <th style="background-color:darkorange;">Postal code</th>
                                    <th style="background-color:darkorange;">Total amount paid</th>
                                </tr>
                                <?php
                                $check = mysqli_query($con, "SELECT * FROM transactions WHERE username='" . $_SESSION['username'] . "'");

                                ?>

                                <?php while ($result = mysqli_fetch_object($check)) { ?>
                                    <tr>
                                        <td><?php echo $result->transaction_date; ?></td>
                                        <td><?php echo $result->city; ?></td>
                                        <td><?php echo $result->postal_code; ?></td>
                                        <td><?php echo $result->total_amount; ?></td>
                                    </tr>
                                <?php } ?>
                            </table>
                        </div>
                        <div class="col-sm-2"></div>
                    </div>
                </div>
                </div><!--/header-bottom-->
            </header><!--/header-->

            <section>
                <div class="container">

                </div>
            </section>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <footer id="footer"><!--Footer-->


                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <p class="pull-left">Copyright © 2018 GREENHOUSE SHOP. All rights reserved.</p>
                            <p class="pull-right">Designed by <span><a target="_blank" href="#">BETTY MURIRA</a></span>
                            </p>
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
            <?php
        }
    }


} else {
    header("Location:login.php");
}

?>