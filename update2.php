<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>update</title>
</head>

<body>

<?php
include_once('db.php');
$Employee_Id=$_POST['Employee_Id'];
$username=$_POST['username'];
$Last_Name=$_POST['Last_Name'];
$Mobile=$_POST['Mobile'];
$Email=$_POST['Email'];
$work=$_POST['work'];
$salary=$_POST['salary'];


if (isset($_POST['submit']))
{

    $sql="UPDATE employee SET username='$_POST[username]', Last_Name='$_POST[Last_Name]', Mobile='$_POST[Mobile]'
, Email='$_POST[Email]', work='$_POST[work]', salary='$_POST[salary]' WHERE  Employee_Id='$_POST[Employee_Id]' ";
    //$sql="DELETE FROM products WHERE  product_id='$product_id' ";


    if ($data=mysqli_query($con,$sql))
    {
        header("refresh:1;url=viewemployee.php");
    }
    else
    {

        echo"data not updated".mysqli_error($con);
    }

}
if (isset($_POST['sut']))
{

    $sql="UPDATE employee SET username='$_POST[username]', Last_Name='$_POST[Last_Name]', Mobile='$_POST[Mobile]'
, Email='$_POST[Email]', work='$_POST[work]', salary='$_POST[salary]' WHERE  Employee_Id='$_POST[Employee_Id]' ";
    $sql="DELETE FROM employee WHERE Employee_Id='$Employee_Id' ";


    if ($data=mysqli_query($con,$sql))
    {
        header("refresh:1;url=viewemployee.php");
    }
    else
    {

        echo"data not updated".mysqli_error($con);
    }

}
?>



</body>

</html>
