<?php
//checking connection and connecting to a database
require_once('db.php');
//Connect to mysql server


// check if the 'id' variable is set in URL
if (isset($_GET['Employee_Id'])) {
    // get employee id value
    $employee = $_GET['Employee_Id'];

    // delete the entry
    $result = mysqli_query($con, "DELETE FROM employee WHERE Employee_Id='$Employee_Id'")
    or die("The order does not exist ... \n");

    // redirect back to the member index
    header("Location: Adnin.php");
} else // if id isn't set, redirect back to member index
{
    header("Location: Adnin.php");
}

?>
