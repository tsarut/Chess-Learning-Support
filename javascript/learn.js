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
	console.log(sum);
	return sum;
}