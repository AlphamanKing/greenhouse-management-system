<?php
include 'db.php';
$check = mysqli_query($con, "SELECT * FROM try WHERE category='Grade1'");

while ($try = mysqli_fetch_object($check)) {


    ?>

    <div class="col-sm-3">
        <div class="product-image-wrapper">
            <div class="single-products">
                <div class="productinfo text-center">
                    <p> <?php echo $try->product_id; ?></p>
                    <img src="latest/<?php echo  $try->productimage1;?>" width="100" height="100">
                    <p><?php echo $try->product_name; ?></p>
                    <h2>Ksh <?php echo $try->price; ?></h2>
                    <p><?php echo $try->description; ?></p>
                    <a href="cart.php?id=<?php echo $try->product_id ?>">Order Now</a>
                </div>

            </div>
        </div>
    </div>

    <?php

    $_SESSION['product_id'] = $try->product_id;
    $_SESSION['price'] = $try->price;
    @$_SESSION['product_description'] = $try->description;

}

?>
                                