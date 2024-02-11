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
<div id="contact-page" class="container">
    <div class="signup-form">
        <div class="row">
            <div class="col-sm-12">
                <h2 class="title text-center">ADD <strong>NEW PRODUCT</strong></h2>
                <form class="col-lg-6" method="post" action="">
                    <select name="category" class="form-control">
                        <option value="Grade2">Grade2</option>
                        <option value="Grade1">Grade1</option>
                        <option value="Grade4">Grade4</option>
                        <option value="Grade3">Grade3</option>
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
                    require 'db.php';
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
                        include 'product_image.php';
                    }
                    ?>
                </div>
            </div>
        </div>

        <footer id="footer"><!--Footer-->
            <div class="footer-top">

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