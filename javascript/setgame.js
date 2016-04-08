var x=0;
var y=0;
var turn = 0;
var turnName=['W',,'B'];
var pickIt;
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

function setMark () {
	var MarkEV = document.getElementsByClassName("Mark");
for (var i = 0; i < MarkEV.length; i++) {
	MarkEV[i].onclick = function () {
		document.getElementById(this.id).remove();
		pickIt.id=this.id;
		document.getElementsByClassName("Mark").remove();
		changeBoard();
	};
}
}

function setclick () {
setMark();

var images = document.getElementsByTagName('img');
images[0].onclick=function(){
	document.getElementsByClassName("Mark").remove();
}
for (var j = 1; j < images.length; j++) {
	x,y=getXY(images[j]);
	if (images[j].className.slice(-1)=="B") {
		standby[x][y]=1;
	} else{if (images[j].className.slice(-1)=="W") {
		standby[x][y]=-1;
	};};

	images[j].onclick = function () {
		document.getElementsByClassName("Mark").remove();

		sentClass(this.className.slice(0,-1),this);	
		
		
		
	};
}
}

function getXY (thisclass) {
	for (var i = listarr1.length - 1; i >= 0; i--) {
		if (listarr1[i]==thisclass.id[0]) {
			x=i;
		};
	};
	for (var j = listarr2.length - 1; j >= 0; j--) {
		if (listarr2[j]==thisclass.id[1]) {
			y=j;
		};
	};
	//console.log(x+" "+y);
	return x,y;

}

function RookLock (x,y) {
	// body...
	for (var i = x+1; i < listarr1.length; i++) {
		if (standby[x][y]*standby[i][y]==0) {
			lockmove[i][y]=1;
		} else{
			lockmove[i][y]=1;
				break;
			} 
		
	};
	for (var i = x-1; i >= 0; i--) {
		if (standby[x][y]*standby[i][y]==0) {
			lockmove[i][y]=1;
		} else{
			lockmove[i][y]=1;
			break;
		};
	};
	for (var i = y+1; i < listarr1.length; i++) {
		if (standby[x][y]*standby[x][i]==0) {
			lockmove[x][i]=1;
		} else{
				lockmove[x][i]=1;
				break;
		};
	};
	for (var i = y-1; i >= 0; i--) {
		if (standby[x][y]*standby[x][i]==0) {
			lockmove[x][i]=1;
		} else{
			lockmove[x][i]=1;
			break;
		};
	};
}


function Rook (x,y) {
	// body...
	for (var i = x+1; i < listarr1.length; i++) {
		if (standby[x][y]*standby[i][y]==0) {
			makeMark(i,y);
		} else{
			if (standby[x][y]*standby[i][y]==-1) {
				makeMark(i,y);
				break;
			} else{break;};
		};
	};
	for (var i = x-1; i >= 0; i--) {
		if (standby[x][y]*standby[i][y]==0) {
			makeMark(i,y);
		} else{
			if (standby[x][y]*standby[i][y]==-1) {
				makeMark(i,y);
				break;
			} else{break;};
		};
	};
	for (var i = y+1; i < listarr1.length; i++) {
		if (standby[x][y]*standby[x][i]==0) {
			makeMark(x,i);
		} else{
			if (standby[x][y]*standby[x][i]==-1) {
				makeMark(x,i);
				break;
			} else{break;}; 
		};
	};
	for (var i = y-1; i >= 0; i--) {
		if (standby[x][y]*standby[x][i]==0) {
			makeMark(x,i);
		} else{
			if (standby[x][y]*standby[x][i]==-1) {
				makeMark(x,i);
				break;
			} else{break;};
		};
	};
}

