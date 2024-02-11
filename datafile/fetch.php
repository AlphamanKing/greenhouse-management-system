<?php
//connect to database
include $_SERVER['DOCUMENT_ROOT'] . '/db.php';
$output = '';

$result = mysqli_query($con, " SELECT * From store WHERE name LIKE '%" . $_POST["search"] . "%' ");
if (mysqli_num_rows($result) > 0) {
    $output .= '<h4 align="center">Search Result</h4>';
    $output .= '<div class="table-responsive">
                <table class="table table bordered"
                <tr>
				    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                </tr>';
    while ($row = mysqli_fetch_array($result)) {
        $output .= '
            <tr>
                <td><img src="' . $row["image"] . '"class="img-responsive" height="150"/></td>
				<td>' . $row["name"] . '</td>
                <td>' . $row["price"] . '</td>
                ';
    }
    echo $output;
} else {
    echo 'Data Not Found';
}
?>