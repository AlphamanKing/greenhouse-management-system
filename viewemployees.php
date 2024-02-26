<?php
include 'db.php';
?>
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/html">
    <head>
        <title>Date and Time Picker</title>
        <!--fonts-->
        <!--light-box-css-->
        <!--bootstrap-->
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <!--Date-Time-pickercss-->
        <link href="css/bootstrap-datetimepicker.css" rel="stylesheet">
        <!--default-js-->
        <script src="js/jquery-2.1.4.min.js"></script>
        <!--bootstrap-js-->
        <script src="js/bootstrap.min.js"></script>
        <!--script-->
        <script src="js/moment-with-locales.js"></script>
        <script src="js/bootstrap-datetimepicker.js"></script>
        <!--move-top-js-->
        <!--script-roll-->
    </head>
    <body>
    <div class="tabular">
        <center><font color="green"><h3>View  Employees Details </h3></font></center>
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
                            <th style="background-color:darkorange;">salary</th>
                        </tr>
                        <?php
                        $check = mysqli_query($con, "SELECT * FROM employee ");

                        ?>

                        <?php while ($result = mysqli_fetch_object($check)) {
                            ?>
                            <tr>
                                <td><?php echo $result->Employee_Id; ?></td>
                                <td><?php echo $result->username; ?></td>
                                <td><?php echo $result->Last_Name; ?></td>
                                <td><?php echo @$result->Mobile; ?></td>
                                <td><?php echo $result->Email; ?></td>
                                <td><?php echo $result->work; ?></td>
                                <td><?php echo $result->salary; ?></td>
                            </tr>
                        <?php }
                        ?>
                    </table>
                </div><!--/header-bottom-->


            </form>


        </div>
    </div>
    </body>
    </html>
<?php

?>