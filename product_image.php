<h4 class="card-title">Allowed extensions are .png, jpg, jpeg</h4>
<form method="post" action="" enctype="multipart/form-data">

    <p><input type="file" name="img" class="form-control"/></p>
    <p><input class="btn  btn-success  btn-theme" type="submit" name="upload_photo" value="upload picture"/></p>
    <?php
    require('db.php');
    if (isset($_POST['upload_photo'])) {

        $check = mysqli_query($con,"SELECT * FROM products WHERE product_name='" . $_SESSION['product_name'] . "'");

        $rows = mysqli_num_rows($check);


        $errors = array();
        $allowed_e = array('png', 'jpg', 'jpeg');
        $file_name = $_FILES['img']['name'];
        $file_e = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        $file_s = $_FILES['img']['size'];
        $file_tmp = $_FILES['img']['tmp_name'];

        if (in_array($file_e, $allowed_e) === false) {
            $errors[] = 'This file extension is not allowed.';
        }
        if ($file_s > 209152) {
            $errors[] = 'File must be under 2mb';
        }
        if (empty($errors)) {
            move_uploaded_file($file_tmp, 'images/home/' . $file_name);
            $image_up = 'images/home/' . $file_name;

            if ($query = mysqli_query($con,"UPDATE products set product_image= '" . $image_up . "' WHERE product_name='" . $_SESSION['product_name'] . "'")) {
                echo "<script>alert('Profile picture has been changed');</script>";

            }
        } else {
            foreach ($errors as $errors) {
                echo "<script>alert($errors);</script>";
            }
        }

    }
    ?>

</form>