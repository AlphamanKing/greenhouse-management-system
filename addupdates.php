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
            <h3 class="h3">updates</h3>
            <hr/>
            <div class="form">
                <form class="col-lg-6" method="post" action="">


                    <textarea class="form-control" name="description"
                              placeholder="Enter descriptions of the information"></textarea><br/>

                    <button class="btn btn-block btn-success" type="submit" name="news">UPDATE
                    </button>

                    <br/>
                    <?php
                    require 'db.php';

                    $description = @$_POST['description'];


                    if (isset($_POST['news'])) {
                        if ($description) {
                            $querry = mysqli_query($con, "INSERT INTO giveupdates VALUES('$description')");

                            echo "<script>alert('success');</script>";

                        } else {
                            echo "<script>alert('Fill all the fields');</script>";
                        }
                    }
                    ?>
                </form>


            </div>

        </div>
        <div>
<a href="Admin.php" class="admin-button" style="display:block; text-align:center; font-size:large; color:brown" >BACK</a> 
</div>
        <div class="row end">
            <p class="hr">&nbsp;</p>
            <hr/>
        </div>
    </div>
    
</div>
</body>
</html>
