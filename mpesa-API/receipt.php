<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Receipt</title>
    <style>
       body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .centered-message {
        text-align: center;
        margin-top: 20px; /* Adjust as needed to control distance from the receipt */
    }
    .message {
        font-size: 1.5em;
        color: #4CAF50;
        display: inline-block; /* This will allow text-align to center the message */
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

        .receipt-container {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .receipt-header {
            background-color: #4CAF50;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        .receipt-header h1 {
            margin: 0;
        }
        .receipt-details {
            padding: 20px;
            background-color: #f7f7f7;
            border-bottom: 2px solid #eee;
        }
        .receipt-details p {
            margin: 0;
            padding: 5px 0;
            text-align:left;
        }
        .receipt-items {
            padding: 20px;
            text-align:left;
        }
        .receipt-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .receipt-total {
            text-align: right;
            padding: 20px;
            font-size: 20px;
            font-weight: bold;
            background-color: #f7f7f7;
            border-top: 2px solid #eee;
        }
        .button-container {
            text-align: center;
            margin-top: 20px;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            margin: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #45a049;
        }
        @media print {
            .no-print {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="receipt-container">
        <div class="receipt-header">
            <h1>Payment Receipt</h1>
        </div>
        <div class="receipt-details">
            <p style='color: brown;'>Dear <?php echo $_SESSION['username']; ?>, your purchase is as follows: </p>
            <p><strong>Merchant Request ID:</strong> <?php echo htmlspecialchars($_SESSION['MerchantRequestID']); ?></p>
            <p><strong>Checkout Request ID:</strong> <?php echo htmlspecialchars($_SESSION['CheckoutRequestID']); ?></p>
            <p><strong>Phone Number:</strong> <?php echo htmlspecialchars($_SESSION['phone_number']); ?></p>
        </div>
        <div class="receipt-items">
            <h3>Items Purchased:</h3>
            <?php foreach ($_SESSION['cart_items'] as $item): ?>
                <div class="receipt-item">
                    <span><?php echo htmlspecialchars($item['name']); ?></span>
                    <span><?php echo htmlspecialchars($item['quantity']); ?> x KES <?php echo htmlspecialchars($item['price']); ?></span>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="receipt-total">
            Total: KES <?php echo htmlspecialchars($_SESSION['total_amount']); ?>
        </div>
    </div>
    <div class="button-container no-print">
        <button onclick="window.print()">Print this receipt</button>
        <button onclick="window.location.href='/greenhouse/index.php'">Back to Home Page</button>
    </div>
    <div class="centered-message">
        <p class="message">After we confirm the payment from our side, we will ship your order in 3-6 days. Welcome, once again!</p>
    </div>
    
</body>
</html>

