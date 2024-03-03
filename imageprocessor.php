<?php

function uploadImage($imageFile) {
    // Check if file is uploaded
    if (!isset($imageFile['tmp_name'])) {
        return ""; // Return empty string if no file is uploaded
    }

    // File details
    $file = $imageFile['tmp_name'];
    $imageName = $imageFile['name'];
    $size = $imageFile['size'];
    $error = $imageFile['error'];

    // Check for upload errors
    if ($error > 0) {
        die("Error uploading file! Code $error.");
    } else {
        // Check file size
        if ($size > 10000000) { // 10MB limit
            die("Format is not allowed or file size is too big!");
        } else {
            // Move the uploaded file to the "latest" directory
            $uploadDir = "latest/";
            move_uploaded_file($file, $uploadDir . $imageName);
            $location = $uploadDir . $imageName;
            return $location; // Return the file location
        }
    }
}

?>

