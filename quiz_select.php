<!DOCTYPE html>
<html>
<head>
	<title>Choose quiz type!</title>
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

	#choice{
		float: right;
		margin-top: 150px;
		margin-right: 45px;
		text-align: center;
		width: 60%;
	}
	.choose,.move{
		float: left;
		margin-left: 10px;
		margin-right: 10px;
		border-style: outset;
		
	}
	.img_quiz,.text_quiz{
	width: 300px;
	}

	</style>
	<script type="text/javascript" src="buttonScripter.js"></script>
	<script type="text/javascript" src="javascript/setup.js"></script>
</head>

<body onload="resize()">
	<img src="gui/page_name/pname_quiz.png" id="title">
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


	<div id="choice">
<a href="quiz_set_select.php">
<div class="choose"> 
	<div class="img_quiz"><img src="gui/button/button_pic_select_quiz1.png"></div>
	<div class="text_quiz"><img src="gui/button/button_select_quiz1.png">
	<p>เป็นการถามคำตามแบบตัวเลือก 4 ตัวเลือกให้เล่นกันสนุกๆ</p>
	</div>
</div>
</a>
<a href="type_select_Quiz.php">
<div class="move">
	<div class="img_quiz"><img src="gui/button/button_pic_select_quiz2.png"></div>
	<div class="text_quiz"><img src="gui/button/button_select_quiz2.png">
	<p>เป็นการจำลองหรือทำตามเงือนไขการเล่นด้วยตัวหมากบนกระดาน</p>
	</div>
</div>
</a>
	</div>
		


</body>

</html>