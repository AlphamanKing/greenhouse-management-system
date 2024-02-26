<section>
    <div class="container" id="container">
        <div class="row">

            <ul class="breadcrumb" id="navbreadcrumb">
                <li><a href="index.php" id="brdcrublink">MENU VIEW</a></li>
                <li><a href="#" id="brdcrublink">DINNING SPACE</a></li>
                <li><a href="cart.php" id="brdcrublink">CART<span class="badge"></span></a></li>
            </ul>
            <div class="features_items"><!--features_items-->
                <h2 class="title text-center">All food Menu View</h2>


                <!--php starts here-->
                <?php
                //$filter = isset($_POST['filter']) ? $_POST['filter'] : '';
                if (isset($_POST['filter'])) {
                    $filter = $_POST['filter'];
                    $result = mysql_query("SELECT * FROM products where Product like '%$filter%' or Description like '%$filter%' or Category like '%$filter%'");

                } else {
                    $result = mysql_query("SELECT * FROM products");
                }

                if ($result) {
                    while ($row = mysql_fetch_array($result)) {

                        $prodID = $row["ID"];
                        echo '<ul class="col-sm-4">';
                        echo '<div class="product-image-wrapper">
						  <div class="single-products">
						  <div class="productinfo text-center">
					<a href="product-details.php?prodid=' . $prodID . '" rel="bookmark" title="' . $row['Product'] . '"><img src="reservation/img/products/' . $row['imgUrl'] . '" alt="' . $row['Product'] . '" title="' . $row['Product'] . '" width="150" height="150" /></a>
                    </a>
					
					<h2><a href="product-details.php?prodid=' . $prodID . '" rel="bookmark" title="' . $row['Product'] . '">' . $row['Product'] . '</a></h2>
					<h2>KSH' . $row['Price'] . '</h2>
					<p>Category: ' . $row['Category'] . '</p>
					
					<a href="product-details.php?prodid=' . $prodID . '" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>View Details</a>
					</div>';
                        echo '</ul>';
                    }
                }
                ?>

                <!--php ends here-->
            </div>
        </div>
    </div>
    </div>
    </div>
</section>

<?php include('include/home/footer.php'); ?>