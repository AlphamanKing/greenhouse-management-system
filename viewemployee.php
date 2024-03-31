<?php
$localhost = "localhost";
$username = "root";
$password = "";
$dbname = "ecommerce";
$con = new mysqli($localhost, $username, $password, $dbname);
if ($con->connect_error) {
    die('Error: ' . $con->connect_error);
}
$sql = "SELECT * FROM employee";
if (isset($_GET['search'])) {
    $Employee_Id = mysqli_real_escape_string($con, htmlspecialchars($_GET['search']));
    $sql = "SELECT * FROM employee WHERE  Employee_Id='$Employee_Id' ";
}
$result = $con->query($sql);

// Function to reload the page with the updated data
function reloadPage() {
    header("Location: viewemployee.php");
    exit();
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>Enquire</title>
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
        @media print {
    /* Hide everything by default when printing */
    body * {
        visibility: hidden;
    }
    /* Then display the print container and its children */
    .print-container, .print-container * {
        visibility: visible;
    }
    /* Position the print container at the top of the page */
    .print-container {
        position: absolute;
        left: 0;
        top: 0;
    }
}
    </style>
    <script>
        function printEmployeeDetails() {
            window.print();
        }
    </script>
</head>

<body>
    <fieldset>
        <div class="container">
            <center>
                <h2>EMPLOYEES</h2>
            </center>
            <label>Search</label>
            <form action="" method="GET">
                <input type="text" placeholder="Type the EMPL.ID" name="search">&nbsp;
                <input type="submit" value="Search" name="btn" class="btn btn-sm btn-primary">
            </form>
            </br>
            <div>
            <button onclick="printEmployeeDetails()" class="btn btn-primary">Print Employee Details</button>
            </div> <br> 
            <table border="1" width="100%" align="center" class="goinghigh print-container">
                <tr bgcolor="wheat" style="color:brown; size:50px">
                    <th>EMPLOYEE ID</th>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>MOBILE NO</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th>SALARY</th>
                    <th>ACTION</th>
                </tr>
                <?php
                while ($row = $result->fetch_assoc()) {
                    ?>
                    <tr>
                        <form action="update2.php" method="post">
                            <td><input type="text" size="5px;" name="Employee_Id" value="<?php echo  $row['Employee_Id'] ?>" readonly/></td>
                            <td><input type="text" size="9px;" name="username" value="<?php echo  $row['username'] ?>" /></td>
                            <td><input type="text" size="30px;" name="Last_Name" value="<?php echo  $row['Last_Name'] ?>" /></td>
                            <td><input type="text" size="9px;" name="Mobile" value="<?php echo  $row['Mobile'] ?>" /></td>
                            <td><input type="text" size="35px;" name="Email" value="<?php echo  $row['Email'] ?>" /></td>
                            <td><input type="text" size="9px;" name="work" value="<?php echo  $row['work'] ?>" /></td>
                            <td><input type="text" size="5px;" name="salary" value="<?php echo  $row['salary'] ?>" /></td>
                            <td>
                                <input type="submit" size="15px " value="update" name="submit_<?php echo $row['Employee_Id']; ?>" />
                                <input type="submit" size="15px" value="delete" name="sut_<?php echo $row['Employee_Id']; ?>" />
                            </td>
                        </form>
                    </tr>
                <?php
            }
            ?>
            </table>
        </div>
        <center>
            </br>
            <a href="Admin.php"> BACK</a>
        </center>
    </fieldset>
</body>

</html>

