function detail(name) {
	// body...
	var newdev = document.createElement("div");
	newdev.id="background";
	newdev.className="Pop";
	document.body.appendChild(newdev);
	var newiframe = document.createElement("iframe");
	newiframe.src=(name+".html");
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