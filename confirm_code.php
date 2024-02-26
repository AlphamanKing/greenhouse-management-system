<div class="col-lg-1"></div>
<div class="col-lg-11">

    <ol style="background-color:#eee;">
        <li>Go to M-PESA on your phone</li>
        <li>Select Send Money</li>
        <li>Enter phone no.</li>
        <li>Enter Amount</li>
        <li>Enter your M-PESA PIN and send.</li>
        <li>You will receive a confirmation SMS from M-PESA with a confirmation code.</li>
        <li>After you receive the confirmation SMS, enter your phone number and the Confirmation code</li>
        <li>Click on complete</li>
    </ol>
    <strong>Enter Payment Details</strong>
    <form method="post" action="">
        <label>M-PESA mobile number &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</label><input type="text" name="mobile"
                                                                                  value="0<?php echo $row['mobile_no'] ?>"><br/>
        <label>M-PESA confirmation code:&nbsp;</label><input type="text" name="code"/><br/>
        <button class="btn btn-primary" type="submit" name="confirm">Complete confirmation code</button>
        <br/>
    </form>
    <?php
    $mobile = @$_POST['mobile'];
    $code = @$_POST['code'];
    if (isset($_POST['confirm'])) {

        if ($mobile && $code) {

            if ($query = mysqli_query($con, "INSERT INTO transactions VALUES(NOW(),'" . $_SESSION['username'] . "','$code','$mobile','','','$sums')")) {

                echo "<p class='alert alert-success'>Confirmation successful.Fill shopper information in right to receive your goods within 3 days </p>";
            } else {
                echo "Failed to process your confirmation. check your connection";
            }
        } else {
            echo "<div class='alert alert-danger'>Confirmation code cannot be empty
                                            <a href='#' class='close' data-dismiss = 'alert' aria-label ='close'>&times</a>
                                            </div>";
        }
    }
    ?>
</div>