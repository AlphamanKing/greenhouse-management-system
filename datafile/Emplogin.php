<!DOCTYPE html>
<html>
<head>
    <title>Greenhouse management system</title>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="container">


    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4 form-wrapper">
            <form class="employees_form" method="post" action="employee_homepage.php">
                <center><h4>LOGIN</h4></center>
                Username:
                <input class="form-control" type="text" name="username"/>
                Password:
                <input class="form-control" type="password" name="password"/><br/>
                <!-- User type:
                 <select name="user_type" class="form-control">
                     <option value="" selected="">select your category</option>
                     <option value="employee">Employee</option>
                     <option value="hod">Customer</option>
                     <option value="admin">Administrator</option>
                 </select><br />-->
                <div class="row">
                    <div class="col-lg-6">
                        <button class="btn btn-success btn-block" name="login" type="submit">LOGIN</button>
                    </div>
                    <div class="col-lg-6">
                        <button class="btn btn-danger btn-block" name="cancel" type="reset">CANCEL</button>
                    </div>

                </div>
                <br/>

            </form>
        </div>
        <div class="col-lg-4"></div>
    </div>
</div>
</div>
</body>
</html>