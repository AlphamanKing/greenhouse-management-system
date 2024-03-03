<?php
include_once('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($_POST as $key => $value) {
        if (strpos($key, 'submit_') === 0) {
            $Employee_Id = substr($key, strlen('submit_'));
            $username = $_POST['username'];
            $Last_Name = $_POST['Last_Name'];
            $Mobile = $_POST['Mobile'];
            $Email = $_POST['Email'];
            $work = $_POST['work'];
            $salary = $_POST['salary'];

            $sql = "UPDATE employee SET username='$username', Last_Name='$Last_Name', Mobile='$Mobile', Email='$Email', work='$work', salary='$salary' WHERE Employee_Id='$Employee_Id' ";
            if ($data = mysqli_query($con, $sql)) {
                header("Location: viewemployee.php");
                exit();
            } else {
                echo "Data not updated: " . mysqli_error($con);
            }
        }

        if (strpos($key, 'sut_') === 0) {
            $Employee_Id = substr($key, strlen('sut_'));
            $sql = "DELETE FROM employee WHERE Employee_Id='$Employee_Id' ";
            if ($data = mysqli_query($con, $sql)) {
                header("Location: viewemployee.php");
                exit();
            } else {
                echo "Data not deleted: " . mysqli_error($con);
            }
        }
    }
}
