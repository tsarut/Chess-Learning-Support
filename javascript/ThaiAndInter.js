var listarr1=["a","b","c","d","e","f","g","h"];
var listarr2=["1","2","3","4","5","6","7","8"];

var arr = [
["a8","b8","c8","d8","e8","f8","g8","h8"],
["a7","b7","c7","d7","e7","f7","g7","h7"],
["a6","b6","c6","d6","e6","f6","g6","h6"],
["a5","b5","c5","d5","e5","f5","g5","h5"],
["a4","b4","c4","d4","e4","f4","g4","h4"],
["a3","b3","c3","d3","e3","f3","g3","h3"],
["a2","b2","c2","d2","e2","f2","g2","h2"],
["a1","b1","c1","d1","e1","f1","g1","h1"]
];
var table=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var standby=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
var lockKingUp=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKingDown=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKingRight=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKingLeft=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKingUR=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKingUL=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKingDR=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKingDL=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];

var lineTo=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];

var list=[];
var typeList=[];
var targetList=[];
var lockOn=0;
var lockmove=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];

var more=0;
function tableOfMark() {
	// body...
	more=0;
	var kingX=0;
	var kingY=0;
	lockmove=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];

	if (turn==1) {
		//kingX,kingY=getXY((document.getElementsByClassName("KingW")[0]));
			for (var i = listarr1.length - 1; i >= 0; i--) {
		if (listarr1[i]==document.getElementsByClassName("KingW")[0].id[0]) {
			kingX=i;
		};
	};
	for (var j = listarr2.length - 1; j >= 0; j--) {
		if (listarr2[j]==document.getElementsByClassName("KingW")[0].id[1]) {
			kingY=j;
		};
	};
	standby[kingX][kingY]=0;
		console.log("Getking"+kingX+" "+kingY);
			turn--;
			
			var images= document.getElementsByTagName('img');
			for (var i = 1; i < images.length; i++) {
				if (images[i].className.slice(-1)=='B') {
				markLock(images[i].className.slice(0,-1),images[i]);
				if (lockmove[kingX][kingY]==1) {
					list[more]=images[i];
					more++;
					lockmove[kingX][kingY]=more+1;
					console.log("more");
				}
				}
				
			}
			if (more>0) {
					console.log("more+");
					if (more>1) {
						lockOn=1;
						console.log("W lock");
					}
					else{
						lockOn=0;
					}
				}
				standby[kingX][kingY]=-1;
		}else{
	if (turn==0) {
		turn++;
		//kingX,kingY=getXY(document.getElementsByClassName("KingB")[0]);
					for (var i = listarr1.length - 1; i >= 0; i--) {
		if (listarr1[i]==document.getElementsByClassName("KingB")[0].id[0]) {
			kingX=i;
		};
	};
	for (var j = listarr2.length - 1; j >= 0; j--) {
		if (listarr2[j]==document.getElementsByClassName("KingB")[0].id[1]) {
			kingY=j;
		};
	};
	standby[kingX][kingY]=0;
		console.log("Getking"+kingX+" "+kingY);
		//var more=0;
		var images= document.getElementsByTagName('img');
		for (var i = 1; i < images.length; i++) {
			if (images[i].className.slice(-1)=='W') {
			markLock(images[i].className.slice(0,-1),images[i]);
				if (lockmove[kingX][kingY]==1) {
					list[more]=images[i];
					more++;
					lockmove[kingX][kingY]=more+1;
					console.log("more");
				}
			}
			
		}
		if (more>0) {
			console.log("more+")
			if (more>1) {
				lockOn=1;
				console.log("B lock");
			}
			else{
				lockOn=0;
			}
		}
		standby[kingX][kingY]=1;
	}}
}

function lockKing(kingX,kingY,className) {
	// body...
	var count=0;
	var markX;
	var markY;
	for (var i = kingX+1, j = kingY+1; i < listarr1.length&&j<listarr2.length; i++,j++) {
		if (standby[kingX][kingY]*standby[i][j]==0) {
			lockKingUR[i][j]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (document.getElementsByID(listarr1[i]+listarr2[j])=="Bishop"+turnName[standby[i][j]+1]||document.getElementsByID(listarr1[i]+listarr2[j])=="Queen"+turnName[standby[i][j]+1]) {
					targetList[4]=listarr1[i]+listarr2[j];
					typeList[4]="upR";
					lockKingUR[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
	count=0;
	for (var i = kingX-1, j = kingY+1; i >= 0&&j<listarr2.length; j++,i--) {
		if (standby[kingX][kingY]*standby[i][j]==0) {
			lockKingDR[i][j]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (document.getElementsByID(listarr1[i]+listarr2[j])=="Bishop"+turnName[standby[i][j]+1]||document.getElementsByID(listarr1[i]+listarr2[j])=="Queen"+turnName[standby[i][j]+1]) {
					targetList[5]=listarr1[i]+listarr2[j];
					typeList[5]="downR";
					lockKingDR[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
	count=0;
	for (var j = kingY-1, i = kingX+1; i < listarr1.length&&j>=0; j--,i++) {
		if (standby[kingX][kingY]*standby[i][j]==0) {
			lockKingUL[i][j]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (document.getElementsByID(listarr1[i]+listarr2[j])=="Bishop"+turnName[standby[i][j]+1]||document.getElementsByID(listarr1[i]+listarr2[j])=="Queen"+turnName[standby[i][j]+1]) {
					targetList[6]=listarr1[i]+listarr2[j];
					typeList[6]="upL";
					lockKingUL[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
	count=0;
	for (var i = kingX-1, j = kingY-1; i >= 0&&j>=0; j--,i--) {
		if (standby[kingX][kingY]*standby[i][j]==0) {
			lockKingDL[i][j]=1;
		}  else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (document.getElementsByID(listarr1[i]+listarr2[j])=="Bishop"+turnName[standby[i][j]+1]||document.getElementsByID(listarr1[i]+listarr2[j])=="Queen"+turnName[standby[i][j]+1]) {
					targetList[7]=listarr1[i]+listarr2[j];
					typeList[7]="downL";
					lockKingUL[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
		for (var i = kingX+1,j=kingY; i < listarr1.length; i++) {
		if (standby[kingX][kingY]*standby[i][kingY]==0) {
			lockKingUp[i][kingY]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (document.getElementsByID(listarr1[i]+listarr2[j])=="Rook"+turnName[standby[i][j]+1]||document.getElementsByID(listarr1[i]+listarr2[j])=="Queen"+turnName[standby[i][j]+1]) {
					targetList[0]=listarr1[i]+listarr2[j];
					typeList[0]="down";
					lockKingUL[i][j]=1;
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
			lockKingDown[i][kingY]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (document.getElementsByID(listarr1[i]+listarr2[j])=="Rook"+turnName[standby[i][j]+1]||document.getElementsByID(listarr1[i]+listarr2[j])=="Queen"+turnName[standby[i][j]+1]) {
					targetList[1]=listarr1[i]+listarr2[j];
					typeList[1]="down";
					lockKingDown[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
	count=0;
	for (var j = kingY+1,x=kingX; j < listarr1.length; j++) {
		if (standby[kingX][kingY]*standby[kingX][j]==0) {
			lockKingRight[kingX][j]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (document.getElementsByID(listarr1[i]+listarr2[j])=="Rook"+turnName[standby[i][j]+1]||document.getElementsByID(listarr1[i]+listarr2[j])=="Queen"+turnName[standby[i][j]+1]) {
					targetList[3]=listarr1[i]+listarr2[j];
					typeList[3]="rigth";
					lockKingRight[i][j]=1;
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
			lockKingLeft[kingX][i]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (document.getElementsByID(listarr1[i]+listarr2[j])=="Rook"+turnName[standby[i][j]+1]||document.getElementsByID(listarr1[i]+listarr2[j])=="Queen"+turnName[standby[i][j]+1]) {
					targetList[3]=listarr1[i]+listarr2[j];
					typeList[3]="rigth";
					lockKingRight[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};

}
}
function sentClass (name,xy) {
	// body...

	x,y=getXY(xy);
	if (name=="Rook"&&lockOn==0) {
		console.log(x+" "+y);
		pickIt=xy;
		Rook(x,y);
	} else{if (name=="Pawn"&&lockOn==0) {
		pickIt=xy;
		Pawn(x,y);
	} else{if ((name=="Horse"||name=="Knight")&&lockOn==0) {
		pickIt=xy;
		Horse(x,y);
	} else{if (name=="Bishop"&&lockOn==0) {
		pickIt=xy;
		Bishop(x,y);
	} else{if ((name=="Queen"||name=="ProPawn")&&lockOn==0) {
		pickIt=xy;
		Queen(x,y);
	} else{if (name=="King") {
		pickIt=xy;
		King(x,y);
	};};};};};};
setMark();
}
function markLock(name,xy) {
	// body...
	//console.log(xy);

	x,y=getXY(xy);

	if (name=="Rook") {
		pickIt=xy;
		RookLock(x,y);
	} else{if (name=="Pawn") {
		pickIt=xy;
		PawnLock(x,y);
	} else{if (name=="Horse"||name=="Knight") {
		pickIt=xy;
		HorseLock(x,y);
	} else{if (name=="Bishop") {
		pickIt=xy;
		BishopLock(x,y);
	} else{if (name=="Queen"||name=="ProPawn") {
		pickIt=xy;
		QueenLock(x,y);
	} else{if (name=="King") {
		pickIt=xy;
		KingLock(x,y);
	};};};};};};
}
function makeMark (x,y) {
	// body...
	var newimg = document.createElement("img");
	newimg.id=listarr1[x]+listarr2[y];
	newimg.className="Mark";
	newimg.src=pickIt.src;
	document.body.appendChild(newimg);

}
function KingLock (x,y) {
	// body...
		if (x>0) {
			lockmove[x-1][y-1]=1;
			lockmove[x-1][y+1]=1;
			lockmove[x-1][y]=1;
	} 
	if (x<listarr1.length-1) {
		lockmove[x+1][y+1]=1;
		lockmove[x+1][y-1]=1;
		lockmove[x+1][y]=1;
	};
	lockmove[x][y-1]=1;
	lockmove[x][y+1]=1;
}
function King (x,y) {
	// body...
		if (x>0) {
		if (lockmove[x-1][y-1]!=1&&standby[x][y]*standby[x-1][y-1]<1) {
			makeMark(x-1,y-1);
		};
		if (lockmove[x-1][y+1]!=1&&standby[x][y]*standby[x-1][y+1]<1) {
			makeMark(x-1,y+1);
		};
		if (lockmove[x-1][y]!=1&&standby[x-1][y]*standby[x][y]<1) {
			makeMark(x-1,y);
		};
	} 
	if (x<listarr1.length-1) {
		if (lockmove[x+1][y+1]!=1&&standby[x+1][y+1]*standby[x][y]<1) {
			makeMark(x+1,y+1);
		};
		if (lockmove[x+1][y-1]!=1&&standby[x+1][y-1]*standby[x][y]<1) {
			makeMark(x+1,y-1);
		};
		if (lockmove[x+1][y]!=1&&standby[x+1][y]*standby[x][y]<1) {
			makeMark(x+1,y);
		};
	};
	if (lockmove[x][y-1]!=1&&standby[x][y]*standby[x][y-1]<1) {
		makeMark(x,y-1);
	};
	if (lockmove[x][y+1]!=1&&standby[x][y]*standby[x][y+1]<1) {
		makeMark(x,y+1);
	};
}
function HorseLock (x,y) {
	// body...
	if (x<listarr1.length-1&&!isNaN(lockmove[x+2][y+1])) {
		lockmove[x+2][y+1]=1;
	}
	if (x<listarr1.length-1&&!isNaN(lockmove[x+2][y-1])) {
		lockmove[x+2][y-1]=1;
	}
	if (x<listarr1.length-1&&!isNaN(lockmove[x+1][y+2])) {
	lockmove[x+1][y+2]=1;
	}
	if (x<listarr1.length-1&&!isNaN(lockmove[x+1][y-2])) {
	lockmove[x+1][y-2]=1;
	}
	if (x>0) {
		if (!isNaN(lockmove[x-1][y+2])) {
			lockmove[x-1][y+2]=1;
		}
		if (!isNaN(lockmove[x-1][y-2])) {
			lockmove[x-1][y-2]=1;
		}
		if (x>1) {
			if (!isNaN(lockmove[x-2][y+1])) {
		lockmove[x-2][y+1]=1;
	}
	if (!isNaN(lockmove[x-2][y-1])) {
		lockmove[x-2][y-1]=1;
	}
		}
	}
	};
function Horse (x,y) {
	// body...
	if (x<listarr1.length-1) {
		if (x<listarr1.length-2) {
		if (standby[x+2][y+1]==0||standby[x+2][y+1]*standby[x][y]==-1) {
			makeMark(x+2,y+1);
		} 
		if (standby[x+2][y-1]==0||standby[x+2][y-1]*standby[x][y]==-1) {
			makeMark(x+2,y-1);
		} 
	}
	
	if (x<listarr1.length-1) {
		if ((standby[x+1][y+2]==0||standby[x+1][y+2]*standby[x][y]==-1)&&y<listarr2.length-2) {
			makeMark(x+1,y+2);
		}	
		if (standby[x+1][y-2]==0||standby[x+1][y-2]*standby[x][y]==-1) {
			makeMark(x+1,y-2);
		}
	};

	
	};
	if (x>0) {
		if (standby[x-1][y+2]==0||standby[x-1][y-2]*standby[x][y]==-1&&y<listarr2.length-2) {
			makeMark(x-1,y+2);
		};

		if (standby[x-1][y-2]==0||standby[x-1][y-2]*standby[x][y]==-1) {
			makeMark(x-1,y-2);
		}
		if (x>1) {
		if (standby[x-2][y+1]==0||standby[x-2][y+1]*standby[x][y]==-1) {
			makeMark(x-2,y+1);
		} 
		if (standby[x-2][y-1]==0||standby[x-2][y-1]*standby[x][y]==-1) {
			makeMark(x-2,y-1);
		} 
	}
	};
}	
