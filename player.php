<?php 

 include("connection.php");
// for setting ready value
if( $_POST['id']==1){
  $rand =$_POST['rand'];
  $sql5 = "update typer set ready='true' WHERE id='$rand' ";
mysqli_query($conn, $sql5);
}


if($_POST['id']==2){
    $length= $_POST['length'];
    $rand =$_POST['rand'];
    $room = $_POST['room'];
    $sql1 = "select id from typer where id = '$rand'";
   $result =  mysqli_query($conn, $sql1);

  if(mysqli_num_rows($result)>0){
// echo "if"; update
$sql3 = "update typer set typedchar='$length' WHERE id='$rand'";
mysqli_query($conn, $sql3);
  }
  else{
//for create new player // create new player 
    $sql2 = "insert into typer (id,typedchar,lobby) VALUES ('$rand','$length','$room')";
mysqli_query($conn, $sql2);
// echo "else";
  }

// giving length for all player 
$data ="";
$sql4  = "select typedchar from typer where id<>'$rand' and lobby = '$room'";
$result4 = mysqli_query($conn, $sql4);
while ($row = mysqli_fetch_array($result4)) {
  echo $row['typedchar'];
  echo -1;
  }

    exit(0);
}
// check the state of the all player 
if($_POST['id']==3){
  $room = $_POST['room'];
  $state  ='false';
  $sql6 = "select ready from typer where lobby = '$room'";

  $result6 =mysqli_query($conn, $sql6);
 $totalRows =  mysqli_num_rows($result6);
 $countForReady = 0  ;
  while ($row = mysqli_fetch_array($result6)) {

if($row['ready']=='true')
 $countForReady++;
    }
    
    if($countForReady == $totalRows && $totalRows!=0 )
    echo 'true';
    else
    echo 'false';
}

//to delete the room 
if($_POST['id']==4){
  $room = $_POST['room'];
  $sql7 = "delete  from typer where lobby = '$room'";
 $result = mysqli_query($conn, $sql7);
 
    echo $result;


}
//create room 
if($_POST['id']==5){
  $room = $_POST['room'];
  $sql8 = "insert into typer (lobby,name) VALUES ('$room','creator')";
  mysqli_query($conn, $sql8);
}
// deleting the creator row 
if($_POST['id']==6){
  $room = $_POST['room'];
  $sql9 = "delete  from typer where name = 'creator' and lobby = '$room'";
 mysqli_query($conn, $sql9);

}

?>