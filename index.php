<!DOCTYPE html>
<html>
<head>
	<title>Welcome to ITC Chess Learning Application!!!</title>
	<style type="text/css">
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
	#background{
		background-color: rgba(0,0,0,0.5);
		width: 100%;
		position:fixed;
		z-index: 1;
		height: 1000000px;
		top: 0px;
		left: 0px;
		margin-top: 0px;
	}
	#onRe{
		cursor: pointer;
		background-image: url(gui/input_register.png);
	    position: absolute;
	    height: 30px;
	    width: 100px;
	   	padding: 0;
	    border: none;
	    background-color: rgba(0,0,0,0);
	    top: 191px;
	    right: 41px;
	}
	.text{
	    position: absolute;
	    
	    background-color: rgba(0,0,0,0);
	}
	#User{
		font-family: 'THSarabunNew', sans-serif;
		font-size: 20px;
		right: 37px;
	    bottom: 131px;
	    width: 185px;
	    height: 30px;
	}
	#Pass{
		font-family: 'THSarabunNew', sans-serif;
		font-size: 20px;
		right: 37px;
	    bottom: 81px;
	    width: 185px;
	    height: 30px;
	}
	#submitLogin{
		cursor: pointer;
		background-image: url(gui/input_login.png);
		position: absolute;
		height: 30px;
		width: 100px;
	    padding: 0;
	    border: none;
	    background-color: rgba(0,0,0,0);
	    top: 191px;
	    left: 41px;
	}
	</style>
	<script type="text/javascript" src="buttonScripter.js"></script>
	<script type="text/javascript">
		function register() {
			// body...
				var newdev = document.createElement("div");
	newdev.id="background";
	newdev.className="Pop";
	document.body.appendChild(newdev);
	var newiframe = document.createElement("iframe");
	newiframe.src=("register.html");
	newiframe.id="register";
	newiframe.className="Pop";
	document.body.appendChild(newiframe);
	document.getElementById('background').addEventListener("click",function(){ document.getElementsByClassName("Pop").remove(); });

			
		}
		Element.prototype.remove = function() {
this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for(var i = this.length - 1; i >= 0; i--) {
		if(this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
}
	</script>
</head>

<body>
	<img src="gui/logo.png" id="logo">
	<table id="main">
		<tr>
			<td style="position: relative;">
				<img src="gui/login.png">
				<form action="check_login.php" method="post">
				<input class="text" name="user" id="User">
				<input class="text" name="pass" id="Pass" type="password">
				<input value="" id="submitLogin" type="submit" onmouseover="swapImage(6)" onmouseout="swapImgRestore(6)">
				</form>
				<input id="onRe" onclick="register()" type="submit" value="" onmouseover="swapImage(7)" onmouseout="swapImgRestore(7)">
			</td>
		</tr>
		<tr>
			<td>
				<a href="type_select.html">
				<img id="btp1" src="gui/button/button_learn1.png" onmouseover="swapImage(1)" onmouseout="swapImgRestore(1)"></a>	
			</td>
		</tr>
		<tr>
			<td>
				<a href="type_select.html">
				<img id="btp2" src="gui/button/button_play1.png" onmouseover="swapImage(2)" onmouseout="swapImgRestore(2)"></a>
			</td>
		</tr>
		<tr>
			<td>
				<a href="quiz_select.html">
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