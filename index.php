<!DOCTYPE html>
<html>
<head>
	<title>Welcome to ITC Chess Learning Application!!!</title>
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<style type="text/css">
	@import url(font/th_charm_of_au.css);
	@import url(font/thsarabunnew.css);
	@charset "utf-8";

	#head{
		float: right;
		right: 0px;
		position: absolute;
	}

	#main{
		float: left;
		margin-left: -10px;
		margin-top: 5%;
	}

	body {
		background-image:url(gui/bg.png);
		background-size:100%;
		background-position:center;
		background-attachment:fixed;
	}


	div{
		float: right;
		margin-top: 6%;
		margin-right:25%;
	}
	#logo{
	    position: absolute;
	    top: 0; bottom:0; left: 0; right:0;
	    margin: auto;
	    z-index: -1;
		zoom:1.5;

	}
	#showRank{
		top: 0px;
	    margin-top: 5%;
	    background-color: rgba(100,50,30,0.5);
	    margin-right: 20px;
	    border: 1px solid black;
	    border-collapse: collapse;

	}
	#Rank{
		text-align: center;
	    width: 300px;
	    right: 10px;
	    border: 1px solid black;
	    border-collapse: collapse;
	}
	#fRank{
		width: 280px;
		border-right: 1px solid black;
	    border-collapse: collapse;
	}
	th{
		border: 1px solid black;
	    border-collapse: collapse;
	}
	</style>
	<script type="text/javascript" src="buttonScripter.js"></script>
	<script type="text/javascript" src="javascript/setup.js"></script>
	<script type="text/javascript">
	</script>
</head>

<body>
	<img src="gui/logo.png" id="logo">
	<table id="main">
		<tr>
			<td style="position: relative;">
			<?php 
			session_start();
			if (($_SESSION==Array( ))) {
				# code...
				echo '<img src="gui/login.png">';
				echo '<form action="check_login.php" method="post">';
				echo '<input class="text" name="user" id="User">';
				echo '<input class="text" name="pass" id="Pass" type="password">';
				echo '<input value="" id="submitLogin" type="submit" onmouseover="swapImage(6)" onmouseout="swapImgRestore(6)">';
				echo '</form>';
				echo '<input id="onRe" onclick="register()" type="submit" value="" onmouseover="swapImage(7)" onmouseout="swapImgRestore(7)">';
			} else {
				# code...
				echo '<img src="gui/online.png">';
				echo '<h2 id="userlogin">'.$_SESSION["User"].'</h2>';
				echo '<form action="logout.php">';
				echo '<input type="submit" value="" id="submitLogout" onmouseover="swapImage(4)" onmouseout="swapImgRestore(4)"></input>';
				echo '</form>';
			}
			 ?>
			</td>
		</tr>
		<tr>
			<td>
				<a href="type_select.php">
				<img id="btp1" src="gui/button/button_learn1.png" onmouseover="swapImage(1)" onmouseout="swapImgRestore(1)"></a>	
			</td>
		</tr>
		<tr>
			<td>
				<a href="type_select_play.php">
				<img id="btp2" src="gui/button/button_play1.png" onmouseover="swapImage(2)" onmouseout="swapImgRestore(2)"></a>
			</td>
		</tr>
		<tr>
			<td>
				<a href="quiz_select.php">
				<img id="btp3" src="gui/button/button_quiz1.png" onmouseover="swapImage(3)" onmouseout="swapImgRestore(3)"></a>
			</td>
		</tr>
	</table>



	<div id="showRank">
		<table id="Rank">
			<tr>
				<th id="fRank">User</th>
				<th>Rank</th>
			</tr>
			<tr>
				<td id="fRank">Kuhaku</td>
				<td>100</td>
			</tr>
			<tr>
				<td id="fRank">kami-nii-sama</td>
				<td>99</td>
			</tr>
			<tr>
				<td id="fRank">glen</td>
				<td>96</td>
			</tr>
			<tr>
				<td id="fRank">tsarut</td>
				<td>93</td>
			</tr>
			<tr>
				<td id="fRank">Gun</td>
				<td>88</td>
			</tr>
			<tr>
				<td id="fRank">=w=</td>
				<td>75</td>
			</tr>
			<tr>
				<td id="fRank">blah_blah</td>
				<td>69</td>
			</tr>
			<tr>
				<td id="fRank">hachi</td>
				<td>58</td>
			</tr>
			<tr>
				<td id="fRank">qwertyui1234</td>
				<td>49</td>
			</tr>
			<tr>
				<td id="fRank">jun</td>
				<td>44</td>
			</tr>


		</table>
	</div>
		


</body>

</html>