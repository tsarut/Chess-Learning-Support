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
	mysql_connect("localhost","root","");
	mysql_select_db("chess");
	$strSQL = "SELECT * FROM quizask WHERE member_id ='".$_SESSION["UserID"]."'";
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);
	$point=$objResult[$_GET['name']];
	if ($point<$_GET['num']) {
		# code...
		$strSQL = "UPDATE quizask SET `".$_GET['name']."` =".$_GET['num']."  WHERE member_id = '".$_SESSION["UserID"]."' ";
	}else{
		$strSQL = "UPDATE quizask SET `".$_GET['name']."` =".$point."  WHERE member_id = '".$_SESSION["UserID"]."' ";
	}
	$objQuery = mysql_query($strSQL);
 ?>
</body>
</html>