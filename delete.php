<?php 

 include("connection.php");

  
    $rand =$_POST['rand'];

    $sql1 = "delete  from typer where id = '$rand'";
 $result = mysqli_query($conn, $sql1);
 
    echo $result;

?>