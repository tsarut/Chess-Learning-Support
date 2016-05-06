var ans=['','','','','','','','','',''];
	var arrId=[["a11","a12","a13","a14"],["a21","a22","a23","a24"],["a31","a32","a33","a34"],["a41","a42","a43","a44"],["a51","a52","a53","a54"],["a61","a62","a63","a64"],["a71","a72","a73","a74"],["a81","a82","a83","a84"],["a91","a92","a93","a94"],["a101","a102","a103","a104"]]
		function sentAns(idName) {
			// body...
			ans[Number(idName.slice(1,-1))-1]=idName;
		}
		var test;
		function setClick() {
			document.getElementsByTagName('body')[0].style.zoom=screen.availHeight/950;
			// body...
			document.getElementById("result").style.visibility = "hidden";
			var ans = document.getElementsByClassName('answer');
			for (var i = 0; i < ans.length; i++) {
				ans[i].onclick=function save() {
					// body...

					sentAns(this.id);
					for (var i = 0; i < 4; i++) {
						document.getElementById(arrId[Number(this.id.slice(1,-1))-1][i]).style.backgroundColor="rgb(255,240,225)";
					}
					this.style.backgroundColor="rgb(178,133,86)";
					
				}			
				ans[i].onmouseover=function(){test=this;
					if (this.style.backgroundColor=="rgb(255, 240, 225)"||this.style.backgroundColor=="") {this.style.backgroundColor="rgb(255,202,148)"}};
				ans[i].onmouseout=function(){
					if (this.style.backgroundColor=="rgb(255, 202, 148)") {this.style.backgroundColor="rgb(255,240,225)"}};
			}
		}
	
		function sumAns(){
			var count=0;
			for (var i = ans.length - 1; i >= 0; i--) {
				if (ans[i]==ansC[i]) {
					count++;
				}
			}
			document.getElementById("result").style.visibility = "visible";
			document.getElementById('ansC').innerHTML=count+'/10';
			document.getElementById("submit").style.visibility = "hidden";
		}