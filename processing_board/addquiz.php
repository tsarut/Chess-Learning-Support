<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php 
	session_start();
	echo $_GET['name'];
	echo $_GET['num'];
	require "../config.php";
	mysql_select_db("chess");
	$strSQL = "SELECT * FROM rank WHERE member_id ='".$_SESSION["UserID"]."'";
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);
	$point=$objResult[$_GET['name']];
	$point=$point+$_GET['num'];
			# code...
	$strSQL = "UPDATE rank SET `".$_GET['name']."` =".$point."  WHERE member_id = '".$_SESSION["UserID"]."' ";
	$objQuery = mysql_query($strSQL);
 ?>
</body>
</html>