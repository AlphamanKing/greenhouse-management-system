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
                                    $check = mysqli_query($con, "SELECT * FROM try WHERE category='Grade1'");

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
                            <li><a href="index.php?action=Grade3" class="tab-content">Grade3</a></li>
                            <li><a href="index.php?action=Grade4">Grade4</a></li>


                        </ul>
                    </div>
                    <div class="tab-content">

                        <div class="tab-pane fade active in" id="tshirt">
                            <?php
                            if (@$_GET['action'] == "" || @$_GET['action'] == "Grade2") {
                                include 'fashion.php';
                            } else if (@$_GET['action'] == "Grade1") {
                                include 'electronic.php';
                            }
                            if (@$_GET['action'] == "addcart") {
                                require 'product_details.php';

                            }

                            if (@$_GET['action'] == "Grade4") {
                                require 'motors.php';

                            }

                            if (@$_GET['action'] == "Grade3") {
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
<!--=========================
============================== -->

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