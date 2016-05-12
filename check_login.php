<?php
	session_start();
	mysql_connect("localhost","root","");
	mysql_select_db("chess");
	$strSQL = "SELECT * FROM member WHERE user = '".mysql_real_escape_string($_POST['user'])."' 
	and pass = '".mysql_real_escape_string($_POST['pass'])."'";
	$objQuery = mysql_query($strSQL);
	$objResult = mysql_fetch_array($objQuery);
	if(!$objResult)
	{
			echo "Username and Password Incorrect!";
	}
	else
	{
			$_SESSION["UserID"] = $objResult["member_id"];
			$_SESSION["User"] = $objResult["user"];

			session_write_close();
			header("location:index.php");
			
	}
	mysql_close();
?>