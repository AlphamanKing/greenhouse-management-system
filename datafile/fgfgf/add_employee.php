<div class="col-lg-12 header">
    <h3 class="h3">ADD NEW EMPLOYEE</h3>
    <hr/>
    <div class="col-lg-3"></div>
    <div class="col-lg-6">

        <form name="register_form" method="post" action="" onsubmit="return validate()">
            <span id="errors"></span><br/><br/>
            EMPLOYEE NO:<br/>
            <input class="form-control" type="text" name="employee_no" placeholder="Enter employee number"/>
            EMPLOYEE NAME:<br/>
            <input class="form-control" type="text" name="employee_name" placeholder="Full name"/>
            DEPARTMENT:<br/>
            <input class="form-control" type="text" name="department" placeholder="Enter department of service"/><br/>
            <button class="btn btn-theme btn-info" type="submit" name="register">CLICK TO REGISTER EMPLOYEE</button>
            <br/>
        </form>

        <?php

        if (isset($_POST['register'])) {
            echo "sams";
        }
        ?>
    </div>
    <div class="col-lg-3"></div>

</div>

<p class="hr" style="">&nbsp;</p>
<hr style="border:1px solid #333;"/>
