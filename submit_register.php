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
     $strSQL = "SELECT * FROM member WHERE user = '".mysql_real_escape_string($_POST['user'])."' 
	and pass = '".mysql_real_escape_string($_POST['pass'])."'";
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);
	session_start();
	$_SESSION["UserID"] = $objResult["member_id"];
	$_SESSION["User"] = $objResult["user"];
	$strSQL = "INSERT INTO progress(learn_CH,learn_TH,learn_IN,member_id) VALUES ('00000000','0000000','0000000','".$_SESSION["UserID"]."')";
	$objQuery = mysql_query($strSQL);
	$strSQL = "INSERT INTO rank(member_id) VALUES ('".$_SESSION["UserID"]."')";
	$objQuery = mysql_query($strSQL);
	$strSQL = "INSERT INTO quizask(member_id) VALUES ('".$_SESSION["UserID"]."')";
	$objQuery = mysql_query($strSQL);

	?> 	
<script>
setTimeout(function(){
window.parent.location.reload()
},2000);
</script>
	<?php
} else {
      echo "Error: " . $sql . "<br>" . $conn->error;
}
}

$conn->close();
?>
</form>
</body>
</html>