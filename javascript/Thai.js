function lockKing(kingX,kingY,className) { 	
	// body...
	typeList=[0,0,0,0,0,0,0,0,0];
	console.log(kingX+' '+kingY);	
	var count=0;
	var markX;
	var markY;
	for (var i = kingX+1,j=kingY; i < listarr1.length; i++) {
		if (standby[kingX][kingY]*standby[i][kingY]==0) {
			lockKing0[i][kingY]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Rook"+turnName[standby[i][j]+1])) {
					targetList[0]=listarr1[markX]+listarr2[markY];
					typeList[0]=1;
					lockKing0[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
	count=0;
	for (var i = kingX-1,j=kingY; i >= 0; i--) {
		if (standby[kingX][kingY]*standby[i][kingY]==0) {
			lockKing1[i][kingY]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Rook"+turnName[standby[i][j]+1])) {
					targetList[1]=listarr1[markX]+listarr2[markY];
					typeList[1]=1;
					lockKing1[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
	count=0;
	for (var j = kingY+1,i=kingX; j < listarr1.length; j++) {
		if (standby[kingX][kingY]*standby[kingX][j]==0) {
			lockKing2[kingX][j]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Rook"+turnName[standby[i][j]+1])) {
					targetList[2]=listarr1[markX]+listarr2[markY];
					typeList[2]=1;
					lockKing2[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
	count=0;
	for (var j = kingY-1,i=kingX; j >= 0; j--) {
		if (standby[kingX][kingY]*standby[kingX][i]==0) {
			lockKing3[kingX][i]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Rook"+turnName[standby[i][j]+1])) {
					targetList[3]=listarr1[markX]+listarr2[markY];
					typeList[3]=1;
					lockKing3[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}				
		};
	}
}

function changeBoard () {
	
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
	document.getElementsByClassName("KingW")[0].style.backgroundColor='';
	document.getElementsByClassName("KingB")[0].style.backgroundColor='';
	for (var i = 0; i < list.length; i++) {
		list[i].style.backgroundColor='';
	}
	tableOfMark();
}
function Pawn (x,y) {
	// body...
	var PawnMove=[];
	PawnMove=table;
	if (standby[x][y]*standby[x+standby[x][y]][y]==0) {
	PawnMove[x+standby[x][y]][y]=1;
	};
	if (standby[x+standby[x][y]][y+1]*standby[x][y]==-1) {
		PawnMove[x+standby[x][y]][y+1]=1;
	};
	if (standby[x+standby[x][y]][y-1]*standby[x][y]==-1) {
		PawnMove[x+standby[x][y]][y-1]=1;
	};
	return PawnMove;
}



function Bishop (x,y) {
	// body...
	var BishopMove=[];
	BishopMove=table;
	if (x>0) {
		if (standby[x][y]*standby[x-1][y-1]<1) {
			BishopMove[x-1][y-1]=1;
		};
		if (standby[x][y]*standby[x-1][y+1]<1) {
			BishopMove[x-1][y+1]=1;
		};
		if (standby[x][y]==-1&&standby[x-1][y]*standby[x][y]<1) {
			BishopMove[x-1][y]=1;
		};
	} 
	if (x<listarr1.length-1) {
		if (standby[x+1][y+1]*standby[x][y]<1) {
			BishopMove[x+1][y+1]=1;
		};
		if (standby[x+1][y-1]*standby[x][y]<1) {
			BishopMove[x+1][y-1]=1;
		};
		if (standby[x][y]==1&&standby[x+1][y]*standby[x][y]<1) {
			BishopMove[x+1][y]=1;
		};
	};
	return BishopMove;
}
function BishopLock (x,y) {
	// body...
	if (x>0) {
		if (standby[x][y]*standby[x-1][y-1]<1) {
			lockmove[x-1][y-1]=1;
		};
		if (standby[x][y]*standby[x-1][y+1]<1) {
			lockmove[x-1][y+1]=1;
		};
		if (standby[x][y]==-1&&standby[x-1][y]*standby[x][y]<1) {
			lockmove[x-1][y]=1;
		};
	} 
	if (x<listarr1.length-1) {
		if (standby[x+1][y+1]*standby[x][y]<1) {
			lockmove[x+1][y+1]=1;
		};
		if (standby[x+1][y-1]*standby[x][y]<1) {
			lockmove[x+1][y-1]=1;
		};
		if (standby[x][y]==1&&standby[x+1][y]*standby[x][y]<1) {
			lockmove[x+1][y]=1;
		};
	};
}

function Queen (x,y) {
	// body...
	var QueenMove=[];
	QueenMove=table;
	if (x>0) {
		if (standby[x][y]*standby[x-1][y-1]<1) {
			QueenMove[x-1][y-1]=1;
		};
		if (standby[x][y]*standby[x-1][y+1]<1) {
			QueenMove[x-1][y+1]=1;
		};
	} 
	if (x<listarr1.length-1) {
		if (standby[x+1][y+1]*standby[x][y]<1) {
			QueenMove[x+1][y+1]=1;
		};
		if (standby[x+1][y-1]*standby[x][y]<1) {
			QueenMove[x+1][y-1]=1;
		};
	};
	return QueenMove;
}
function QueenLock (x,y) {
	// body...
	if (x>0) {
		if (standby[x][y]*standby[x-1][y-1]<1) {
			lockmove[x-1][y-1]=1;
		};
		if (standby[x][y]*standby[x-1][y+1]<1) {
			lockmove[x-1][y+1]=1;
		};
	} 
	if (x<listarr1.length-1) {
		if (standby[x+1][y+1]*standby[x][y]<1) {
			lockmove[x+1][y+1]=1;
		};
		if (standby[x+1][y-1]*standby[x][y]<1) {
			lockmove[x+1][y-1]=1;
		};
	};
}