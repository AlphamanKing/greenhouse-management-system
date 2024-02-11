<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html"
      xml:lang="en" lang="en">
<head>
    <title>GREENHOUSE MANAGEMENT SYSTEM</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <link rel="stylesheet" href="images/Outdoor.css" type="text/css"/>
    <!-- Custom Theme files -->
    <!-- Mainly scripts -->
    <script src="datafile/panel/js/jquery.metisMenu.js"></script>
    <script src="datafile/panel/js/jquery.slimscroll.min.js"></script>
    <!-- Custom and plugin javascript -->
    <link href="datafile/panel/css/custom.css" rel="stylesheet">
    <script src="datafile/panel/js/custom.js"></script>
    <script src="datafile/panel/js/screenfull.js"></script>
    <!--skycons-icons-->
    <script src="datafile/panel/js/skycons.js"></script>
    <!--//skycons-icons-->
</head>
<body>

<div class="clearfix"></div>
<div id="wrap">
    <div id="header">
        <h1 id="logo-text"><a href="#">Greenhouse Management System</a></h1>

        <p id="slogan">Slow The Flow Save Water</p>

        <div id="header-links">
            <p><a href="indexx.php">Home</a> |
                <a href="#contact">Contact</a> |
                <a href="Adminlogn.php">Admn</a></p>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <div id="nav">
                <ul>
                    <li id="current"><a href="indexx.php">Home</a></li>
                    <li><a href="index.php">Market</a></li>
                    <li><a href="Educationn.php">Education</a></li>
                    <li><a href="Emplogin.php">Employee</a></li>
                    <li><a href="about.php">About</a></li>

                </ul>
            </div>
        </div>
    </div>
    <div id="header-photo"><img src="images/Slide.jpg" width="100%" height="306" alt=""/></div>

    <div class="row">
        <div class="col-lg-6">
            <div id="main"><a name="TemplateInfo"></a>

                <h3 style="font-size: 24px"><a href="#">Keep the Word green for better living</a></h3>

                <p><strong>Greenhouse</strong> is the best for today`s farming. <strong>Use greenhouse management
                        system </strong>

                <h3>Blockquote</h3>
                <blockquote>
                    <p>GreenHouse management System gives the farmer up to date techniques to produce best and quality
                        products</p>
                </blockquote>
                <h1>Greenhouse Countdown Clock</h1>

                <div class="panel panel-default" style="margin-top: 20px;">
                    <div class="panel-heading">
                        <h2>Fertilizer Application timer</h2>
                    </div>
                    <div class="panel-body" id="demo" style="font-size: 40px;">

                        <!--<div id="clockdiv">
                            <div id='countdown2'></div>
                            <input id="timer2" type="button" value="Start"/>
                        </div>-->
                        <?php
                        include 'db.php';

                        $check = mysqli_query($con, "SELECT * FROM timerf");
                        while ($rows = mysqli_fetch_assoc($check)) {
                            $timerf = $rows['timeD'];
                        }
                        ?>


                        <script>
                            // Set the date we're counting down to
                            var date = "<?php echo $timerf;?>";
                            // var date = "March 28 2018";

                            var countDownDate = new Date(date).getTime();
                            // var countDownDate = new Date("Feb 21 2018 11:42:25").getTime();

                            // Update the count down every 1 second
                            var x = setInterval(function () {

                                // Get todays date and time
                                var now = new Date().getTime();

                                // Find the distance between now an the count down date
                                var distance = countDownDate - now;

                                // Time calculations for days, hours, minutes and seconds
                                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                                // Display the result in the element with id="demo"
                                document.getElementById("demo").innerHTML = days + "d " + hours + "hrs "
                                    + minutes + "min " + seconds + "sec ";


                                // If the count down is finished, write some text
                                if (distance < 0) {
                                    clearInterval(x);

                                }
                            }, 1000);
                        </script>

                    </div>
                </div>

                <!--                Timer 2-->
                <div class="panel panel-default" style="margin-top: 20px;">
                    <div class="panel-heading">
                        <h2>Pesticide Application Timer</h2>
                    </div>
                    <div class="panel-body" id="demo2" style="font-size: 40px;">


                        <?php
                        include 'db.php';

                        $check = mysqli_query($con, "SELECT * FROM timerp");
                        while ($rows = mysqli_fetch_assoc($check)) {
                            $timerp = $rows['datep'];
                        }
                        ?>


                        <script>
                            // Set the date we're counting down to
                            var date = "<?php echo $timerp;?>";

                            var countDownDate1 = new Date(date).getTime();
                            // var countDownDate = new Date("Feb 21 2018 11:42:25").getTime();

                            // Update the count down every 1 second
                            var x = setInterval(function () {

                                // Get todays date and time
                                var now = new Date().getTime();

                                // Find the distance between now an the count down date
                                var distance = countDownDate1 - now;

                                // Time calculations for days, hours, minutes and seconds
                                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                                // Display the result in the element with id="demo"
                                document.getElementById("demo2").innerHTML = days + "d " + hours + "hrs "
                                    + minutes + "min " + seconds + "sec ";


                                // If the count down is finished, write some text
                                if (distance < 0) {
                                    clearInterval(x);

                                }
                            }, 1000);
                        </script>

                    </div>
                </div>

            </div>
        </div>
        <div class="col-lg-6">
            <div id="content-wrap">


                <div id="sidebar">


                    <div class="block block-views even" id="block-views-greenhouse-faqs">

                        <div class="view-header">
                            <h3 class="block__title" style="font-size:28px">Educational Greenhouses FAQ's</h3></div>


                        <div class="view-content">


                            <div class="entity entity-paragraphs-item paragraphs-item-accordion">
                                <div class="content">

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide1">What do I do if I have rocky
                                            ground?
                                            <button>
                                    </h3>
                                    <div>
                                        <p id="hide1" class="collapse">Several things can be done to alleviate poor
                                            ground
                                            conditions. You can auger out holes or dig a trench, and back fill them with
                                            stone dust. If you have just a few trouble spots, you can cut the post, and
                                            concrete around the post for additional bracing. Or, if none of the above
                                            work,
                                            you can choose another site.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide2">How much does it cost to
                                            extend
                                            my ground posts so that I can get additional height?
                                        </button>
                                    </h3>
                                    <div>
                                        <p id="hide2" class="collapse">The cost is about KSH.10,000 per ground post to
                                            raise the
                                            greenhouse an additional 2 ft. in height and about KSH.18,000 per ground
                                            post to raise
                                            the greenhouse an additional 4 ft. in height. Since we are a manufacturer we
                                            are
                                            flexible and can raise the height anywhere between 1 ft. and 4 ft. This
                                            price
                                            also takes into account the additional hardware you will need with the extra
                                            height.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide3">
                                            <button data-toggle="collapse" data-target="#hide3">What is involved in the
                                                construction when I get extended ground posts?
                                            </button>
                                    </h3>
                                    <div>
                                        <p id="hide3" class="collapse">As we increase height, we also increase depth.
                                            Therefore, you will have to go deeper with your posts. This stability is
                                            very
                                            important when maintaining snow loads and wind loads. You will also be
                                            required
                                            to use larger sized poly.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide4">What do I do if I am in an
                                            excessively windy area?
                                        </button>
                                    </h3>
                                    <div>
                                        <p id="hide4" class="collapse">We include a wind bracing kit which provides
                                            diagonal
                                            bracing on all four corners of the greenhouse for extra rigidity. Additional
                                            wind bracing can be added if necessary.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide5">Do purlins add strength to
                                            the
                                            greenhouse?
                                        </button>
                                    </h3>
                                    <div>
                                        <p id="hide5" class="collapse">No, they only help with wind load.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide6">Are these taxable
                                            structures,
                                            and do I need a building permit?
                                        </button>
                                    </h3>
                                    <div>
                                        <p id="hide6" class="collapse">In most states this type of structure is
                                            considered a
                                            temporary greenhouse and is non-taxable. However, you need to check with
                                            your
                                            local authorities or trade associations to see if you are exempt from
                                            taxation
                                            with this type of structure. Most towns are lenient with building permits
                                            due to
                                            the fact that these greenhouses are considered an agricultural accessory.
                                            However, check with local authorities about permits. Even though you may not
                                            need a building permit, you may need other permits for electrical or
                                            plumbing.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide7">How much space should I
                                            allow in
                                            between greenhouses?
                                        </button>
                                    </h3>
                                    <div>
                                        <p id="hide7" class="collapse">You should allow 10 to 12 feet in between
                                            greenhouses
                                            for the collection and removal of snow. It also helps to have the space for
                                            recovering a greenhouse if you bring the plastic from one side over to the
                                            other.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide8">What are some of the red
                                            flags
                                            in site selection?
                                        </button>
                                    </h3>
                                    <div>
                                        <p id="hide8" class="collapse">Terraced land is always dangerous for snow
                                            build-up.
                                            Snow can tend to collect on one side and not build up on another side, and
                                            possibly lead to failure. Terraced land also can result in serious drainage
                                            problems. Building within 20 feet of a tall building such as a barn can also
                                            lead to drifting snow or ice chunks ripping the plastic. Building near the
                                            tree
                                            line can result in damage to poly and reduce light levels significantly. Use
                                            common sense in site selection.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide9">Can I inflate roll-up
                                            sides/curtains?
                                        </button>
                                    </h3>
                                    <div>
                                        <p id="hide9" class="collapse">Yes, by simply using a jumper tube, you can
                                            inflate
                                            your roll-up sides. However, usually the poly is tight and since you have
                                            little
                                            heat loss through your sides, most people opt not to inflate roll-up
                                            sides.</p>
                                    </div>

                                    <h3 class="accordion-title__text">
                                        <button data-toggle="collapse" data-target="#hide10">Do I need a roof vent for
                                            natural ventilation or will roll-up sides be enough?
                                        </button>
                                    </h3>
                                    <div>
                                        <p id="hide10" class="collapse">Roof vents definitely enhance ventilation,
                                            however,
                                            roll-up sides usually are adequate for ventilation. Shade cloth can be used
                                            to
                                            also help cool a greenhouse with roll-up sides. You can also add a small
                                            gable
                                            fan and shutter for some winter cooling if you do not want to roll up the
                                            sides
                                            during the cooler months.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<div class="row">
    <!----->
    <div class="content">
        <div class="col-md-12 post-top">
            <span><h2 style="font-size: 28px"><a name="contact"> Contact Us </a></h2></span>
            <h1 style="font-size: 24px">Head Office</h1>
            <div class="one_half">
                <h3 style="font-size: 25px">South Eastern Kenya University.<br/> kwa vonza, Kitui<br/>Kenya</h3>
            </div>
            <div class="one_half_last">
                <h3 style="font-size: 25px"> Telephone: +254-712-660-519<br/> Fax: 905-892-3790</h3>
            </div>
            <p>&nbsp;</p>
            <img src="kevo/Capture.PNG" width="100%" height="500">
            <hr/>
            <h2 style="font-size: 24px">Visit Us</h2>
            <p style="font-size: 20px">We are always delighted to have customers and guests visit our Greenhouse
                management System.</p>
            <hr/>

        </div>

    </div>
</div>
<div class="clearfix"></div>
</div>
<!--//content-->
<footer id="footer"><!--Footer-->
    <div class="footer-top">
        <div class="container">

        </div>
    </div>

    <div class="footer-widget">
        <div class="container">

        </div>
    </div>

    <div id="footer-wrap">
        <div id="footer-columns">
        </div>
        <div id="footer-bottom">
            <div class="row">
                <p class="pull-left">Copyright © 2018 GREENHOUSE MANAGEMENT SYSTEM. All rights reserved.</p>
                <p class="pull-right">Designed by <span><a target="_blank" href="#">kelvinmutunga</a></span></p>
            </div>
        </div>
    </div>
    </div>
    <script type="text/javascript" src="images/js.js"></script>
</footer><!--/Footer-->
</body>
</html>
