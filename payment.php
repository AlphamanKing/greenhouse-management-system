<?php
session_start();

// Check if the session variable is set
if(isset($_SESSION['total_amount'])) {
    $totalAmount = $_SESSION['total_amount'];
    // Unset the session variable to clear it after use (optional)
    unset($_SESSION['total_amount']);
} else {
    // If the session variable is not set, provide a default value or handle the situation accordingly
    $totalAmount = 0;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
    <!-- Bootstrap CSS -->
    <link href="bootstrap-5.3.2-dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <style>
        /* Custom CSS for styling */
        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
        }
        .paymentOption {
            display: none;
            margin-bottom: 20px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
        }
        .paymentOption.active {
            display: block;
        }
        .form-group {
            margin-bottom: 15px;
        }
        /* Adjusted styling for the total amount */
        h3.total-amount {
            font-size: 24px;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Payment Page</h1>
    <hr>
    <!-- Display the total amount -->
    <h3 class="total-amount">Total amount due is: <?php echo "$totalAmount"; ?></h3>
    <div class="row">
        <div class="col-md-5">
            <!-- Payment Method Selection -->
            <div class="form-group">
                <label for="paymentMethod">Choose Payment Method:</label>
                <select class="form-control" id="paymentMethod" name="paymentMethod" required>
                    <option value="">Payment options</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="cash">Cash on Delivery</option>
                    <option value="mpesa">M-Pesa</option>
                    <option value="paypal">PayPal</option>
                </select>
            </div>
        </div>
    </div>
    <!-- Payment Details -->
    <div class="paymentOptions">
        <!-- Card Payment -->
        <div id="cardPayment" class="paymentOption">
            <h4>Card Payment</h4>
            <div class="form-group">
                <label for="cardNumber">Card Number:</label>
                <input type="text" class="form-control" id="cardNumber" name="cardNumber" placeholder="Enter Card Number" required>
            </div>
            <div class="form-group">
                <label for="cardName">Name on Card:</label>
                <input type="text" class="form-control" id="cardName" name="cardName" placeholder="Enter Name on Card" required>
            </div>
            <div class="form-group">
                <label for="cardExpiry">Expiry Date:</label>
                <input type="text" class="form-control" id="cardExpiry" name="cardExpiry" placeholder="MM/YY" required>
            </div>
            <div class="form-group">
                <label for="cardCVV">CVV:</label>
                <input type="text" class="form-control" id="cardCVV" name="cardCVV" placeholder="Enter CVV" required>
            </div>
        </div>
        <!-- Cash Payment -->
        <div id="cashPayment" class="paymentOption">
            <h4>Cash on Delivery</h4>
            <?php echo "Hand in your cash payment only after you have received your items" ?>
        </div>
        <!-- M-Pesa Payment -->
        <div id="mpesaPayment" class="paymentOption">
            <h4>M-Pesa Payment</h4>
            <div class="form-group">
                <label for="mpesaPhoneNumber">Phone Number:</label>
                <input type="text" class="form-control" id="mpesaPhoneNumber" name="mpesaPhoneNumber" placeholder="Enter Phone Number" required>
            </div>
            <div class="form-group">
                <label for="mpesaAmount">Amount:</label>
                <input type="text" class="form-control" id="mpesaAmount" name="mpesaAmount" placeholder="Enter Amount" required>
            </div>
        </div>
        <!-- PayPal Payment -->
        <div id="paypalPayment" class="paymentOption">
            <h4>PayPal Payment</h4>
            <div class="form-group">
                <label for="paypalEmail">Email:</label>
                <input type="text" class="form-control" id="paypalEmail" name="paypalEmail" placeholder="Enter your PayPal Email" required>
            </div>
            <div class="form-group">
                <label for="paypalPassword">Password:</label>
                <input type="password" class="form-control" id="paypalPassword" name="paypalPassword" placeholder="Enter your PayPal Password" required>
            </div>
        </div>
    </div>
    <button type="submit" id="submitPaymentBtn" class="btn btn-primary">Submit Payment</button>
    <!-- Success Message -->
    <div id="successMessage" style="display: none;" class="mt-3">
        <div class="alert alert-success" role="alert">
            Payment successful. Thanks for shopping with us!
        </div>
    </div>
</div>

<script>
    // JavaScript to handle payment method selection and display of corresponding fields
    document.getElementById('paymentMethod').addEventListener('change', function() {
        var selectedOption = this.value;
        var paymentOptions = document.getElementsByClassName('paymentOption');
        for (var i = 0; i < paymentOptions.length; i++) {
            paymentOptions[i].classList.remove('active');
        }
        document.getElementById(selectedOption + 'Payment').classList.add('active');
    });

    // JavaScript to handle payment submission
    document.getElementById('submitPaymentBtn').addEventListener('click', function() {
        // Perform payment processing here
        // For demonstration purposes, we'll simulate a successful payment with a delay
        setTimeout(function() {
            // Display success message
            document.getElementById('successMessage').style.display = 'block';
            // Redirect to index.php after 3 seconds
            setTimeout(function() {
                window.location.href = 'index.php';
            }, 3000);
        }, 1500); // Simulating a delay of 2 seconds for payment processing
    });
</script>

</body>
</html>
