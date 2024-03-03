<?php
// Include the database file
include 'db.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check if the register button was clicked
if (isset($_POST['register1'])) {
    // Get the user input from the POST array
    $employee = $_POST['Employee_Id'];
    $fname = $_POST['username'];
    $lname = $_POST['Last_Name'];
    $mobile = $_POST['Mobile'];
    $email = $_POST['Email'];
    $work = $_POST['work'];
    $salary = $_POST['salary'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];

    // Check if all the fields are filled
    if (!empty($employee) && !empty($fname) && !empty($lname) && !empty($mobile) && !empty($email) && !empty($work) && !empty($salary) && !empty($password) && !empty($cpassword)) {
        // Check if the password and the confirm password match
        if ($password == $cpassword) {
            // Sanitize the user input to prevent SQL injection
            $employee = mysqli_real_escape_string($con, $employee);
            $fname = mysqli_real_escape_string($con, $fname);
            $lname = mysqli_real_escape_string($con, $lname);
            $mobile = mysqli_real_escape_string($con, $mobile);
            $email = mysqli_real_escape_string($con, $email);
            $work = mysqli_real_escape_string($con, $work);
            $salary = mysqli_real_escape_string($con, $salary);
            $password = mysqli_real_escape_string($con, $password);

            // Insert the user input into the database
            $query = "INSERT INTO employee(Employee_Id,username,Last_Name,Mobile,Email,work,salary,password)
                      VALUES('$employee','$fname','$lname','$mobile','$email','$work','$salary','$password')";
            $result = mysqli_query($con, $query);
            // Check if the query was successful
            if ($result) {
                // Display a success message
                echo "<script>alert('Employee, $fname Successfully registered')</script>";
                // Redirect to the admin page
                echo "<script> window.location='Admin.php'</script>";
            } else {
                // Display an error message with the database error
                echo "<script>alert('Failure: " . mysqli_error($con) . "')</script>";
            }
        } else {
            // Display an error message if the passwords do not match
            echo "<script>alert('Password does not match');</script>";
        }
    } else {
        // Display an error message if any field is empty
        echo "<script>alert('Fill all the fields');</script>";
        // Redirect to the admin page
        echo "<script> window.location='Admin.php'</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Add new employee</title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="css/bootstrap-datetimepicker.css" rel="stylesheet">
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/moment-with-locales.js"></script>
    <script src="js/bootstrap-datetimepicker.js"></script>
</head>
<body>
<div class="tabular">
    <div class="form">
        <div class="col-lg-5">
            <span>Create Employees Account </span> <br>
            <div class="signup-form"><!--sign up form-->
                <form action="" method="post">
                    Employee Id:<input class="form-control" type="text" name="Employee_Id"
                                       placeholder="employee Id"/><br/>
                    First Name:<input class="form-control" type="text" name="username"
                                      placeholder="first Name"/><br/>
                    Last name:<input class="form-control" type="text" name="Last_Name"
                                     placeholder="last name"/><br/>
                    Mobile Number:<input class="form-control" type="text" name="Mobile"
                                         placeholder="Mobile Number"/><br/>
                    Email Address:<input class="form-control" type="email" name="Email"
                                         placeholder="Email Address"/><br/>
                    Work Description:<input class="form-control" type="text" name="work"
                                            placeholder="work description"/><br/>
                    salary:<input class="form-control" type="text" name="salary"
                                  placeholder="salary"/><br/>
                    Password<input class="form-control" type="password" name="password"
                                     placeholder="Password"/><br/>
                    Confirm Password:<input class="form-control" type="password"
                                            name="cpassword"
                                            placeholder="Confirm Password"/><br/>
                    <center><button type="submit" class="btn btn-theme btn-info" name="register1">
                            Signup
                        </button></center>
                </form>
                <br><br>
                <a href="Admin.php" class="admin-button" style="display:block; text-align:center; font-size:large; color:brown" >BACK</a>
            </div>
        </div>
        <div class="col-lg-6">
            
        </div>
    </div>
</div>
</body>
</html>

