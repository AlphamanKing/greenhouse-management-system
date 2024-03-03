
<?php

include('db.php');

	
if(isset($_POST['submit']))
{

    $category = @$_POST['category'];
    $product_name = @$_POST['product_name'];
    $description = @$_POST['description'];
    $price = @$_POST['price'];
    $quantity = @$_POST['quantity'];
    //$productimage1=$_FILES["productimage1"]["name"];
    include("imageprocessor.php");
$sql=mysqli_query($con,"insert into try(category,product_name,description,price,quantity,productImage1)
              values('$category','$product_name','$description','$price','$quantity','$location')");
$_SESSION['msg']="Product Inserted Successfully !!";

}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Greenhouse management system</title>
    <link href="css/emppage/style.css" rel="stylesheet" type="text/css"/>
    <link href="datafile/css/style.css" rel="stylesheet" type="text/css"/>
    <script type="application/x-javascript"> addEventListener("load", function () {
            setTimeout(hideURLbar,);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        } </script>


    <link href="web/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <!--Date-Time-pickercss-->
    <link href="css/bootstrap-datetimepicker.css" rel="stylesheet">
    <!--default-js-->
    <script src="web/js/jquery-2.1.4.min.js"></script>
    <!--bootstrap-js-->
    <script src="js/bootstrap.min.js"></script>
    <!--script-->
    <script src="js/moment-with-locales.js"></script>
    <script src="web/js/bootstrap-datetimepicker.js"></script>
    <!--move-top-js-->
    

    <script>
        $(document).ready(function () {
            $(".leave_history1").click(function () {
                $(".header").hide();
                $(".types").hide();
                $(".app").hide();
                $(".leave_history").slideDown("slow");
                $(".record").hide();
                $(".products").hide();
            });


            $(".types_leave").click(function () {
                $(".header").hide();
                $(".leave_history").hide();
                $(".types").slideDown("slow");
                $(".app").hide();
                $(".record").hide();
                $(".products").hide();
            });

            $(".home").click(function () {
                $(".header").show();
                $(".leave_history").hide();
                $(".types").hide();
                $(".app").hide();
                $(".record").hide();
                $(".products").hide();

            });
            $(".application").click(function () {
                $(".header").hide();
                $(".leave_history").hide();
                $(".types").hide();
                $(".app").show();
                $(".record").hide();
                $(".products").hide();
            });

            $(".records").click(function () {
                $(".header").hide();
                $(".leave_history").hide();
                $(".types").hide();
                $(".record").show();
                $(".app").hide();
                $(".products").hide();
            });
            $(".products").click(function () {
                $(".header").hide();
                $(".leave_history").hide();
                $(".types").hide();
                $(".record").hide();
                $(".app").hide();
                $(".products").show();

            });


        });

        $(document).ready(function () {
            $("#date").datepicker({
                changeMonth: true,
                changeYear: true
            });
        });
    </script>
    <script>
        $(document).ready(function () {
            var date_input = $('input[name="date"]'); //our date input has the name "date"
            var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
            date_input.datepicker({
                format: 'mm/dd/yyyy',
                container: container,
                todayHighlight: true,
                autoclose: true,
            })
        })
    </script>
</head>
<body>


	<div class="wrapper">
		<div class="container">
			<div class="row">

			<div class="span9">
					<div class="content">

						<div class="module">
							<div class="module-head">
								<h3>Insert Product</h3>
							</div>
							<div class="module-body">

									<?php if(isset($_POST['submit']))
{?>
									<div class="alert alert-success">
										<button type="button" class="close" data-dismiss="alert">×</button>
									<strong>Success!!</strong>	<?php echo htmlentities($_SESSION['msg']);?><?php echo htmlentities($_SESSION['msg']="");?>
									</div>
<?php } ?>


									<?php if(isset($_GET['del']))
{?>
									<div class="alert alert-error">
										<button type="button" class="close" data-dismiss="alert">×</button>
									<strong>Oh snap!</strong> 	<?php echo htmlentities($_SESSION['delmsg']);?><?php echo htmlentities($_SESSION['delmsg']="");?>
									</div>
<?php } ?>

									<br />
                                <form class="form-horizontal row-fluid" name="insertproduct" method="post" enctype="multipart/form-data">



                                    <br>
                                    <select name="category" class="form-control">
                                        <option value="Grade2">Grade2</option>
                                        <option value="Grade1">Grade1</option>
                                        <option value="Grade4">Grade4</option>
                                        <option value="Grade3">Grade3</option>
                                    </select><br/>
                                    <input class="form-control" type="text" name="product_name"
                                           placeholder="Enter product name"/><br/>
                                    <textarea class="form-control" name="description"
                                              placeholder="Enter description of the product"></textarea><br/>
                                    <input class="form-control" type="text" name="price" placeholder="Enter price"/><br/>
                                    <select name="quantity" class="form-control">
                                        <option value="">Select quantity</option>
                                        <?php
                                        $i = 1;
                                        for ($i = 1; $i < 1 + 10; $i++) {
                                            echo "<option value=" . $i . ">" . $i . "</option>";
                                        }
                                        ?>
                                    </select><br/>
<div class="control-group">
<label class="control-label" for="basicinput">Product Image1</label>
<div class="controls">

        <input type="file" name="image" id="images" multiple />
</div>
</div>



            <button type="submit" name="submit" class="btn btn-theme btn-info">
                Insert</button>


                                </form>
							</div>
						</div>


	
						
						
					</div><!--/.content-->
				</div><!--/.span9-->
			</div>
		</div><!--/.container-->
	</div><!--/.wrapper-->
<div>
<a href="Admin.php" class="admin-button" style="display:block; text-align:center; font-size:large; color:brown" >BACK</a> 
</div>
</body>
</html>
<?php
?>