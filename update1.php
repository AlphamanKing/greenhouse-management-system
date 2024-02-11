<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>update</title>
</head>

<body>

<?php
include_once('db.php');
include("imageprocessor.php");
$product_id = @$_POST['product_id'];
$category = @$_POST['category'];
$productimage1 = @$_POST['productimage1'];
$product_name = @$_POST['product_name'];
$description = @$_POST['description'];
$price = @$_POST['price'];
$quantity = @$_POST['quantity'];
if (isset($_POST['submit']));
{

    $sql="UPDATE try SET  price ='$price' WHERE  product_id='$product_id' ";
    //$sql="DELETE FROM products WHERE  product_id='$product_id' ";


    if ($data=mysqli_query($con,$sql))
    {
        header("refresh:1;url=en14.php");
    }
    else
    {

        echo"data not updated".mysqli_error($con);
    }

}
if (isset($_POST['sut']))
{

   $sql="UPDATE try SET category='$_POST[category]', productimage1='$location', product_name='$_POST[product_name]'
, description='$_POST[description]', price='$_POST[price]', quantity='$_POST[quantity]' WHERE  product_id='$_POST[product_id]' ";
    $sql="DELETE FROM try WHERE  product_id='$product_id' ";

    if ($data=mysqli_query($con,$sql))
    {
        header("refresh:1;url=enpro.php");
    }
    else
    {

        echo"data not updated".mysqli_error($con);
    }

}
?>



</body>

</html>
