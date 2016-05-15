// Button Controller

function swapImage(x) {
	if(x=='1'){document.getElementById("btp1").src="gui/button/button_learn2.png";}
	else if(x=='2'){document.getElementById("btp2").src="gui/button/button_play2.png";}
	else if(x=='3'){document.getElementById("btp3").src="gui/button/button_quiz2.png";}
	else if(x=='4'){document.getElementById("submitLogout").style.backgroundImage="url(gui/input_logout2.png)";}
	else if(x=='5'){document.getElementById("submit").style.backgroundImage="url(gui/input_confirm2.png)";}
	else if(x=='6'){document.getElementById("submitLogin").style.backgroundImage="url(gui/input_login2.png)";}
	else if(x=='7'){document.getElementById("onRe").style.backgroundImage="url(gui/input_register2.png)";}
	else if(x=='8'){document.getElementById("testopen").src="../../gui/posttest2.png";}
	else {return;}
}

function swapImgRestore(x) {
	if(x=='1'){document.getElementById("btp1").src="gui/button/button_learn1.png";}
	else if(x=='2'){document.getElementById("btp2").src="gui/button/button_play1.png";}
	else if(x=='3'){document.getElementById("btp3").src="gui/button/button_quiz1.png";}
	else if(x=='4'){document.getElementById("submitLogout").style.backgroundImage="url(gui/input_logout.png)";}
	else if(x=='5'){document.getElementById("submit").style.backgroundImage="url(gui/input_confirm.png)";}
	else if(x=='6'){document.getElementById("submitLogin").style.backgroundImage="url(gui/input_login.png)";}
	else if(x=='7'){document.getElementById("onRe").style.backgroundImage="url(gui/input_register.png)";}
	else if(x=='8'){document.getElementById("testopen").src="../../gui/posttest.png";}
	else {return;}
}