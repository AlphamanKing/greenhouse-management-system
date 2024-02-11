<?php
$query = mysqli_query($con, "SELECT * FROM try WHERE product_id='" . $_SESSION['product_id'] . "' ");
$productnm = mysqli_fetch_object($query);
echo "<h4>Your cart</h4>";
?>
    <table>
        <tr class="even">
            <td>Product Name</td>
            <td>Description</td>
            <td>Price</td>
        </tr>
        <tr>
            <?php
            echo "
             <td>" . $_SESSION['product_id'] . "</td>
             <td>" . $_SESSION["product_name"] . "</td>
             <td>" . $_SESSION["price"] . "</td>
        ";
            ?>
        </tr>
    </table>
    <ul>
        <li><a href="">Pay on Delivery</a></li>
        <li><a href="">Pay Using paypal</a></li>
        <li><a href="">Pay cash</a></li>
    </ul>
<?php


?>