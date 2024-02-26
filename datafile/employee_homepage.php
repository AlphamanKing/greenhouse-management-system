<!DOCTYPE html>
<html>
<head>
    <title>Greenhouse management system</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <script src="js/jquery-1.11.3.min.js"></script>
    <script>
        $(document).ready(function () {
            $(".leave_history1").click(function () {
                $(".header").hide();
                $(".types").hide();
                $(".leave_history").slideDown("slow");
            });


            $(".types_leave").click(function () {
                $(".header").hide();
                $(".leave_history").hide();
                $(".types").slideDown("slow");
            });

            $(".home").click(function () {
                $(".header").show();
                $(".leave_history").hide();
                $(".types").hide();
            });
            $(".application").click(function () {
                $(".header").show();
                $(".leave_history").hide();
                $(".types").hide();

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

<div class="row navbar">

    <div class="col-lg-6">
        <h4>Employee Greenhouse management system(DASHBOARD)</h4>
    </div>
    <div class="col-lg-6 logout">
        <form method="post" action="index.php">

            <button class="btn btn-theme btn-danger" type="submit"> LOGOUT</button>
        </form>
    </div>

</div>
<div class="row section">

    <div class="col-lg-2 links">
        <ul>
            <hr/>
            <li><a class="home" href="#">Daily data Entry</a></li>
            <hr/>
            <li><a class="leave_history1" href="#">Profile</a></li>
            <hr/>
            <li><a class="types_leave" href="#">Payslip</a></li>

        </ul>
    </div>
    <div class="col-lg-10">
        <!--

        main content of home page


        -->
        <div class="row header">
            <h3 class="h3">INPUT PROTOTYPE FORM</h3>
            <hr/>

            <div class="form">
                <form method="post" action="">
                    <div class="col-lg-4">
                        <span>DAILY ACTIVITIES </span>
                        <div class="wrapp">
                            <input type="radio" name="annual" value="annual"/>Firtilizer applicztion<br/>
                            <input type="radio" name="annual" value="Maternity"/>Pesticide application<br/>
                            <input type="radio" name="annual" value="Paternity"/>Irrigation<br/>
                            <input type="radio" name="annual" value="Study"/>Planting<br/>
                            <input type="radio" name="annual" value="special"/>Harvesting<br/>
                            <input type="radio" name="annual" value="Emergency"/>Emergencys<br/>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <span>ACTVITY DETAILS</span>
                        <div class="wrapp wrapp-ad">
                            <input class="form-control" type="text" name="type"
                                   placeholder="Type of the activity in details" style="height:70px"/><br/>
                            <input class="form-control " id="date" name="date" placeholder="MM/DD/YYYY"
                                   type="text"/><br/>

                        </div>
                    </div>
                    <div class="col-lg-4">
                        <span>CHALLEGES </span>
                        <div class="wrapp wrapp-ad">
                            <input class="form-control" type="text" name="address"
                                   placeholder="Enter the challeges here" style="height:90px"/><br/>
                            <button class="btn btn-theme btn-info" type="submit">SUBMIT TO DB</button>
                            <br/><br/>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        <!-- Employee Profile in Leave history row  -->
        <div class="row leave_history" style="display: none;">
            <h3>View Your profile </h3>
            <hr/>
            <div class="form">
                <form method="post" action="">
                    <div class="col-lg-7">
                        <span>Employee Details</span>
                        <div class="wrapp wrapp-ad">
                            Employee Id:<input class="form-control" type="text" name="id" value=" 31300486"
                                               disabled><br/>
                            First Name:<input class="form-control " type="text" name="Fname" value="Elijah"
                                              disabled/><br/>
                            Phone No:<input class="form-control " type="text" name="phone" value="0706506201" disabled/><br/>
                            Email: <input class="form-control" type="text" name="email" value="mokiwambua@gmail.com"
                                          disabled/><br/>
                            Work Description:<input class="form-control " type="text" name="work" value="Manager"
                                                    disabled/><br/>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <span>Profile Image </span>
                        <div class="wrapp wrapp-ad">
                            <img src="images/pro.jpg" height="168px" width="299px"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- pay slip in types of leaves raw -->
        <div class="row types" style="display: none;">
            <h3>Get Your Payslip</h3>
            <hr/>
            <div class="tabular">
                <div class="form">
                    <form method="post" action="">

                        <div class="col-lg-12">
                            <span>EMPLOYEE Payslip</span>
                            <div class="wrapp wrapp-ad">

                                <object data="doc/Leave Form.pdf#page=4" type="application/pdf" width="100%"
                                        height="100%">
                                    <iframe src="doc/Leave Form.pdf#page=4" width="480px%" height="600px%"
                                            style="border: none;">
                                        This browser does not support PDFs. Please download the PDF to view it: <a
                                                href="doc/Leave Form.pdf">Download PDF</a>
                                    </iframe>
                                </object>
                                <button class="btn btn-theme btn-info" type="submit">download</button>
                                <br/><br/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!--EMPLOYEE PORTAL-->
            <!-- emp portal-->
            <div class="row end">
                <p class="hr">&nbsp;</p>
                <hr/>
            </div>
        </div>

    </div>

</body>
</html>


