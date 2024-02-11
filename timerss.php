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
        <div class="col-lg-8">
            <div class="calender-element">
                <div class="form-group">
                    <br>
                    <font color="green"><p><b>Fertilizer should be applied after every 14days</b></p></font>
                    <span>Fertilizer Application Countdown</span>
                    <form method="post" action="">
                        <div class="input-group date modi_fic" id="datetimepicker1">
                            <input type='text' class="form-control modi_fic_srch" name="timer22"/>
                            <span class="input-group-addon btn-bg">
                        <span class="glyphicon glyphicon-calendar cal-form"></span>
                    </span>&nbsp;&nbsp;
                            <button type="submit" class="btn btn-theme btn-info" name="Reset1">Reset1</button>
                    </form>
                </div>
            </div>
            <?php

            require 'db.php';

            $timer22 = @$_POST['timer22'];

            if (isset($_POST['Reset1'])) {
                if ($timer22) {
                    //  $query_date = "INSERT INTO timerf (timeD) VALUES ('DATE: Manual Date', '2008-7-04')";
                    if ($timer22 != NULL) {
                        //  $querry = mysql_query("INSERT INTO timerf(ID,timeD) VALUES('$timer22','$TimerId')");

                        $query = mysqli_query($con, " UPDATE timerf SET timeD = '$timer22' WHERE ID = 12");
                        echo "<script>alert(' Successfully Reset fertilizer timer')</script>";
                    } else {
                        echo "<script>alert('Time not set');</script>";


                    }
                }
            }
            ?>
            <!--//script-->
            <script type="text/javascript">
                $(function () {
                    $('#datetimepicker1').datetimepicker();
                });
            </script>

            <!--//script-->
        </div>
        <br> </br><br>
        <div class="calender-element">
            <div class="form-group">
                <p><font color="green"><b>Pesticide should be applied after every 10 days (depending on the situation)</b></font></p>
                <span>Pesticide Application Countdown</span>
                <form method="post" action="">
                    <div class="input-group date modi_fic" id="datetimepicker2">
                        <input type='text' class="form-control modi_fic_srch" name="timer2"/>
                        <span class="input-group-addon btn-bg">
                        <span class="glyphicon glyphicon-calendar cal-form"></span>
                    </span> &nbsp;&nbsp;
                        <button type="submit" class="btn btn-theme btn-info" name="Reset2">Reset2</button>
                    </div>
                   <br>
                    <a href="admin.php">BACK</a>
                </form>
            </div>
            <?php

            require 'db.php';

            $timer2 = @$_POST['timer2'];

            if (isset($_POST['Reset2'])) {
                if ($timer2) {
                    //  $query_date = "INSERT INTO timerf (timeD) VALUES ('DATE: Manual Date', '2008-7-04')";
                    if ($timer2 != NULL) {
                        // $querry = mysql_query("INSERT INTO timerp(datep) VALUES('$timer2')");

                        $querry = mysqli_query($con, " UPDATE timerp SET datep = '$timer2' WHERE ID = 2");
                        echo "<script>alert(' Successfully Reset Pesticide timer')</script>";
                    } else {
                        echo "<script>alert('Time not set');</script>";


                    }
                }
            }
            ?>
            <!--//script-->
            <script type="text/javascript">
                $(function () {
                    $('#datetimepicker2').datetimepicker();
                });
            </script>
            <!--//script-->
        </div>

    </div>
    </div>
    </body>
    </html>
<?php

?>