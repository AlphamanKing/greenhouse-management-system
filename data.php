<!DOCTYPE html>
<html>
<head>
    <title>Greenhouse management system</title>
    <link href="css/emppage/style.css" rel="stylesheet" type="text/css"/>
    <link href="datafile/css/style.css" rel="stylesheet" type="text/css"/>
    <link href="datafile/css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <script src="datafile/js/jquery-1.11.3.min.js"></script>

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
        <div id="rightcol">
            <div class="row header">
                <h3 class="h3">INPUT PROTOTYPE FORM</h3>
                <hr/>
                <div class="form">
                    <form method="post" action="">
                        <div class="col-lg-4">
                            <span>DAILY ACTIVITIES </span>
                            <div class="wrapp">
                                <input type="radio" name="category" value="Fertilizer application"/>Fertilizer
                                applicztion<br/>
                                <input type="radio" name="category" value="Pesticide application"/>Pesticide
                                application<br/>
                                <input type="radio" name="category" value="Irrigation"/>Irrigation<br/>
                                <input type="radio" name="category" value="Planting"/>Planting<br/>
                                <input type="radio" name="category" value="Harvesting"/>Harvesting<br/>
                                <input type="radio" name="category" value="Emergency"/>Emergence<br/>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <span>ACTVITY DETAILS</span>
                            <div class="wrapp wrapp-ad">
                                <input class="form-control" type="text" name="data_details"
                                       placeholder="Type of the activity in details" style="height:70px"/><br/>
                                <!--<input class="form-control " id="date" name="date" placeholder="MM/DD/YYYY" type="text"/><br />-->

                            </div>
                        </div>
                        <div class="col-lg-4">
                            <span>CHALLEGES </span>
                            <div class="wrapp wrapp-ad">
                                <input class="form-control" type="text" name="challeges"
                                       placeholder="Enter the challeges here" style="height:90px"/><br/>
                                <button class="btn btn-theme btn-info" name="store" type="submit"><S>SAVE</S>
                                </button>
                                <br/><br/>
                            </div>
                        </div>

                        <?php


                        $category = @$_POST['category'];
                        $data_details = @$_POST['data_details'];
                        $challeges = @$_POST['challeges'];
                        $username = $row['username'];

                        if (isset($_POST['store'])) {
                            if ($category && $data_details && $challeges) {
                                $querry = mysqli_query($con ,"INSERT INTO daily_record(Category,datadetails,challeges,Username) VALUES('$category','$data_details','$challeges','$username')");

                                if ($querry == "TRUE") {
                                    echo "<script>alert('Data Successfully Entered the data')</script>";

                                } else {
                                    echo "<script>alert('unable to capture details')</script>";
                                }

                            } else {
                                echo "<script>alert('Fill all the fields');</script>";
                            }
                        }
                        ?>
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
                            <!-- <div class="wrapp wrapp-ad">
                                 Employee Id:<input class="form-control" type="text" name="id" value=" 31300486" disabled><br />
                                 First Name:<input class="form-control " type="text" name="Fname" value="Elijah" disabled/><br />
                                 Phone No:<input class="form-control " type="text" name="phone" value="0706506201" disabled/><br />
                                 Email: <input class="form-control" type="text" name="email" value="mokiwambua@gmail.com" disabled /><br />
                                 Work Description:<input class="form-control " type="text" name="work" value="Manager"  disabled/><br />
                             </div>-->
                            <table class=" table table-striped">
                                <tr class="theading">
                                    <th style="background-color:darkorange;">EMP_ID</th>
                                    <th style="background-color:darkorange;">First Name</th>
                                    <th style="background-color:darkorange;">Last Name</th>
                                    <th style="background-color:darkorange;">Mobile No</th>
                                    <th style="background-color:darkorange;">Email</th>
                                    <th style="background-color:darkorange;">Work Description</th>
                                    <th style="background-color:darkorange;">salary</th>
                                </tr>
                                <?php
                                $check = mysqli_query($con,"SELECT * FROM employee WHERE username='" . $_SESSION['username'] . "'");

                                ?>

                                <?php while ($result = mysqli_fetch_object($check)) { ?>
                                    <tr>
                                        <td><?php echo $result->Employee_Id; ?></td>
                                        <td><?php echo $result->username; ?></td>
                                        <td><?php echo $result->Last_Name; ?></td>
                                        <td><?php echo @$result->Mobile; ?></td>
                                        <td><?php echo $result->Email; ?></td>
                                        <td><?php echo $result->work; ?></td>
                                        <td><?php echo $result->salary; ?></td>

                                    </tr>
                                <?php } ?>
                            </table>
                        </div>
                    </form>
                </div>
            </div>

            <!-- view daily records in application raw -->
            <div class="row app" style="display: none;">
                <h5>View Daily Records </h5>
                <hr/>
                <div class="form">
                    <form method="post" action="">

                        <div class="col-lg-12">
                            <span>Get Daily Records From each User</span>
                            <div class="wrapp wrapp-ad">

                                <table class=" table table-striped">
                                    <tr class="theading">
                                        <th style="background-color:darkorange;">Job Type</th>
                                        <th style="background-color:darkorange;">Job details</th>
                                        <th style="background-color:darkorange;">challeges</th>
                                        <th style="background-color:darkorange;">Employee Name</th>

                                    </tr>
                                    <?php
                                    $check = mysql_query("SELECT * FROM daily_record ");
                                    ?>

                                    <?php while ($result = mysql_fetch_object($check)) { ?>
                                        <tr>
                                            <td><?php echo $result->Category; ?></td>
                                            <td><?php echo $result->datadetails; ?></td>
                                            <td><?php echo $result->challeges; ?></td>
                                            <td><?php echo @$result->Username; ?></td>

                                        </tr>
                                    <?php } ?>
                                </table>
                                >
                            </div>
                        </div>
                    </form>

                </div>
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
