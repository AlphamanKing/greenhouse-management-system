<?php
require 'db.php';

$product_name = @$_POST['product_name'];
$description = @$_POST['description'];
$price = @$_POST['price'];
$quantity = @$_POST['quantity'];

if (isset($_POST['product'])) {
    if ($product_name && $description && $price && $quantity) {
        $querry = mysqli_query($con, "INSERT INTO products VALUES('','images/home/sale.PNG','$product_name','$description','$price','$quantity')");

        echo "<p class='alert alert-success'>Product added.<a href='product_addition.php?action=image'>Click here to enter product image<a></p>";

        $_SESSION["product_name"] = $quantity;

    } else {
        echo "<script>alert('Fill all the fields');</script>";
    }
}
?>