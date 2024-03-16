<?php
session_start();

include 'db.php';

if (isset($_SESSION['username'])) {

    $check = mysqli_query($con, "SELECT * FROM customers WHERE username='" . $_SESSION['username'] . "'");
    $rows = mysqli_num_rows($check);

    if ($rows != 0) {
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
                <title>Cart | GREENHOUSE-SHOP</title>
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
                <div class="header_top"><!--header_top-->

                </div><!--/header_top-->

                <div class="header-middle" style="background-color:#A6BF40"><!--header-middle-->
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="logo pull-left">
                                    <a href="index.php"><h5>GREENHOUSE MARKET</h5></a>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="shop-menu pull-right">
                                    <ul class="nav navbar-nav">
                                        <li><a href="account.php" style=" background-color: #A6BF40"><i
                                                        class="fa fa-user"></i> Account</a></li>
                                        <li><a href="cart.php" style=" background-color: #A6BF40"><i
                                                        class="fa fa-shopping-cart"></i> Cart</a></li>
                                        <li><a href="login.php" style=" background-color: #A6BF40"><i
                                                        class="fa fa-lock"></i> Login</a></li>
                                        <li><a href="login.php?action=logout" style=" background-color: #A6BF40"><span
                                                        class="glyphicon glyphicon-off"></span> Logout</a></li>
                                                        <?php
                                        if (@$_GET['action'] == "logout") {
                                            session_destroy();
                                            header("Location: login.php");
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
                                        <li><a href="index.php">Home</a></li>
                                        <li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                            <ul role="menu" class="sub-menu">
                                                <li><a href="cart.php" class="active">Cart</a></li>
                                                <li><a href="login.php">Login</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="search_box pull-right">
                                    <form method="post" action="">
                                        <input type="text" name="searchresult" placeholder="Search"/>
                                        <button type="submit" class="btn btn-primary" name="search"
                                                style="margin-bottom:15px;">
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <?php
                            $search = @$_POST['searchresult'];

                            if (isset($_POST['searchresult'])) {
                                if ($search) {
                                    $query = mysqli_query($con, "SELECT * FROM try WHERE product_name LIKE '%$search%'");

                                    while ($try = mysqli_fetch_object($query)) {
                                        ?>
                                        <div class="col-lg-3">
                                            <p><?php echo $try->product_id; ?></p>
                                            <img src="latest/<?php echo $try->product_image1; ?>" class="img-responsive"
                                                 height="200"/>
                                            <p><?php echo $try->product_name; ?></p>
                                            <h2>Ksh <?php echo $try->price; ?></h2>
                                            <p><?php echo $try->description; ?></p>
                                           // <a href="cart.php?id=<?php echo $try->product_id; ?>">Order Now</a>
                                        </div>
                                        <?php
                                    }
                                }
                            }
                            ?>
                        </div>
                    </div>
                </div><!--/header-bottom-->
            </header><!--/header-->

            <section id="cart_items">

                <!-- Your existing cart items section -->

                <div class="container">
                    <div class="col-sm-8">
                        <!-- Cart items table -->
                        <table class="table">
                            <tr class="theading">
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Sub total</th>
                                <th>Option</th>
                            </tr>
                            <?php
                            $cart = isset($_SESSION['cart']) ? $_SESSION['cart'] : array();
                            $s = 0; // Total price initialization

                            foreach ($cart as $index => $cart_item) {
                                $s += $cart_item->price * $cart_item->quantity;
                                ?>
                                <tr>
                                    <td><?php echo $cart_item->id; ?></td>
                                    <td><?php echo $cart_item->name; ?></td>
                                    <td><?php echo $cart_item->price; ?></td>
                                    <td>
                                        <!-- Form to update quantity -->
                                        <form method="post" action="">
                                            <input type="hidden" name="index" value="<?php echo $index; ?>">
                                            <input type="number" name="quantity" value="<?php echo $cart_item->quantity; ?>" min="1" required>
                                            <button type="submit" name="update">Update</button>
                                        </form>
                                    </td>
                                    <td><?php echo $cart_item->price * $cart_item->quantity; ?></td>
                                    <td><a href="cart.php?index=<?php echo $index; ?>"
                                           onClick="return confirm('Are you sure?')">DELETE</a></td>
                                </tr>
                                <?php
                            }

                            // Update total amount in session
                            $_SESSION['total_amount'] = $s;
                            ?>
                            <tr>
                                <th colspan="5" align="right">Total Amount to pay</th>
                                <th align="left"><?php echo $s; ?></th>
                            </tr>
                        </table>
                        <a class="btn btn-primary" href="shopping.php">Continue Shopping</a>
                    </div>
                    <div class="col-sm-3">
                        <div class="shopper-info">
                        <p>Greenhouse Market Information</p>
                            <form method="post" action="">
                                <input type="text" placeholder="Postal code" name="postal">
                                <input type="text" placeholder="City" name="city">
                                <button class="btn btn-primary" name="pay" type="submit">Enter delivery address</button>
                        </div>
                        <br><br>
                        <button class="btn btn-primary" onclick="window.location.href='payment.php'">Click here to proceed to the payment page</button>
                    </div>
                </div>
            </section> <!--/#cart_items-->
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <footer id="footer"><!--Footer-->
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <p class="pull-left">Copyright © 2023 GREENHOUSE SHOP. All rights reserved.</p>
                            <p class="pull-right">Designed by <span><a target="_blank" href="#">BETTY MURIRA</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer><!--/Footer-->
            <script src="js/jquery.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.scrollUp.min.js"></script>
            <script src="js/jquery.prettyPhoto.js"></script>
            <script src="js/main.js"></script>
            <script>
                function paymentSuccessful() {
                    alert('Payment Successful!');
                }
            </script>
            </body>
            </html>

            <?php
        }
    }
} else {
    header("Location:login.php");
    exit;
}

// Handle quantity update and item deletion
if (isset($_POST['update'])) {
    $index = $_POST['index'];
    $quantity = $_POST['quantity'];
    if ($quantity > 0) {
        $_SESSION['cart'][$index]->quantity = $quantity;
    } else {
        // Remove item from cart if quantity is 0 or less
        unset($_SESSION['cart'][$index]);
    }
}
?>