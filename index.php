<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="css/index.css?v=1">
<script src="js/three.min.js"></script>
  <script src="js/GLTFLoader.js"></script>
    <title>type for fun</title>


</head>
<body>
<html>

 

<div class="scene">
<div class="card" style=" cursor:pointer;
    position: absolute;
    top:140px;
    left:250px;
    width:60%;
   border:none
">
<input type="text" class ="ipt" id="cree" title="create new room ">
    <button onclick="create()" class ="btn">CREATE</button>
</div>
 







<div class="card">

   <table class="Room" border="1px" >
        <tr style="background:GREY">
           
            <th  style="padding:10px">Players</th>
          <th  style="padding:10px">Room</th> 
          <th  style="padding:10px">Delete</th> 
            
</tr>
<?php 
$count = 0;
$conn = mysqli_connect("localhost","root","","typer",3307);
$sql1 = "select distinct lobby from typer;";
$result =  mysqli_query($conn, $sql1);

    while ($row = mysqli_fetch_array($result)) {
$sql2 = "Select count(lobby) As total from typer where lobby = '".$row['lobby']."' and name <> 'creator'";
$result2  = mysqli_query($conn,$sql2);
$row2= mysqli_fetch_assoc($result2);
$count = $row2['total'];

?>


     <tr  title="Go to room ">
        <td onclick="jumptoplayer('<?= $row['lobby']?>')"><?= $count ?> </td>
        <td onclick="jumptoplayer('<?= $row['lobby']?>')"><?= $row['lobby'] ?> </td> 
        <td><button  onclick="delet('<?= $row['lobby']?>')" class="delete" >DELETE</button>  </td> 
        
    </tr>
   
     <?php
        }

?>
</table>
</div>

</div>
<script>
    // setting cookies for room 
function jumptoplayer(s){

    var date = new Date();
    document.cookie = "room="+s+";expires="+date.getDate() + 1;
    window.location = "player.html";
    
}
function delet(s){
  window.location = "index.php";
    $.ajax({
    url: "./player.php",
    data: { room: s, id: 4 },
    type: "POST",
    success: function (result) {
     
    }
  });
  window.location = "index.php";
}

function create(){
  window.location = "index.php";
var s = document.getElementById('cree').value;
var date = new Date();
    document.cookie = "room="+s+";expires="+date.getDate() + 1;
    window.location = "index.php";



$.ajax({
    url: "./player.php",
    data: { room: s, id: 5 },
    type: "POST",
    success: function (result) {
     console.log(result);
    }
  });
}



</script>

<script src="js/app.js?v=2"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script
  src="https://code.jquery.com/jquery-3.6.1.js"
  integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
  crossorigin="anonymous"></script>
</body>

</html>