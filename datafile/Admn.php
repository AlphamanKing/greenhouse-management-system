<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>Untitled Document</title>
</head>

<body>
</body>
</html>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>our homepage</title>

    <link href="css/bootstrap.min.css" rel="stylesheet"/>
    <!--
  
        <link href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">

        <link href="css/bootstrap.css" rel="stylesheet"/>

        <!-- global styles -->
    <link href="css/style.css" rel="stylesheet"/>


</head>
<body>
<div id="top-bar" class="container">
    <div class="row">
        <div>
            <div class="container">
                <div class="form-group">
                    <div class="input-group">
                        <form action="index.html" method="post">
                            <input type="submit" name="search_text" value="Search"
                                   style="width:150px; height:40px; border-radius:5px;"/>
                        </form>
                    </div>
                </div>

                <div id="top-bar" class="container">
                    <div class="span8">
                        <div class="account pull-center">
                            <div class="col-lg-12 header">
                                <h1>ELIKZO ENTERPRISES ADMIN DASHBOARD</h1>
                                <p> save your money</p>

                            </div>


                            <div class="col-lg-12 header">


                                <link rel="stylesheet" type="text/css" href="style.css"/>
                            </div>


                            <div class="row">
                                <div class="col-lg-9 main">

                                    <div class="col-lg-4 left">
                                        <?php
                                        echo "<h3>Keep Daily Records <br/> <a href='Admn.php?action=Record'>Record</a></h3>";
                                        if (@$_GET['action'] == "Record") {
                                            echo '<br /><br />
                     <form method="post" action="" class="form-horizontal">
                <p>
                    Customer Name:<br />
                    <input class="form-control" type="text" name="name" placeholder="Full name" />
                   
                </p>
                <p>
                    sold Item:<br />
                    <input class="form-control" type="test" name="item" placeholder="sold Item" />
                </p>
                
                 <p>
                    Quantity:<br />
                    <input class="form-control" type="test" name="quantity" placeholder="quantity" />
                </p>
                 <p>
                    Price:<br />
                    <input class="form-control" type="test" name="Price" placeholder="price" />
                </p>
				
                <p>
                    <button class="btn btn-lg btn-primary btn-block btn-theme" type="submit" name="Record">Daily Record</button>
                </p>
            </form>
                   ';
                                        }
                                        ?>

                                    </div>
                                </div>
                            </div>


                            <?php
                            include $_SERVER['DOCUMENT_ROOT'] . '/db.php';
                            $name = @$_POST['name'];
                            $item = @$_POST['item'];
                            $quantity = @$_POST['quantity'];
                            $price = @$_POST['Price'];


                            if (isset($_POST['Record'])) {

                                if ($name && $item && $quantity && $price && $category) {

                                    if ($query = mysqli_query($con, "INSERT INTO record VALUES('$name','$item','$quantity','$price')")) {

                                        echo "<script>alert('$name, data is succefully recorded');</script>";
                                    } else {

                                        echo "<script>alert('cannot connect to server');</script>";
                                    }
                                } else {
                                    echo "<script>alert('Fill all the fields above');</script>";
                                }

                            }


                            ?>
                            <div class="row">
                                <div class="col-lg-9 main">

                                    <div class="col-lg-4 left">

                                        <?php
                                        ini_set('mysql.connect_timeout', 300);
                                        ini_set('default_socket_timeout', 300);
                                        ?>
                                        <?php
                                        echo "<h3>Add more images of new products <br/> <a href='Admn.php?action=submit'>Upload</a></h3>";
                                        if (@$_GET['action'] == "submit") {
                                            echo '<br /><br />
                     <form method="post" enctype="multipart/form-data" class="form-horizontal">
					 
					 <input class="form-control" type="text" name="product_name" placeholder="Enter name of product"/><br /><br />
					 <input class="form-control" type ="text" name="price" placeholder="price"/><br /><br />
					  <input class="form-control" type="test" name="category" placeholder="category" /><br /><br />
                <p>
                   <input type="submit" name="submit" value="Add new product"/>
                </p>
            </form>
                   ';
                                        }
                                        ?>

                                    </div>
                                </div>
                            </div>

                            <?php
                            if (isset($_POST['submit'])) {

                                $product_name = @$_POST['product_name'];
                                $price = @$_POST['price'];
                                $category = @$_POST['category'];

                                if ($product_name && $price && $category) {

                                    if ($query = mysqli_query($con, "INSERT INTO store VALUES('','$product_name','$price','$category')")) {

                                        echo "product added. <a href='Admn.php?action=image'>Add product image</a>";
                                        $_SESSION["product_name"] = $product_name;
                                    }


                                }

                            }
                            if (@$_GET['action'] == "image") {

                                include 'image.php';
                            }
                            ?>


</body>
</html>