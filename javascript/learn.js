function detail(name) {
	// body...
	var newdev = document.createElement("div");
	newdev.id="background";
	newdev.className="Pop";
	document.body.appendChild(newdev);
	var newiframe = document.createElement("iframe");
	newiframe.src=('learn/detail/'+name+".html");
	newiframe.id="detail";
	newiframe.className="Pop";
	document.body.appendChild(newiframe);
	document.getElementById('background').addEventListener("click",function(){ document.getElementsByClassName("Pop").remove(); });

	}
function quiz(name){
	document.getElementsByClassName("Pop").remove();
	var newdev = document.createElement("div");
	newdev.id="background";
	newdev.className="Pop";
	document.body.appendChild(newdev);
	var newiframe = document.createElement("iframe");
	newiframe.src=('learn/test/'+name+".html");
	newiframe.id="detail";
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
var savemark=[];
function save(mark) {
	// body...
	if (document.getElementById(mark).style.opacity==0) {
		document.getElementById(mark).style.opacity=1;
	}else{
		if (document.getElementById(mark).style.opacity==1) {
			document.getElementById(mark).style.opacity=0;
		}
	}
}
var ch_r;
var ch_kn;
var ch_e;
var ch_g;
var ch_k;
var ch_c;
var ch_p;
var th_r=[2, 7, 10, 11, 13, 14, 17, 22];
var th_kn=[1, 3, 5, 9, 15, 19, 21, 23];
var th_b=[6, 7, 8, 16, 18];
var th_k=[6, 7, 8, 11, 13, 16, 17, 18];
var th_q=[6, 8, 16, 18];
var th_p=[6, 8, 16, 17, 18];
var in_r=[2, 8, 11, 12, 14, 15, 18, 23];
var in_kn=[1, 3, 6, 10, 16, 20, 22, 24];
var in_b=[0, 4, 7, 9, 17, 19, 21, 25];
var in_k=[7, 8, 9, 12, 14, 17, 18, 19];
var in_q=[2, 7, 8, 9, 11, 12, 14, 15, 17, 18, 19, 23];
var in_p=[18];
function getSubmit(name) {
	// body...
	var sum=[];
	console.log(name);
	var myiframe=document.getElementById("iframe").contentWindow;
	var arr=myiframe.document.getElementsByClassName('mark');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].style.opacity==1) {
			sum.push(i);
		}
	}
	var groupNum=["ch_r","ch_kn","ch_e","ch_g","ch_k","ch_c","ch_p","th_r","th_kn","th_b","th_k","th_q","th_p","in_r","in_kn","in_b","in_k","in_q","in_p"];
	var groupTest=[ch_r,ch_kn,ch_e,ch_g,ch_k,ch_c,ch_p,th_r,th_kn,th_b,th_k,th_q,th_p,in_r,in_kn,in_b,in_k,in_q,in_p];
	var test=0;
	for (var i = 0; i < groupNum.length; i++) {
		if (groupNum[i]==name) {
			test=i;
		}
	}
	if (groupTest[test].length!=sum.length) {
		alert('not correct')
	} else {
		var correct=1;
		for (var i = 0; i < sum.length; i++) {
			if (sum[i]!=groupTest[test][i]) {
				correct=0;
			}
		}
		alert('correct');
		if (i<=6) {
		window.parent.location.href='addPro.php?name=learn_CH&num='+i;	
		} else {
			if (i<=12) {
				window.parent.location.href='addPro.php?name=learn_TH&num='+i-6;
			} else {window.parent.location.href='addPro.php?name=learn_TH&num='+i-12}
		}
		window.parent.location.href='addPro.php?name='name;
	}
	console.log(sum);
}