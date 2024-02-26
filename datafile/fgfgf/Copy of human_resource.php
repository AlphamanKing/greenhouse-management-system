<!DOCTYPE html>
<html>
<head>
    <title>leave management system</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript">
        function validate() {
            var employee_no = document.register_form.employee_no.value;
            var employee_name = document.register_form.employee_name.value;
            var department = document.register_form.department.value;

            if (employee_no == "" || employee_name == "" || department == "") {
                document.getElementById("errors").innerHTML = "Fill all the fields below";
                document.getElementById("errors").style.color = "red";
            }
        }

    </script>
</head>
<body>
<div class="row navbar">
    <div class="col-lg-6"><h4>leave management system(Human Resource)</h4></div>
    <div class="col-lg-6 logout">
        <button class="btn btn-theme btn-danger">LOGOUT</button>
    </div>
</div>
<div class="row section">
    <div class="col-lg-2 links">
        <ul>
            <hr/>
            <li><a href="#">Home</a></li>
            <hr/>
            <li><a href="#">List of employees</a></li>
            <hr/>
            <li><a href="#">Annual leaves</a></li>
            <hr/>
            <li><a href="#">Latest leaves</a></li>
            <hr/>
            <li><a href="human_resource.php?action=add_employee">Add new Employee</a></li>
        </ul>
    </div>
    <div class="col-lg-10">
        <?php
        if (@$_GET['action'] == "add_employee") {
            include 'add_employee.php';
        }
        ?>

    </div>
</div>
</body>
</html>


