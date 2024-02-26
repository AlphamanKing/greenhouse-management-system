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
    <center>
    <body>
    <div class="tabular">
        <h3>Get To know the updates </h3>
        <hr/>
        <div class="tabular">
            <div class="form">
                <form method="post" action="">

                    <div class="col-lg-12">

                        <table class=" table table-striped">
                            <tr class="theading">

                                <th style="background-color:darkorange;">news</th>
                            </tr>
                            <?php

                            $check = mysqli_query($con, "SELECT * FROM giveupdates ");

                            ?>

                            <?php while ($result = mysqli_fetch_object($check)) { ?>
                                <tr>

                                    <td><?php echo $result->news; ?></td>
                                </tr>
                            <?php } ?>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </body>
    </center>
    </html>
<?php

?>