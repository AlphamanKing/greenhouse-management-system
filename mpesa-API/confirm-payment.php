<?php
  session_start(); 
//  include('express-stk.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Roboto:400,100,300,700,900');
            @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,200,300,500,600,700,900');
            
            .container {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              flex-direction: column;
              background-color: #f4f4f4;
            }

            * {
              box-sizing: border-box;
            }

            html {
              font-family: 'Roboto', sans-serif;
              color: #333;
              background-color: #e9ebee;
            }

            .price h1 {
              font-weight: 700;
              color: #5b9bd5;
              letter-spacing: 1px; 
              text-align: center;
            }

            .card {
              margin-top: 30px;
              margin-bottom: 30px;
              width: 520px;
              background-color: #fff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            }

            .card .row {
              width: 100%;
              padding: 1rem;
              border-bottom: 1px solid #ccc;
            }

            .card .row.number {
              background-color: #f7f7f7;
            }

            .info label {
              display: inline-block;
              color: #666;
              width: 40%;
            }

            .info input {
              display: inline-block;
              width: 55%;
              background-color: #f7f7f7;
              font-family: 'Open Sans';
              border: 1px solid #ddd;
              outline: none;
              margin-left: 1%;
              color: #333;
              padding: 0.5rem;
              border-radius: 4px;
            }

            .info input::placeholder {
              font-family: 'Open Sans';
              color: #999;
            }

            #cardnumber, #cardnumber::placeholder {
              letter-spacing: 1px;
              font-size: 14px;
            }

            .button button {
              font-size: 1rem;
              font-weight: 500;
              width: 520px;
              background-color: #5b9bd5;
              border: none;
              color: #fff;
              padding: 15px;
              border-radius: 8px;
              outline: none;
              cursor: pointer;
              transition: background-color 0.2s ease-in-out;
            }

            .button button:hover {
              background-color: #4a8bc2;
            }

            .button button:active {
              background-color: #3a7bae;
            }

            .button button i {
              font-size: 1rem;
              margin-right: 5px;
            }
        </style>
    </head>
<body>
    <div class="container">
        <form action='transaction-logging.php' method='POST'>
            <div class="price">
                <h1>Awesome, that's KES <?php echo $_SESSION['total_amount']; ?> </h1> 
            </div>
            <div class="card__container"> 
                <div class="card">
                    <div class="row">
                        <img src="mpesa.png" style="width:30%;margin: 0 35%;">
                        <p style="color:#666;line-height:1.7;">3. After Receiving the MPESA confirmation message, <br> 4. Key in the <strong>Transaction Code </strong> in the below box then,<br> 5. Press 'Confirm Payment' to finish making your order.</p>
                
                        <?php if (isset($errmsg) && $errmsg != ''): ?>
                            <p style="background: #e74c3c;padding: .8rem;color: #ffffff;"><?php echo $errmsg; ?></p>
                        <?php endif; ?>
                    </div>
                    <div class="row number">
                        <div class="info">
                            <label for="cardnumber">TRANSACTION CODE</label>
                            <input id="cardnumber" type="text" name="transactionID" maxlength="10" placeholder="SCS2EZBS9A" required/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <button type="submit"><i class="ion-locked"></i> Confirm Payment</button> <br> <br>
                <button type="button" onclick="cancelTransaction()"><i class="ion-locked"></i> Cancel Transaction</button>
            </div>
        </form>
    </div>
    <script>
function cancelTransaction() {
    if (confirm('Are you sure you want to cancel the transaction?')) {
        // AJAX request to a PHP script to destroy the session
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'cancel_transaction.php', true);
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Redirect to the main folder index.php after the session is destroyed
                window.location.href = '/greenhouse/index.php';
            }
        };
        xhr.send();
    }
}
</script>

</body>
</html>
