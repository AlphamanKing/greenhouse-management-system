<!DOCTYPE html>
<html lang="en">
<head>
    <title>Greenhouse management system</title>
<link href="css/emppage/style.css" rel="stylesheet" type="text/css"/>
<link href="datafile/css/style.css" rel="stylesheet" type="text/css"/>
<script type="application/x-javascript"> addEventListener("load", function () {
        setTimeout(hideURLbar,);
    }, false);

    function hideURLbar() {
        window.scrollTo(0, 1);
    } </script>


<link href="web/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<!--Date-Time-pickercss-->
<link href="css/bootstrap-datetimepicker.css" rel="stylesheet">
<!--default-js-->
<script src="web/js/jquery-2.1.4.min.js"></script>
<!--bootstrap-js-->
<script src="js/bootstrap.min.js"></script>
<!--script-->
<script src="js/moment-with-locales.js"></script>
<script src="web/js/bootstrap-datetimepicker.js"></script>
<!--move-top-js-->

<script>
    $(document).ready(function () {
        $(".leave_history1").click(function () {
            $(".header").hide();
            $(".types").hide();
            $(".app").hide();
            $(".leave_history").slideDown("slow");
            $(".record").hide();
            $(".products").hide();
        });


        $(".types_leave").click(function () {
            $(".header").hide();
            $(".leave_history").hide();
            $(".types").slideDown("slow");
            $(".app").hide();
            $(".record").hide();
            $(".products").hide();
        });

        $(".home").click(function () {
            $(".header").show();
            $(".leave_history").hide();
            $(".types").hide();
            $(".app").hide();
            $(".record").hide();
            $(".products").hide();

        });
        $(".application").click(function () {
            $(".header").hide();
            $(".leave_history").hide();
            $(".types").hide();
            $(".app").show();
            $(".record").hide();
            $(".products").hide();
        });

        $(".records").click(function () {
            $(".header").hide();
            $(".leave_history").hide();
            $(".types").hide();
            $(".record").show();
            $(".app").hide();
            $(".products").hide();
        });
        $(".products").click(function () {
            $(".header").hide();
            $(".leave_history").hide();
            $(".types").hide();
            $(".record").hide();
            $(".app").hide();
            $(".products").show();

        });


    });

    $(document).ready(function () {
        $("#date").datepicker({
            changeMonth: true,
            changeYear: true
        });
    });
</script>
<script>
    $(document).ready(function () {
        var date_input = $('input[name="date"]'); //our date input has the name "date"
        var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
        date_input.datepicker({
            format: 'mm/dd/yyyy',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
    })
</script>
</head>
<body>


<div class="row section">
    <div class="col-lg-10">
        <!--

        main content of home page

         -->
        <div class="row header">
            <h3 class="h3">Add Products For Customer To Choose</h3>
            <hr/>
            <div class="form">
                <form class="col-lg-6" method="post" action="">
                    <select name="category" class="form-control">
                        <option value="Grade2">Grade2</option>
                        <option value="Grade1">Grade1</option>
                        <option value="Grade4">Grade4</option>
                        <option value="Grade3">Grade3</option>
                    </select><br/>
                    <input class="form-control" type="text" name="product_name"
                           placeholder="Enter product name"/><br/>
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
                    <button class="btn btn-block btn-success" type="submit" name="product">ADD PRODUCT
                    </button>

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

                            echo "<p class='alert alert-success'>Product added.<a href='Adnin.php?action=image'>Click here to enter product image<a></p>";

                            $_SESSION["product_name"] = $product_name;

                        } else {
                            echo "<script>alert('Fill all the fields');</script>";
                        }
                    }
                    ?>
                </form>


                <?php
                echo $product_name;
                if (@$_GET['action'] == "image") {
                    include 'product_image.php';
                }
                ?>

            </div>

        </div>
        <!-- Employee Profile in Leave history row  -->



        <!-- view daily records in application raw -->

        <!--EMPLOYEE PORTAL-->
        <!-- emp portal-->
        <div class="row end">
            <p class="hr">&nbsp;</p>
            <hr/>
        </div>
    </div>

</div>

</body>
</html>
