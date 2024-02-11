<?php
session_start();

include 'db.php';
if ($_SESSION['username']) {

    $check = mysqli_query($con,"SELECT * FROM employee WHERE username='" . $_SESSION['username'] . "'");
    $rows = mysqli_num_rows($check);

    if ($rows != 0) {
        while ($row = mysqli_fetch_assoc($check)) {

            $username = $row['username'];
            ?>
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
                    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">

            <head>
                <style>
                    /* Style The Dropdown Button */
                    .dropbtn {
                        background-color: #4CAF50;
                        color: white;
                        padding: 10px;
                        font-size: 16px;
                        border: none;
                        cursor: pointer;
                    }

                    /* The container <div> - needed to position the dropdown content */
                    .dropdown {
                        position: relative;
                        display: inline-block;
                    }

                    /* Dropdown Content (Hidden by Default) */
                    .dropdown-content {
                        display: none;
                        position: absolute;
                        background-color: #00a300;
                        min-width: 85px;
                        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                        text-shadow: none;
                    }

                    /* Links inside the dropdown */
                    .dropdown-content a {
                        color: black;
                        padding:  10px;
                        text-decoration: none;
                        display: block;
                        text-shadow: none;
                    }

                    /* Change color of dropdown links on hover */
                    .dropdown-content a:hover {
                        background-color: #0D47A1
                    }

                    /* Show the dropdown menu on hover */
                    .dropdown:hover .dropdown-content {
                        display: block;
                        text-shadow: none;
                    }

                    /* Change the background color of the dropdown button when the dropdown content is shown */
                    .dropdown:hover .dropbtn {
                        background-color: #0f9d58;
                        text-shadow: none;
                    }
                </style>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="description" content="">
                <meta name="author" content="">
                <title>Login | Greenhouse Shop</title>
                <link href="css/bootstrap.min.css" rel="stylesheet">
                <link href="css/font-awesome.min.css" rel="stylesheet">
                <link href="css/prettyPhoto.css" rel="stylesheet">
                <link href="css/price-range.css" rel="stylesheet">
                <link href="css/animate.css" rel="stylesheet">
                <link href="css/main.css" rel="stylesheet">
                <link href="css/responsive.css" rel="stylesheet">
                <!--[if lt IE 9]>
                <script src="js/html5shiv.js"></script>
                <script src="js/respond.min.js"></script>
                <![endif]-->
                <link rel="shortcut icon" href="images/ico/favicon.ico">
                <link rel="apple-touch-icon-precomposed" sizes="144x144"
                      href="images/ico/apple-touch-icon-144-precomposed.png">
                <link rel="apple-touch-icon-precomposed" sizes="114x114"
                      href="images/ico/apple-touch-icon-114-precomposed.png">
                <link rel="apple-touch-icon-precomposed" sizes="72x72"
                      href="images/ico/apple-touch-icon-72-precomposed.png">
                <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch-icon-57-precomposed.png">
                <link rel="stylesheet" type="text/css" href="css/emppage/style.css"/>
                <title>Greenhouse management system</title>
                <link href="css/responsive.css" rel="stylesheet">
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
            <div >
                <div id="title">
                    <center>

                        <div class="col-lg-6">
                            <h4 style="color:orange;">Admin Greenhouse management system(DASHBOARD)</h4>
                            <div class=""><h4 style="color:orange;">Dear <?php echo $row['username'] ?>
                                    You are the Admin</h4>
                            </div>
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
                <div id="mainnav">
                    <div class="dropdown">
                        <button class="dropbtn">products</button>
                        <div class="dropdown-content">
                            <a href="insertproduct.php">Add</a>
                            <a href="enpro.php">View</a>

                        </div>
                    </div>
                    <div class="dropdown">
                        <a href="viewcustomer.php">
                            <button class="dropbtn">View Customers</button>
                        </a>
                    </div>
                    <div class="dropdown">
                        <a href="addupdates.php">
                            <button class="dropbtn">Add Updates</button>
                        </a>
                    </div>
                    <div class="dropdown">
                        <a href="dailyrecords.php">
                            <button class="dropbtn">view Records</button>
                        </a>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Employees</button>
                        <div class="dropdown-content">
                            <a href="addemployee.php">Add</a>
                            <a href="viewemployee.php">View</a>

                        </div>
                    </div>

                    <div class="dropdown">
                        <a href="timerss.php">
                            <button class="dropbtn">Timer</button>
                        </a>
                    </div>
                </div>

            </div>
            <div id="rightcol">
                <?php
                if (@$_GET['link'] == "insertproduct") {
                    include("insertproduct.php");
                } elseif (@$_GET['link'] == "viewcustomer") {
                    include("viewcustomer.php");
                } elseif (@$_GET['link'] == "addupdates") {
                    include("addupdates.php");
                } elseif (@$_GET['link'] == "timerss") {
                    include("timerss.php");
                } elseif (@$_GET['link'] == "dailyrecords") {
                    include("viewdata.php");
                } elseif (@$_GET['link'] == "viewproducts") {
                    include("viewproducts.php");
                }
         elseif (@$_GET['link'] == "enpro") {
             include("enpro.php");
         }
                 elseif (@$_GET['link'] == "addemployee") {
                     include("addemployee.php");
                 }
                elseif (@$_GET['link'] == "viewemployee") {
                    include("viewemployee.php");
                } else
                {
                    include("home.php");
                }
                ?>
            </div>


            <div id="footer">
                <div class="row">
                    <p class="pull-left">Copyright © 2023 GREENHOUSE SHOP. All rights reserved.</p>
                    <p class="pull-right">Designed by <span><a target="_blank" href="#">betty</a></span></p>
                </div>

            </div>
            </div>
            <script src="js/jquery.js"></script>
            <script src="js/price-range.js"></script>
            <script src="js/jquery.scrollUp.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.prettyPhoto.js"></script>
            <script src="js/main.js"></script>
            </body>
            </html>
            <?php
        }
    }


} else {
    header("Location:Emplogin.php");
}

?>