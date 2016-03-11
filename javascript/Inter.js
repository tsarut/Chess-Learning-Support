function changeBoard () {
	// body...
	standby=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
	var images = document.getElementsByTagName('img');
	for (var j = 1; j < images.length; j++) {
	x,y=getXY(images[j]);
	if (images[j].className.slice(-1)=="B") {
		standby[x][y]=1;
		if (images[j].className=="PawnB") {
			if ('h'.indexOf(images[j].id.slice(0,1))!=-1) {
				console.log("Up");
			}
		}
	} else{if (images[j].className.slice(-1)=="W") {
		standby[x][y]=-1;
		if (images[j].className=="PawnW") {
			if ('a'.indexOf(images[j].id.slice(0,1))!=-1) {
				console.log("Up");
				var newimg = document.createElement("img");
				newimg.id="Pro";
				newimg.className="Pro";
				newimg.src="gui/Internation/Promotion.png";
				document.body.appendChild(newimg);
			}
		}
	};};
	}
}

function Pawn (x,y) {
	// body...
	if (standby[x][y]*standby[x+standby[x][y]][y]==0) {
	makeMark(x+standby[x][y],y);	
	if ((x==1&&standby[x][y]==1)||(x==6&&standby[x][y]==-1)) {
		if (standby[x][y]*standby[x+2*standby[x][y]][y]==0) {
		makeMark(x+2*standby[x][y],y);	
	
		};
	}		
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
	for (var i = x+1, j = y+1; i < listarr1.length&&j<listarr2.length; i++,j++) {
		if (standby[x][y]*standby[i][j]==0) {
			makeMark(i,j);
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				makeMark(i,j);
				break;
			} else{break;};
		};
	};
	for (var i = x-1, j = y+1; i >= 0&&j<listarr2.length; j++,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			makeMark(i,j);
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				makeMark(i,j);
				break;
			} else{break;};
		};
	};
	for (var j = y-1, i = x+1; i < listarr1.length&&j>=0; j--,i++) {
		if (standby[x][y]*standby[i][j]==0) {
			makeMark(i,j);
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				makeMark(i,j);
				break;
			} else{break;}; 
		};
	};
	for (var i = x-1, j = y-1; i >= 0&&j>=0; j--,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			makeMark(i,j);
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				makeMark(i,j);
				break;
			} else{break;};
		};
	};
}

function Queen (x,y) {
	// body...
	for (var i = x+1, j = y+1; i < listarr1.length&&j<listarr2.length; i++,j++) {
		if (standby[x][y]*standby[i][j]==0) {
			makeMark(i,j);
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				makeMark(i,j);
				break;
			} else{break;};
		};
	};
	for (var i = x-1, j = y+1; i >= 0&&j<listarr2.length; j++,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			makeMark(i,j);
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				makeMark(i,j);
				break;
			} else{break;};
		};
	};
	for (var j = y-1, i = x+1; i < listarr1.length&&j>=0; j--,i++) {
		if (standby[x][y]*standby[i][j]==0) {
			makeMark(i,j);
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				makeMark(i,j);
				break;
			} else{break;}; 
		};
	};
	for (var i = x-1, j = y-1; i >= 0&&j>=0; j--,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			makeMark(i,j);
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				makeMark(i,j);
				break;
			} else{break;};
		};
	};
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