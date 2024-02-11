<?php 
  
$localhost  = "localhost"; 
$username   = "root"; 
$password   = ""; 
$dbname     = "ecommerce";  
$con = new mysqli($localhost, $username, $password, $dbname); 
if( $con->connect_error){
   die('Error: ' . $con->connect_error);
} 
$sql = "SELECT * FROM try";
if( isset($_GET['search']) ){  
  $product_id = mysqli_real_escape_string($con, htmlspecialchars($_GET['search'])); 
  $sql = "SELECT * FROM try WHERE product_id ='$product_id' ";
} 
$result = $con->query($sql);
  
?>
<!DOCTYPE html>
<html>
<head>
  <title>Enquire</title>
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<fieldset>
<div class="container"> 
   <center><h2>Products available in the Market</h2></center>
    <label>Search</label>
    <form action="" method="GET">
        <input type="text" placeholder="Type the P.ID" name="search">&nbsp;
      <input type="submit" value="Search" name="btn" class="btn btn-sm btn-primary">
    </form>
   </br>
    <table border="1" width="100%"  align="center" class="goinghigh">
     <tr bgcolor="green">
            <th>product id</th>
            <th>category</th>
            <th>product_image</th>
            <th>product name</th>
            <th>product_description</th>
            <th>price</th>
            <th>quantity</th>
            <th>Action</th>
            
        </tr>
        <?php 
       while($row = $result->fetch_assoc()){
            ?>
            <tr>
         <form action="update1.php" method="post" enctype="multipart/form-data">
         <td><input type= "text" size="5px;" name="product_id" value="<?php echo  $row['product_id']?>"/></td>
        <td><input type= "text" size="9px;" name="category" value="<?php echo  $row['category']?>"/>
             <td><input type= "text" size="30px;" name="product_image" value="<?php echo  $row['productimage1']?>"/>
              <input type="file" autofocus name="image" id="images" multiple />

             </td>
        <td><input type= "text" size="9px;" name="product_name" value="<?php echo  $row['product_name']?>"/></td>
             <td><input type="text" size="35px;" name="product_description" value="<?php echo  $row['description']?>"/></td>
        <td><input type= "text" size="9px;" name="price" value="<?php echo  $row['price']?>"/></td>
             <td><input type= "text" size="5px;" name="quantity" value="<?php echo  $row['quantity']?>"/></td>
                <td><input type="submit" size="15px " value="update" name="submit"/><br>
                    <input type="submit" size="15px" value="delete" name="sut"/>
                </td>
            </tr>
            <?php
        }
 
        ?>
    </table>
</div>
<center>
<?php 
/*include "connection.php";
$res=mysqli_query($conn,"SELECT * FROM op2014");
   $num=mysqli_num_rows($res);
   $total=$num/4;
   $total=ceil($total);
      for ($b=1; $b<=$total;$b++)
      {

         ?><a href="?page=<?php echo $b;?>" style="text-decoration:none"><?php echo $b. " "; ?></a><?php
      }
*/
?>
</br>
<a href="admin.php"> Back</a>
</center>
 </fieldset>
</body>
</html>
