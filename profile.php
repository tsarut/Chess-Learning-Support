<?php
	session_start();
	require "config.php";
	mysql_select_db("chess");

	$res = mysql_query("SELECT * FROM `progress` WHERE `member_id` = {$_SESSION['UserID']}");
	$progress = mysql_fetch_assoc($res);

	$res = mysql_query("SELECT * FROM `quizask` WHERE `member_id` = {$_SESSION['UserID']}");
	$quizask = mysql_fetch_assoc($res);

	$res = mysql_query("SELECT * FROM `rank` WHERE `member_id` = {$_SESSION['UserID']}");
	$rank = mysql_fetch_assoc($res);

	function getProgressScore($txt){
		$arr = str_split($txt);
		$score = array_sum($arr);
		$total = strlen($txt);

		$percent = $score *100.0 / $total;

		return array(
			'score'=>$score,
			'total'=>$total,
			'percent'=>$percent
		);
	}

?><html>
<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<style type="text/css">
		@import url(font/thsarabunnew.css);
		@import url(font/th_charm_of_au.css);
		@charset "utf-8";

		body {
			background-image:url(gui/bg.png);
			background-size:100%;
			background-position:center;
			background-attachment:fixed;
		}

		#content{
			font-family: 'THSarabunNew', sans-serif;
			font-size: 25px;
			color: rgb(153,102,51);
		}

		#hcontent{
			font-family: 'THSarabunNew', sans-serif;
			font-weight:bold;
			font-size: 30px;
			text-align: center;
			color: rgb(153,102,51);
		}

		#uname{
			font-family: 'THCharmofAU', serif;
			font-size: 40px;
			font-weight: bold;
			text-align: center;
			color: rgb(153,102,51);
		}

		#progressarea{
			border: 3px ridge rgb(153,102,51);
			height: 10px;
		}

		#progress{
			background-color: rgb(125,255,125);
			width: 50%;
			height: 10px;
		}

	</style>
</head>
<body>
	<center><div id="uname"><?php echo $_SESSION["User"]; ?></div></center>
	<center>
	<table>
		<th id="hcontent">ความคืบหน้าในการเรียนหมากรุกสากล</th>
		<tr>
			<?php
				$score = getProgressScore($progress['learn_IN']);
			?>
			<td id="content">
				<div id="progressarea"><div id="progress" style="width: <?php echo $score['percent']; ?>%"></div></div>
			</td> 
			<td id="content">
				<?php echo $score['score']; ?>/<?php echo $score['total']; ?>
			</td>
		</tr>
		<tr><th id="hcontent">ความคืบหน้าในการเรียนหมากรุกไทย</th></tr>
		<tr>
			<?php
				$score = getProgressScore($progress['learn_TH']);
			?>
			<td id="content">
				<div id="progressarea"><div id="progress" style="width: <?php echo $score['percent']; ?>%"></div></div>
			</td> 
			<td id="content">
				<?php echo $score['score']; ?>/<?php echo $score['total']; ?>
			</td>
		</tr>
		<tr><th id="hcontent">ความคืบหน้าในการเรียนหมากรุกจีน</th></tr>
		<tr>
			<?php
				$score = getProgressScore($progress['learn_CH']);
			?>
			<td id="content">
				<div id="progressarea"><div id="progress" style="width: <?php echo $score['percent']; ?>%"></div></div>
			</td> 
			<td id="content">
				<?php echo $score['score']; ?>/<?php echo $score['total']; ?>
			</td>
		</tr>
		<tr><th id="hcontent">คะแนนรวมควิซถาม-ตอบ</th></tr>
		<tr>
			<?php
				$maxScore = 100;
				$score = array(
					'score'=>array_sum($quizask) - $quizask['member_id'],
					'total'=>$maxScore,
				);
				$score['percent'] = $score['score'] * 100.0 / $score['total'];
			?>
			<td id="content">
				<div id="progressarea"><div id="progress" style="width: <?php echo $score['percent']; ?>%"></div></div>
			</td> 
			<td id="content">
				<?php echo $score['score']; ?>/<?php echo $score['total']; ?>
			</td>
		</tr>
		<tr><th id="hcontent">คะแนนรวมควิซแก้ปัญหาการเดินหมาก</th></tr>
		<tr>
			<?php
				$maxScore = 20;
				$score = array(
					'score'=>array_sum($rank) - $rank['member_id'],
					'total'=>$maxScore,
				);
				$score['percent'] = $score['score'] * 100.0 / $score['total'];
			?>
			<td id="content">
				<div id="progressarea"><div id="progress" style="width: <?php echo $score['percent']; ?>%"></div></div>
			</td> 
			<td id="content">
				<?php echo $score['score']; ?>/<?php echo $score['total']; ?>
			</td>
		</tr>
	</table>
	</center>
</body>
</html>