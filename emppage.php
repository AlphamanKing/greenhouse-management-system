<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <title>Untitled 1</title>
    <link rel="stylesheet" type="text/css" href="css/emppage/style.css"/>

    <title>Greenhouse management system</title>
    <link href="datafile/css/style.css" rel="stylesheet" type="text/css"/>
    <link href="datafile/css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <script src="datafile/js/jquery-1.11.3.min.js"></script>
    <script>
        $(document).ready(function () {
            $(".leave_history1").click(function () {
                $(".header").hide();
                $(".types").hide();
                $(".leave_history").slideDown("slow");
                $(".app").hide();
            });


            $(".types_leave").click(function () {
                $(".header").hide();
                $(".leave_history").hide();
                $(".types").slideDown("slow");
                $(".app").hide();
            });

            $(".home").click(function () {
                $(".header").show();
                $(".leave_history").hide();
                $(".types").hide();
                $(".app").hide();

            });
            $(".application").click(function () {
                $(".header").hide();
                $(".leave_history").hide();
                $(".types").hide();
                $(".app").show();
                $(".record").hide();
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
<div id="wrap">
    <div id="title">
        <div class="row navbar">

            <center>
                <div class="col-lg-6">
                    <h4>Employee Greenhouse management system(DASHBOARD)</h4>
                    <div class=""><h4 style="color:orange;">Dear <?php echo $row['username'] ?> This is your
                            portal</h4></div>
                    <br/>
                </div>
            </center>
            <div class="col-lg-6 logout">
                <form method="post" action="indexx.php?action=logout">

                    <button class="btn btn-theme btn-danger" name="logout" type="submit"> LOGOUT</button>
                    <?php
                    if (@$_GET['action'] == "logout") {
                        session_destroy();
                        header("Location: indexx.php");
                    }
                    ?>
                </form>
            </div>

        </div>
    </div>
    <div id="leftcol">
        <a href="index.php"><b>Home</b></a>&nbsp;&nbsp;
        <a href="index.php?link=help"><b>Help</b></a>&nbsp;&nbsp;
        <a href="index.php?link=contact"><b>Contact</b></a>&nbsp;&nbsp;
        <a href="index.php?link=service"><b>service</b></a>

    </div>

    <?php
    if (@$_GET['link'] == "service") {
        include("service.php");
    } elseif (@$_GET['link'] == "contact") {
        include("contact.php");
    } elseif (@$_GET['link'] == "help") {
        include("help.php");
    } elseif (@$_GET['link'] == "login") {
        include("loginoption.php");
    } elseif (@$_GET['link'] == "logout") {
        include("logout.php");
    } elseif (@$_GET['link'] == "create account") {
        include("register.php");
    } elseif (@$_GET['link'] == "adminstrator") {
        include("adlogin.php");
    } else {
        include("home.php");
    }


    ?>


    <div id="footer">
        <center> Copyright © kelvin .org</center>
        <tr>

            <td height="30px" colspan="2" style="background-color:#B8AFFF">
                <div align="right" height="30px">
                    <a href="#facebook"><img src="f.png" width="30px" height="30px" alt=""/></a>
                    <a href="#twitter"><img src="t.png" width="30" height="30px" alt=""/></a>
                    <a href="#youtube"><img src="y.png" width="30" height="30px" alt=""/></a></div>
            </td>
        </tr>


    </div>
</div>
</body>
<script>
    var index = 1;

    function plusIndex(n) {
        index = index + n;
        showImage(index);
    }

    showImage(1);

    function showImage(n) {
        var i;
        var x = document.getElementsByClassName("slides");
        if (n > x.length) {
            index = 1
        }
        if (n < 1) {
            index = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[index - 1].style.display = "block";


    }

    autoSlide();

    function autoSlide() {
        var i;
        var x = document.getElementsByClassName("slides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        if (index > x.length) {
            index = 1
        }
        x[index - 1].style.display = "block";
        index++;
        setTimeout(autoSlide, 2000);
    }
</script>

</html>