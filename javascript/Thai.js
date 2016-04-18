function changeBoard () {
		if (turn==1) {
		turn--;
	}else
	if (turn==0) {
		turn++;
	}
	
	standby=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
	arrMove=
[[1,1,1,1,1,1,1,1]
,[1,1,1,1,1,1,1,1]
,[1,1,1,1,1,1,1,1]
,[1,1,1,1,1,1,1,1]
,[1,1,1,1,1,1,1,1]
,[1,1,1,1,1,1,1,1]
,[1,1,1,1,1,1,1,1]
,[1,1,1,1,1,1,1,1]];
	var images = document.getElementsByTagName('img');
	for (var j = 1; j < images.length; j++) {
	x,y=getXY(images[j]);
	if (images[j].className.slice(-1)=="B") {
		standby[x][y]=1;
		if (images[j].className=="PawnB") {
			if (['f','g','h'].indexOf(images[j].id.slice(0,1))!=-1) {
				images[j].className="ProPawnB";
				images[j].src="gui/Thai/ProPawnB.png";
			}
		}
	} else{if (images[j].className.slice(-1)=="W") {
		standby[x][y]=-1;
		if (images[j].className=="PawnW") {
			if (['a','b','c'].indexOf(images[j].id.slice(0,1))!=-1) {
				images[j].className="ProPawnW";
				images[j].src="gui/Thai/ProPawnW.png";
			}
		}
	};};
	}
}
function Pawn (x,y) {
	// body...
	if (standby[x][y]*standby[x+standby[x][y]][y]==0) {
	makeMark(x+standby[x][y],y);	
	};
	if (standby[x+standby[x][y]][y+1]*standby[x][y]==-1) {
		makeMark(x+standby[x][y],y+1);
	};
	if (standby[x+standby[x][y]][y-1]*standby[x][y]==-1) {
		makeMark(x+standby[x][y],y-1);
	};
}



function Bishop (x,y) {
	// body...
	if (x>0) {
		if (standby[x][y]*standby[x-1][y-1]<1) {
			makeMark(x-1,y-1);
		};
		if (standby[x][y]*standby[x-1][y+1]<1) {
			makeMark(x-1,y+1);
		};
		if (standby[x][y]==-1&&standby[x-1][y]*standby[x][y]<1) {
			makeMark(x-1,y);
		};
	} 
	if (x<listarr1.length-1) {
		if (standby[x+1][y+1]*standby[x][y]<1) {
			makeMark(x+1,y+1);
		};
		if (standby[x+1][y-1]*standby[x][y]<1) {
			makeMark(x+1,y-1);
		};
		if (standby[x][y]==1&&standby[x+1][y]*standby[x][y]<1) {
			makeMark(x+1,y);
		};
	};
}

function Queen (x,y) {
	// body...
	if (x>0) {
		if (standby[x][y]*standby[x-1][y-1]<1) {
			makeMark(x-1,y-1);
		};
		if (standby[x][y]*standby[x-1][y+1]<1) {
			makeMark(x-1,y+1);
		};
	} 
	if (x<listarr1.length-1) {
		if (standby[x+1][y+1]*standby[x][y]<1) {
			makeMark(x+1,y+1);
		};
		if (standby[x+1][y-1]*standby[x][y]<1) {
			makeMark(x+1,y-1);
		};
	};
}