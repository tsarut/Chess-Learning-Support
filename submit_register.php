<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<script type="text/javascript">


</script>
<body>
<?php 
mysql_connect("localhost","root","");
mysql_select_db("chess");
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
if(trim($_POST["user"]) == "")
	{
		echo "Please input Username!";
		exit();	
	}
	
	if(trim($_POST["pass"]) == "")
	{
		echo "Please input Password!";
		exit();	
	}	
		
	if($_POST["pass"] != $_POST["RePass"])
	{
		echo "Password not Match!";
		exit();
	}
	
	if(trim($_POST["email"]) == "")
	{
		echo "Please input email!";
		exit();	
	}	
	
	$strSQL = "SELECT * FROM member WHERE user = '".trim($_POST['user'])."' ";
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);
	if($objResult)
	{
			echo "Username already exists!";
	}
	else
	{	
$sql = "INSERT INTO member (user,pass,email) VALUE ('".$_POST['user']."','".$_POST['pass']."','".$_POST['email']."')";

if ($conn->query($sql)===TRUE) {
     echo "New register successfully";
} else {
      echo "Error: " . $sql . "<br>" . $conn->error;
}
}

$conn->close();
?>
</form>
</body>
</html>