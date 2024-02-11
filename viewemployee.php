<?php
$localhost  = "localhost";
$username   = "root";
$password   = "";
$dbname     = "ecommerce";
$con = new mysqli($localhost, $username, $password, $dbname);
if( $con->connect_error){
    die('Error: ' . $con->connect_error);
}
$sql = "SELECT * FROM employee";
if( isset($_GET['search']) ){
    $Employee_Id = mysqli_real_escape_string($con, htmlspecialchars($_GET['search']));
    $sql = "SELECT * FROM employee WHERE  Employee_Id='$Employee_Id' ";
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
        <center><h2>EMPLOYEES</h2></center>
        <label>Search</label>
        <form action="" method="GET">
            <input type="text" placeholder="Type the EMPL.ID" name="search">&nbsp;
            <input type="submit" value="Search" name="btn" class="btn btn-sm btn-primary">
        </form>
        </br>
        <table border="1" width="100%"  align="center" class="goinghigh">
            <tr bgcolor="green">
                <th>employee_Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>work Description</th>
                <th>salary</th>
                <th>Action</th>

            </tr>
            <?php
            while($row = $result->fetch_assoc()){
                ?>
                <tr>
                    <form action="update2.php" method="post">
                        <td><input type= "text" size="5px;" name="Employee_Id" value="<?php echo  $row['Employee_Id']?>"/></td>
                        <td><input type= "text" size="9px;" name="username" value="<?php echo  $row['username']?>"/></td>
                        <td><input type= "text" size="30px;" name="Last_Name" value="<?php echo  $row['Last_Name']?>"/></td>
                        <td><input type= "text" size="9px;" name="Mobile" value="<?php echo  $row['Mobile']?>"/></td>
                        <td><input type="text" size="35px;" name="Email" value="<?php echo  $row['Email']?>"/></td>
                        <td><input type= "text" size="9px;" name="work" value="<?php echo  $row['work']?>"/></td>
                        <td><input type= "text" size="5px;" name="salary" value="<?php echo  $row['salary']?>"/></td>
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
