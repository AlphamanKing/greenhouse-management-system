<?php
session_start();
include 'db.php';
include 'cart.php';

                        error_reporting(E_ALL);
                        ini_set('display_errors', 1);
                        
                            if (isset($_POST['pay'])) {
                                $postal = mysqli_real_escape_string($con, $_POST['postal']);
                                $city = mysqli_real_escape_string($con, $_POST['city']);
                                $total_amount = $_SESSION['total_amount'];

                                if (!empty($postal) && !empty($city)) {
                                    // Insert the new fields into the transactions table
                                    $insert_query = "INSERT INTO transactions (username, postal_code, city, total_amount) VALUES ('$username', '$postal', '$city', '$total_amount')";
                                    if ($query = mysqli_query($con, $insert_query)) {
                                        // Create a new table for the user if it does not exist
                                        $create_query = "CREATE TABLE IF NOT EXISTS $username(id INTEGER(10) AUTO_INCREMENT PRIMARY KEY, product_name varchar(20) not null, price INTEGER(10) not null, quantity varchar(10) not null)";
                                        if ($query = mysqli_query($con, $create_query)) {
                                    
                                            $insert_query = "INSERT INTO $username (product_name, price, quantity) VALUES ('$namep', '$pricep', '$quantityp')";
                                            mysqli_query($con, $insert_query);
                                            echo "<p class='alert alert-info'>Delivery between 2-5 days</p>";
                                        } else {
                                            echo "Error creating table: " . mysqli_error($con);
                                        }
                                    } else {
                                        echo "Error inserting transaction data: " . mysqli_error($con);
                                    }
                                } else {
                                    echo "<p class='alert alert-danger'>Fill the above fields for efficient delivery</p>";
                                }
                                $_SESSION['success_message'] = "<p class='alert alert-info'>Delivery between 2-5 days</p>";
                            header("Location: payment.php");
                            exit();
                            }
                            