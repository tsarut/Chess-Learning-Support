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
	require "../../config.php";
	mysql_select_db("chess");
	$strSQL = "SELECT * FROM progress WHERE member_id ='".$_SESSION["UserID"]."'";
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);
	$arr = str_split($objResult[$_GET['name']]);
	$arr[$_GET['num']] = '1';
	$str = implode('',$arr);
	$strSQL = "UPDATE progress SET ".$_GET['name']." ='".$str."'  WHERE member_id = '".$_SESSION["UserID"]."' ";
	$objQuery = mysql_query($strSQL);
	//$strSQL = "UPDATE progress SET ".$_GET['name']." =".$_GET['num']."  WHERE UserID = '".$_SESSION["UserID"]."' ";

 ?>

</body>
</html>