<!DOCTYPE html>
<html>
<head>
    <title>leave management system</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="row navbar">
    <div class="col-lg-6"><h4>leave management system (Head of Department)</h4></div>
    <div class="col-lg-6 logout">
        <button class="btn btn-theme btn-danger">LOGOUT</button>
    </div>
</div>
<div class="row section">
    <div class="col-lg-2 links">
        <ul>
            <hr/>
            <li><a href="homepage.php?action=homepage">Home</a></li>
            <hr/>
            <li><a href="#">Approve leave</a></li>
            <hr/>
            <li><a href="list.php?action=list">List of leaves</a></li>
            <hr/>
            <li><a href="#">Employees</a></li>
        </ul>
    </div>
    <div class="col-lg-10">
        <?php
        if (@$_GET['action'] == "" || @$_GET['action'] == "homepage" || @$_GET['action'] == "list") {
            include 'latest_leaves.php';
        }
        ?>

    </div>
</div>
</body>
</html>


