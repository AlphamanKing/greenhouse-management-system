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
     <center><font color="green">   <h3>View Daily Records </h3></font></center>
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
    </body>
    </html>
<?php

?>