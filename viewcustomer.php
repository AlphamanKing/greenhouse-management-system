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
                    </div>
                </form>
            </div>
        </div>
    </div>
    </body>
    </html>
<?php

?>