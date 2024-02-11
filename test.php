<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
    <title>Untitled Document</title>

    <script>
        function show() {
//Function content goes here
            if (document.getElementById('expand').style.display == 'none') {

                document.getElementById('expand').style.display = 'block';
            } else {
                document.getElementById('expand').style.display = 'none';

            }
        }
    </script>


    <style>
        div#expand {
            display: block;
        }
    </style>
</head>

<body>
<a href="javascript:" onclick=show()>Show/Hide Text</a>
<div id="expand">
    <h3>EMPLOYEE DASHBOARD</h3>
    <hr/>
    <form>
        <span>EMPLOYEE DATA RECORD</span>
        <P>We take care of our Employees Data</P>
        <a href="#"><p>Payslip</p></a>
        <a href="#"><p>Records</p></a>
        <span>EMPLOYEE RECORD</span>
        <div class="wrapp wrapp-ad">
            FirstName:<input class="form-control" type="text" name="fistname" placeholder="Fisrt name"/><br/>
            LastName:<input class="form-control " type="text" name="lastname" placeholder="Last name"/><br/>
            Email: <input class="form-control" type="text" name="email" placeholder="Email"/><br/>
            Phone Number:<input class="form-control" type="text" name="mobile" placeholder="valid mobile"/><br/>
            Address: <input class="form-control" type="text" name="address" placeholder="Enter address code"/><br/>
            Password: <input class="form-control" type="password" name="password" placeholder="enter password"/><br/>

            <button class="btn btn-theme btn-info" type="submit">SIGN UP</button>
            <br/><br/>
        </div>
    </form>


</div>
</body>
</html>
