<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<script type="text/javascript">


</script>
<body>
<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chess";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO member (member_id,user,pass,email) VALUE (,,,)";

if ($conn->query($sql)===TRUE) {
     echo "New register successfully";
} else {
      echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
</form>
</body>
</html>