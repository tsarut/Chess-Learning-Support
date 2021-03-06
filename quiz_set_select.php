<!DOCTYPE html>
<html>
<head>
	<title>Choose quiz set!</title>
	<link rel="stylesheet" type="text/css" href="css/setup.css">
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<script type="text/javascript">
		function resize(){document.getElementsByTagName('body')[0].style.zoom=screen.availHeight/790;}
	</script>
	<style type="text/css">
	@import url(font/th_charm_of_au.css);
	@import url(font/thsarabunnew.css);
	@charset "utf-8";

	#main{
		float: left;
		margin-left: -10px;
		margin-top: 100px;
	}

	#center{
		float: right;
		margin-top: 150px;
		margin-right: 50px;
	}
	#in,#th,#ch{
		float: left;
		margin-right: 10px;
	}

	#register{
		top: 0px;
		bottom: 0px;
		margin: auto 0;
		width: 80%;
	    z-index: 1;
	    right: 10%;
	    position: fixed;
	    background-color: white;
	    height: 80%;
	}
	#onRe{
		opacity: 0;
		position: relative;
	    right: 145px;
	    height: 30px;
	    width: 100px;
	    bottom: 30px;
	    opacity: 0;
	}

	a{color: black;}
	a:hover{color: rgb(178,133,86);}
	h2{float: left; text-align: center;}
	.iconlogo{zoom:0.25; float: left;}
	.icon{zoom:0.75; float: left;}
	.icon2{zoom:0.8; float: left;}
	.sub{height: 100px; cursor: pointer;}
	.sub2{height: 100px; margin-left: 250px; cursor: pointer;}

	</style>

	<script type="text/javascript" src="buttonScripter.js"></script>
	<script type="text/javascript" src="javascript/setup.js"></script>
	<script type="text/javascript">			
	</script>

</head>

<body onload="resize()">
<a href="index.php"><img src="gui/logo.png" id="logo" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.5'"></a>
<img src="gui/page_name/pname_quiz1.png" id="title">
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
				?>
	<script type="text/javascript">
	document.getElementById("userlogin").addEventListener("click", profile);
	</script><?php
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
	<div id="center">
		<div id="in">
			<img src="gui\button\button_select_in.png">
			<a href="quiz/aa/quiz_in_es.html"><div class="sub"><img src="gui\international\PawnB.png" class="icon"><h2>– ง่าย</h2> </div></a>
			<a href="quiz/aa/quiz_in_nm.html"><div class="sub"><img src="gui\international\RookB.png" class="icon"><h2>– ปานกลาง</h2> </div></a>
			<a href="quiz/aa/quiz_in_hd.html"><div class="sub"><img src="gui\international\KingB.png" class="icon"><h2>– ยาก</h2> </div></a>
		</div>
		<div id="th">
			<img src="gui\button\button_select_th.png">
			<a href="quiz/aa/quiz_th_es.html"><div class="sub"><img src="gui\Thai\PawnB.png" class="icon"><h2>– ง่าย</h2> </div></a>
			<a href="quiz/aa/quiz_th_nm.html"><div class="sub"><img src="gui\Thai\RookB.png" class="icon"><h2>– ปานกลาง</h2> </div></a>
			<a href="quiz/aa/quiz_th_hd.html"><div class="sub"><img src="gui\Thai\KingB.png" class="icon"><h2>– ยาก</h2> </div></a>
		</div>
		<div id="ch">
			<img src="gui\button\button_select_ch.png">
			<a href="quiz/aa/quiz_ch_es.html"><div class="sub"><img src="gui\Xiangqi\PawnB.png" class="icon2"><h2>&nbsp;– ง่าย</h2> </div></a>
			<a href="quiz/aa/quiz_ch_nm.html"><div class="sub"><img src="gui\Xiangqi\RookB.png" class="icon2"><h2>&nbsp;– ปานกลาง</h2> </div></a>
			<a href="quiz/aa/quiz_ch_hd.html"><div class="sub"><img src="gui\Xiangqi\KingB.png" class="icon2"><h2>&nbsp;– ยาก</h2> </div></a>
		</div>	
		<a href="quiz/aa/quiz_itc.html"><div class="sub2"><img src="gui/logo.png" class="iconlogo"><h2>หมากรุกสากล ไทย และจีน</h2><img src="gui/logo.png" class="iconlogo"></div></a>
	</div>
		


</body>

</html>