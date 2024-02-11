<?php
session_start();

include 'db.php';
if ($_SESSION['username']) {

    $check = mysqli_query($con, "SELECT * FROM employee WHERE username='" . $_SESSION['username'] . "'");
    $rows = mysqli_num_rows($check);

    if ($rows != 0) {
        while ($row = mysqli_fetch_assoc($check)) {

            $username = $row['username'];
            ?>

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Greenhouse management system</title>
                <link href="datafile/css/style.css" rel="stylesheet" type="text/css"/>
                <script type="application/x-javascript"> addEventListener("load", function () {
                        setTimeout(hideURLbar, 0);
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
                        });


                        $(".types_leave").click(function () {
                            $(".header").hide();
                            $(".leave_history").hide();
                            $(".types").slideDown("slow");
                            $(".app").hide();
                            $(".record").hide();
                        });

                        $(".home").click(function () {
                            $(".header").show();
                            $(".leave_history").hide();
                            $(".types").hide();
                            $(".app").hide();
                            $(".record").hide();

                        });
                        $(".application").click(function () {
                            $(".header").hide();
                            $(".leave_history").hide();
                            $(".types").hide();
                            $(".app").show();
                            $(".record").hide();
                        });

                        $(".records").click(function () {
                            $(".header").hide();
                            $(".leave_history").hide();
                            $(".types").hide();
                            $(".record").show();
                            $(".app").hide();
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

            <div class="row navbar">

                <center>
                    <div class="col-lg-6"><h4>Admin Greenhouse management system(DASHBOARD)</h4>
                        <div class=""><h4 style="color:orange;">Dear <?php echo $row['username'] ?> You are the
                                Admin</h4></div>
                        <br/>
                    </div>
                </center>
                <div class="col-lg-6 logout">
                    <form method="post" action="indexx.php?action=logout">

                        <button class="btn btn-theme btn-danger" type="submit"> LOGOUT</button>
                        <?php
                        if (@$_GET['action'] == "logout") {
                            session_destroy();
                            header("Location: indexx.php");
                        }
                        ?>
                    </form>
                </div>

            </div>
            <div class="row section">

                <div class="col-lg-2 links">
                    <ul>
                        <hr/>
                        <li><a class="home" href="#">Add Product</a></li>
                        <hr/>
                        <li><a class="types_leave" href="#">View Customer</a></li>
                        <hr/>
                        <li><a class="records" href="#">View Daily Records</a></li>
                        <hr/>
                        <li><a class="leave_history1" href="#leave_history">Employee's Account</a></li>
                        <hr/>
                        <li><a class="application" href="#">Timers</a></li>

                    </ul>
                </div>
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
                    <!-- View and update Employees in Leave history row  -->
                    <div class="row leave_history" style="display: none;">
                        <h3>View and Create Employees Details </h3>
                        <hr/>
                        <div class="form">
                            <form method="post" action="">
                                <div class="col-lg-7">
                                    <span>List af all Employees </span>
                                    <table class=" table table-striped">
                                        <tr class="theading">
                                            <th style="background-color:darkorange;">EMP_ID</th>
                                            <th style="background-color:darkorange;">First Name</th>
                                            <th style="background-color:darkorange;">Last Name</th>
                                            <th style="background-color:darkorange;">Mobile No</th>
                                            <th style="background-color:darkorange;">Email</th>
                                            <th style="background-color:darkorange;">Work Description</th>
                                        </tr>
                                        <?php
                                        $check = mysqli_query($con, "SELECT * FROM employee ");

                                        ?>

                                        <?php while ($result = mysqli_fetch_object($check)) { ?>
                                            <tr>
                                                <td><?php echo $result->Employee_Id; ?></td>
                                                <td><?php echo $result->username; ?></td>
                                                <td><?php echo $result->Last_Name; ?></td>
                                                <td><?php echo @$result->Mobile; ?></td>
                                                <td><?php echo $result->Email; ?></td>
                                                <td><?php echo $result->work; ?></td>
                                            </tr>
                                        <?php } ?>
                                    </table>
                                </div><!--/header-bottom-->

                                <div class="col-lg-5">
                                    <span>Create Employees Account </span>
                                    <div class="signup-form"><!--sign up form-->
                                        <form action="" method="post">
                                            Employee Id:<input class="form-control" type="text" name="empId"
                                                               placeholder="employee Id"/><br/>
                                            First Name:<input class="form-control" type="text" name="Fname"
                                                              placeholder="first Name"/><br/>
                                            Last name:<input class="form-control" type="text" name="Lname"
                                                             placeholder="last name"/><br/>
                                            Mobile Number:<input class="form-control" type="text" name="mobile_no"
                                                                 placeholder="Mobile Number"/><br/>
                                            Email Address:<input class="form-control" type="email" name="email"
                                                                 placeholder="Email Address"/><br/>
                                            Work Description:<input class="form-control" type="text" name="work"
                                                                    placeholder="work description"/><br/>
                                            Password<input class="form-control" type="password" name="password"
                                                           placeholder="Password"/><br/>
                                            Confirm Password:<input class="form-control" type="password"
                                                                    name="cpassword"
                                                                    placeholder="Confirm Password"/><br/>
                                            <button type="submit" class="btn btn-theme btn-info" name="register1">
                                                Signup
                                            </button>
                                        </form>
                                    </div><!--/sign up form-->
                                    <?php

                                    require 'db.php';

                                    $employee = @$_POST['empId'];
                                    $fname = @$_POST['Fname'];
                                    $lname = @$_POST['Lname'];
                                    $mobile = @$_POST['mobile_no'];
                                    $email = @$_POST['email'];
                                    $work = @$_POST['work'];
                                    $password = @$_POST['password'];
                                    $cpassword = @$_POST['cpassword'];
                                    $encrypt = sha1($password);

                                    if (isset($_POST['register1'])) {
                                        if ($employee && $fname && $lname && $mobile && $email && $work && $password && $cpassword) {
                                            if ($password == $cpassword) {
                                                $querry = mysqli_query($con, "INSERT INTO employee(Employee_Id,username,Last_Name,Mobile,Email,work,password,product_image) VALUES('$employee','$fname','$lname','$mobile','$email','$work','$encrypt','images/home/sale.PNG')");

                                                $_SESSION["empId"] = $product_name;
                                                echo "<script>alert('Employee, $fname Successfully registered')</script>";
                                                echo "<script> window.location='Adnin.php#leave_history'</script>";
                                            } else {
                                                echo "<script>alert('Password does not match');</script>";
                                            }
                                        } else {
                                            echo "<script>alert('Fill all the fields');</script>";
                                            echo "<script> window.location='Adnin.php#leave_history'</script>";
                                        }
                                    }
                                    ?>
                                </div>
                            </form>

                            <div class="col-lg-6">

                                <?php
                                echo $fname;
                                if (@$_GET['action'] == "image1") {
                                    include 'profile.php';
                                }
                                ?>
                            </div>
                        </div>
                    </div>
                    <!-- View Orders in types of leaves raw -->
                    <div class="row types" style="display: none;">
                        <h3>Get To Know Customers in Details </h3>
                        <hr/>
                        <div class="tabular">
                            <div class="form">
                                <form method="post" action="">

                                    <div class="col-lg-12">
                                        <span>View Customer Details</span>
                                        <table class=" table table-striped">
                                            <tr class="theading">
                                                <th style="background-color:darkorange;">transaction date</th>
                                                <th style="background-color:darkorange;">Customer name</th>
                                                <th style="background-color:darkorange;">confirmation_code</th>
                                                <th style="background-color:darkorange;">Mobile No</th>
                                                <th style="background-color:darkorange;">postal Code</th>
                                                <th style="background-color:darkorange;">city</th>
                                                <th style="background-color:darkorange;">Total Amount</th>
                                            </tr>
                                            <?php

                                            $check = mysqli_query($con, "SELECT * FROM transactions ");

                                            ?>

                                            <?php while ($result = mysqli_fetch_object($check)) { ?>
                                                <tr>
                                                    <td><?php echo $result->transaction_date; ?></td>
                                                    <td><?php echo $result->username; ?></td>
                                                    <td><?php echo $result->confirmation_code; ?></td>
                                                    <td><?php echo @$result->mobile_no; ?></td>
                                                    <td><?php echo $result->postal_code; ?></td>
                                                    <td><?php echo $result->city; ?></td>
                                                    <td><?php echo $result->total_amount; ?></td>
                                                </tr>
                                            <?php } ?>
                                        </table>
                                        >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- view daily records in application raw -->
                    <div class="row app" style="display: none;">

                        <h3>Update Timer </h3>
                        <hr/>
                        <div class="form">
                            <form method="post" action="">

                                <div class="col-lg-7">

                                    <!-- Form code begins -->
                                    <?php
                                    include 'timer.php';
                                    ?>

                                    <!-- Form code ends -->
                                </div>
                            </form>

                        </div>
                    </div>

                    <!-- view daily records in application raw -->
                    <div class="row record" style="display: none;">
                        <h3>View Daily Records </h3>
                        <hr/>
                        <div class="form">
                            <form method="post" action="">

                                <div class="col-lg-12">
                                    <span>Get Daily Records From each User</span>
                                    <div class="wrapp wrapp-ad">

                                        <table class=" table table-striped">
                                            <tr class="theading">
                                                <th style="background-color:darkorange;">Job Type</th>
                                                <th style="background-color:darkorange;">Job details</th>
                                                <th style="background-color:darkorange;">challeges</th>
                                                <th style="background-color:darkorange;">Employee Name</th>

                                            </tr>
                                            <?php
                                            $check = mysqli_query($con, "SELECT * FROM daily_record ");
                                            ?>

                                            <?php while ($result = mysqli_fetch_object($check)) { ?>
                                                <tr>
                                                    <td><?php echo $result->Category; ?></td>
                                                    <td><?php echo $result->datadetails; ?></td>
                                                    <td><?php echo $result->challeges; ?></td>
                                                    <td><?php echo @$result->Username; ?></td>

                                                </tr>
                                            <?php } ?>
                                        </table>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <!--EMPLOYEE PORTAL-->
                    <!-- emp portal-->

            </body>
            </html>
            <?php
        }
    }


} else {
    header("Location:Emplogin.php");
}

?>

