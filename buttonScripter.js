// Button Controller

function swapImage(x) {
	if(x=='1'){document.getElementById("btp1").src="gui/button/button_learn2.png";}
	else if(x=='2'){document.getElementById("btp2").src="gui/button/button_play2.png";}
	else if(x=='3'){document.getElementById("btp3").src="gui/button/button_quiz2.png";}
	else if(x=='4'){document.getElementById("btp4").src="gui/button/button_about2.png";}
	else {return;}
}

function swapImgRestore(x) {
	if(x=='1'){document.getElementById("btp1").src="gui/button/button_learn1.png";}
	else if(x=='2'){document.getElementById("btp2").src="gui/button/button_play1.png";}
	else if(x=='3'){document.getElementById("btp3").src="gui/button/button_quiz1.png";}
	else if(x=='4'){document.getElementById("btp4").src="gui/button/button_about1.png";}
	else {return;}
}