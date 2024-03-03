<?php
$localhost = "localhost";
$username = "root";
$password = "";
$dbname = "ecommerce";

// Create connection
$con = new mysqli($localhost, $username, $password, $dbname);

// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

// Query to select all records from daily_record table
$sql = "SELECT * FROM daily_record";
$result = $con->query($sql);

// Check if there are any records
if ($result->num_rows > 0) {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <title>Daily Records</title>
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
            }

            table, th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: left;
            }

            th {
                background-color: #4CAF50;
                color: white;
            }
        </style>
    </head>
    <body>
    <h2>Daily Records</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Data Details</th>
            <th>Challenges</th>
            <th>Username</th>
        </tr>
        <?php
        // Output data of each row
        while ($row = $result->fetch_assoc()) {
            ?>
            <tr>
                <td><?php echo $row["ID"]; ?></td>
                <td><?php echo $row["Category"]; ?></td>
                <td><?php echo $row["datadetails"]; ?></td>
                <td><?php echo $row["challeges"]; ?></td>
                <td><?php echo $row["Username"]; ?></td>
            </tr>
            <?php
        }
        ?>
    </table> <br><br><br>

      <a href="Admin.php" class="admin-button" style="display:block; text-align:center; font-size:large; color:blue" >BACK</a> 

    </body>
    </html>
    <?php
} else {
    echo "No records found";
}
$con->close();
?>
