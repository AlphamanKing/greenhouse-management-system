<?php
include_once('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($_POST as $key => $value) {
        if (strpos($key, 'submit_') === 0) {
            $product_id = substr($key, strlen('submit_'));
            $category = $_POST['category'];
            $product_name = $_POST['product_name'];
            $description = $_POST['description'];
            $price = $_POST['price'];
            $quantity = $_POST['quantity'];

            $location = ""; // Assuming image upload is handled separately

            $sql = "UPDATE try SET 
            category='$category',
            productimage1='$location',
            product_name='$product_name', 
            description='$description', 
            price='$price', 
            quantity='$quantity' 
            WHERE product_id='$product_id' ";
            if ($data = mysqli_query($con, $sql)) {
                header("Location: enpro.php");
                exit();
            } else {
                echo "Data not updated: " . mysqli_error($con);
            }
        }

        if (strpos($key, 'sut_') === 0) {
            $product_id = substr($key, strlen('sut_'));
            $sql = "DELETE FROM try WHERE product_id='$product_id' ";
            if ($data = mysqli_query($con, $sql)) {
                header("Location: enpro.php");
                exit();
            } else {
                echo "Data not deleted: " . mysqli_error($con);
            }
        }
    }
}
?>

