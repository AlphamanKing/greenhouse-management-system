<!DOCTYPE HTML>
<HTML>
<head>
    <?php require_once('head.html') ?>
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
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="images/ico/apple-touch-icon-57-precomposed.png">

    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;

        }

        .topnav {
            overflow: hidden;
            background-color: green;
        }

        .topnav a {
            float: right;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 10px;
        }

        .topnav a:hover {
            background-color: #ddd;
            color: black;
        }

        .active {
            background-color: #4CAF50;
            color: white;
        }

        .topnav .icon {
            display: none;
        }

        @media screen and (max-width: 600px) {
            .topnav a:not(:first-child) {
                display: none;
            }

            .topnav a.icon {
                float: right;
                display: block;
            }
        }

        @media screen and (max-width: 600px) {
            .topnav.responsive {
                position: relative;
            }

            .topnav.responsive .icon {
                position: absolute;
                right: 0;
                top: 0;
            }

            .topnav.responsive a {
                float: none;
                display: block;
                text-align: left;
            }
        }
    </style>
    <script type="text/javascript">
        $(document).ready(function () {
            $('.materialboxed').materialbox();
            //create the slider
            $('.cd-testimonials-wrapper').flexslider({
                selector: ".cd-testimonials > li",
                animation: "slide",
                controlNav: false,
                slideshow: false,
                smoothHeight: true,
                start: function () {
                    $('.cd-testimonials').children('li').css({
                        'opacity': 1,
                        'position': 'relative'
                    });
                }
            });
            var btn = $('#button');

            $(window).scroll(function () {
                if ($(window).scrollTop() > 300) {
                    btn.addClass('show');
                } else {
                    btn.removeClass('show');
                }
            });

            btn.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: 0}, '300');
            });
        });
    </script>
    <link href="css/main.css" rel="stylesheet">
</head>
<body>
<a id="button"></a>
<section id="home">

    <div class="row">
        <div class="row-sm-8 w3-card-4 w3-padding-16">
            <div class="col-sm-12 col-md-12 col-lg-12">

                <center><b><font color="green"><h3>Welcome to greenhouse website</h3></font></b></center>

            </div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="topnav" id="myTopnav" style="font-family:Comic Sans MS;">
                <a href="index.php?action=logout" style=" background-color: #A6BF40;"><span
                        class="glyphicon glyphicon-off"></span> Logout</a></li>
                <a href="login.php" style=" background-color: #A6BF40"><i class="fa fa-lock"></i> Login
                    / <span class="glyphicon glyphicon-user"></span>Sign Up</a>
                <a href="account.php" style=" background-color: #A6BF40"><i></i>My
                    Account</a>
                <a href="#visit" class="scroll-link" data-id="visit">contact us</a>
                <a href="#contact" class="scroll-link" data-id="about">Purchase</a>
                <a href="indexx.php">Home</a>
                <div class="col-sm-4 col-md-4 col-lg-4 w3-padding-left padding-left-1 w3-padding-4">
                    <img class="w3-padding-left" src="images/log.jpg" width="60px" height="40px">
                </div>

                <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <?php require_once('slider.html') ?>
        </div>
    </div>
</section>
<br>
<br>
<section id="about">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <div class="left-sidebar">
                    <h2>Category</h2>
                    <div class="panel-group category-products" id="accordian"><!--category-productsr-->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                        <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                        Grade3
                                    </a>
                                </h4>
                            </div>
                            <div id="sportswear" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <ul>
                                        <?php
                                        include 'db.php';
                                        $check = mysqli_query($con, "SELECT * FROM try WHERE category='Grade3'");

                                        while ($try = mysqli_fetch_object($check)) {

                                            ?>
                                            <li style="text-transform: uppercase;"><a
                                                    href="cart.php?id=<?php echo $try->product_id ?>"><?php echo $try->product_name; ?></a><span
                                                    style="color:darkorange">(<?php echo $try->quantity; ?>
                                                    )</span></li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                        <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                        Grade2
                                    </a>
                                </h4>
                            </div>
                            <div id="mens" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <ul>
                                        <?php
                                        include 'db.php';
                                        $check = mysqli_query($con, "SELECT * FROM try WHERE category='Grade2'");

                                        while ($try = mysqli_fetch_object($check)) {
                                            ?>
                                            <li style="text-transform: uppercase;"><a
                                                    href="cart.php?id=<?php echo $try->product_id ?>"><?php echo $try->product_name; ?></a><span
                                                    style="color:darkorange">(<?php echo $try->quantity; ?>
                                                    )</span></li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                        <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                                        Grade4
                                    </a>
                                </h4>
                            </div>
                            <div id="womens" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <ul>
                                        <?php
                                        include 'db.php';
                                        $check = mysqli_query($con, "SELECT * FROM try WHERE category='Grade4'");

                                        while ($try = mysqli_fetch_object($check)) {
                                            ?>
                                            <li style="text-transform: uppercase;"><a
                                                    href="cart.php?id=<?php echo $try->product_id ?>"><?php echo $try->product_name; ?></a><span
                                                    style="color:darkorange">(<?php echo $try->quantity; ?>
                                                    )</span></li>
                                        <?php } ?>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><a href="#">Grade1</a></h4>
                            </div>
                            <div class="panel-body">
                                <ul>
                                    <?php
                                    include 'db.php';
                                    $check = mysqli_query($con,"SELECT * FROM try WHERE category='Grade1'");

                                    while ($try = mysqli_fetch_object($check)) {
                                        ?>
                                        <li style="text-transform: uppercase;"><a
                                                href="cart.php?id=<?php echo $try->product_id ?>"><?php echo $try->product_name; ?></a><span
                                                style="color:darkorange">(<?php echo $try->quantity; ?>)</span>
                                        </li>
                                    <?php } ?>
                                </ul>
                            </div>
                        </div>

                    </div><!--/category-products-->
                </div>
            </div>

            <div class="col-sm-9 padding-right">
                <div class="features_items"><!--features_items-->
                    <h2 class="title text-center">Features Items</h2>

                </div><!--features_items-->

                <div class="category-tab"><!--category-tab-->
                    <div class="col-sm-12">

                        <ul class="nav nav-tabs">

                            <li><a href="index.php?action=Grade1">Grade1</a></li>
                            <li class="active"><a href="index.php?action=Grade2"> Grade2</a></li>
                            <li><a href="index.php?action=Grade3">Grade3</a></li>
                            <li><a href="index.php?action=Grade4" >Grade4</a></li>

                        </ul>
                    </div>
                    <div class="tab-content">

                        <div class="tab-pane fade active in" id="tshirt">

                            <?php
                            if(@$_GET['action']=="" || @$_GET['action']=="Grade2" )
                            {
                                include 'fashion.php';
                            }
                            else if(@$_GET['action']=="Grade1")
                            {
                                include 'electronic.php';
                            }
                            if(@$_GET['action']=="addcart")
                            {
                                require 'product_details.php';

                            }

                            if(@$_GET['action']=="Grade4")
                            {
                                require 'motors.php';

                            }

                            if(@$_GET['action']=="Grade3")
                            {
                                require 'sportsware.php';

                            }


                            ?>
                        </div>


                    </div>
                </div><!--/category-tab-->


            </div>
        </div>
    </div>
</section>
<section id="visit">
    <div class="row">
        <!----->
        <div class="content">
            <div class="col-md-12 post-top">
                <center>
                    <span><h2 style="font-size: 28px"><a name="contact"> Contact Us </a></h2></span>
                    <h1 style="font-size: 24px">Head Office</h1>
                    <div class="one_half">
                        <h3 style="font-size: 25px">South Eastern Kenya University.<br/> kwa vonza, Kitui<br/>Kenya</h3>
                    </div>
                    <div class="one_half_last">
                        <h3 style="font-size: 25px"> Telephone: +254-712-660-519<br/> Fax: 905-892-3790</h3>
                    </div>
                </center>
                <img src="kevo/Capture.PNG" width="100%" height="500">
                <hr/>
                <center>
                    <h2 style="font-size: 24px">Visit Us</h2>
                    <p style="font-size: 20px">We are always delighted to have customers and guests<br> visit our
                        Greenhouse
                        management System.</p>
                </center>
                <hr/>

            </div>

        </div>
    </div>
</section>
<!--=========================
============================== -->
<footer id="footer">
    <div class="footer-top">
        <center><h1><font color="#006400"> thank you so much for purchasing with us</font></h1><br>
            <h1><b><font color="green" size="6"> welcome</font></b></h1>
        </center>
    </div>

    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <p class="pull-left">Copyright © 2018 GREENHOUSE SHOP. All rights reserved.</p>
                <p class="pull-right">Designed by <span><a target="_blank" href="#">kelvinmutunga</a></span></p>
            </div>
        </div>
    </div>
</footer>
<script type="text/javascript">
    $(document).ready(function () {
        // navigation click actions
        $('.scroll-link').on('click', function (event) {
            event.preventDefault();
            var sectionID = $(this).attr("data-id");
            scrollToID('#' + sectionID, 750);
        });
        // scroll to top action
        $('.scroll-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 'slow');
        });
        // mobile nav toggle
        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
        });
        $('#show-panels').click(function () {
            $('.panels').slideDown();
            $('#show-again').show();
            $('#show-panels').hide();

        });
        $('#show-again').click(function () {
            $('.panels').slideUp();
            //$('.panels').hide();
            $('#show-again').hide();
            $('#show-panels').show();
        })

    });

    // scroll function
    function scrollToID(id, speed) {
        var offSet = 50;
        var targetOffset = $(id).offset().top - offSet;
        var mainNav = $('#main-nav');
        $('html,body').animate({scrollTop: targetOffset}, speed);
        if (mainNav.hasClass("open")) {
            mainNav.css("height", "1px").removeClass("in").addClass("collapse");
            mainNav.removeClass("open");
        }
    }

    if (typeof console === "undefined") {
        console = {
            log: function () {
            }
        };
    }

</script>
<script>
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
</script>

<script type="text/javascript" src="js/jquery.inview.min.js"></script>
<script type="text/javascript" src="js/wow.min.js"></script>
<script type="text/javascript" src="js/mousescroll.js"></script>

<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.scrollUp.min.js"></script>
<script src="js/price-range.js"></script>
<script src="js/jquery.prettyPhoto.js"></script>
<script src="js/main.js"></script>
<script type="text/javascript" src="js/smoothscroll.js"></script>
<script src="js/masonry.pkgd.min.js"></script>
<script src="js/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="js/lightbox.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="engine1/wowslider.js"></script>
<script type="text/javascript" src="engine1/script.js"></script>
</body>
</HTML>
