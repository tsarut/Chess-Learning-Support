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

var lockKing0=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKing1=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKing2=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKing3=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKing4=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKing5=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKing6=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];
var lockKing7=
[[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0]];

var lineTo=[];



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
	targetList=[];
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
		turn--;
		
		var images= document.getElementsByTagName('img');
		for (var i = 1; i < images.length; i++) {
			if (images[i].className.slice(-1)=='B') {
				markLock(images[i].className.slice(0,-1),images[i]);
				if (lockmove[kingX][kingY]==1) {
					list[more]=images[i];
					more++;
					setRed(images[i]);
					setRed(document.getElementsByClassName("KingW")[0]);
					lockmove[kingX][kingY]=more+1;
				}
			}
		}
		if (more>0) {
			if (more>1) {
				lockOn=1;
			}
			else{
				lockOn=0;
				Check(list[0],kingX,kingY);
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
			//var more=0;
			var images= document.getElementsByTagName('img');
			for (var i = 1; i < images.length; i++) {
				if (images[i].className.slice(-1)=='W') {
				markLock(images[i].className.slice(0,-1),images[i]);
					if (lockmove[kingX][kingY]==1) {
						list[more]=images[i];
						more++;
						setRed(images[i]);
						setRed(document.getElementsByClassName("KingB")[0]);
						lockmove[kingX][kingY]=more+1;
					}
				}
			}
			if (more>0) {
				if (more>1) {
					lockOn=1;
				}
				else{
					Check(list[0],kingX,kingY);
					lockOn=0;
				}
			}
			standby[kingX][kingY]=1;
		}
	}
	lockKing(kingX,kingY);
}
var arrJoin=[[],[],[],[],[],[],[],[]];
var ch;var groupMove=[];
function ableMove() {
	// body...
	groupMove=[];
	count=0
 	ch = document.getElementsByTagName('img');
	for (j = 0; j < ch.length; j++) {
		table=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
		if ((turn==0&&ch[j].className.slice(-1)=='W')) {
			name=ch[j].className.slice(0,-1);
			var groupArr;var move=[];var arrOn;
			x,y=getXY(ch[j]);
			arrOn=10;
			for (var i = 0; i < targetList.length; i++) {
				 arrJoin=[[],[],[],[],[],[],[],[]];
				if (targetList[i]==ch[j].id) {
					arrOn=i;
					groupArr=[lockKing0,lockKing1,lockKing2,lockKing3,lockKing4,lockKing5,lockKing6,lockKing7];
				}
			}
			if (name=="Rook"&&lockOn==0) {
				move=Rook(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					}
				}
			} else{if (name=="Pawn"&&lockOn==0) {
				move=Pawn(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					}
				}
			} else{if ((name=="Horse"||name=="Knight")&&lockOn==0) {
				move=Horse(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					};
				}
			} else{if (name=="Bishop"&&lockOn==0) {
				move=Bishop(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					};
				}
			} else{if ((name=="Queen"||name=="ProPawn")&&lockOn==0) {
				move=Queen(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					};
				}
			} else{if (name=="King") {
				if (x>0) {
				if (standby[x][y]*standby[x-1][y-1]<1&&lockmove[x-1][y-1]!=1) {
					groupMove[count]=ch[j];
					count++;
				};
				if (lockmove[x-1][y+1]!=1&&standby[x][y]*standby[x-1][y+1]<1) {
					groupMove[count]=ch[j];
					count++;
				};
				if (lockmove[x-1][y]!=1&&standby[x-1][y]*standby[x][y]<1) {
					groupMove[count]=ch[j];
					count++;
				};
			} 
			if (x<listarr1.length-1) {
				if (lockmove[x+1][y+1]!=1&&standby[x+1][y+1]*standby[x][y]<1) {
					groupMove[count]=ch[j];
					count++;
				};
				if (lockmove[x+1][y-1]!=1&&standby[x+1][y-1]*standby[x][y]<1) {
					groupMove[count]=ch[j];
					count++;
				};
				if (lockmove[x+1][y]!=1&&standby[x+1][y]*standby[x][y]<1) {
					groupMove[count]=ch[j];
					count++;
				};
			};
			if (lockmove[x][y-1]!=1&&standby[x][y]*standby[x][y-1]<1) {
				groupMove[count]=ch[j];
				count++;
			};
			if (lockmove[x][y+1]!=1&&standby[x][y]*standby[x][y+1]<1) {
				groupMove[count]=ch[j];
				count++;
			};
			};};};};};};
			
		}
		if ((turn==1&&ch[j].className.slice(-1)=='B')) {
			 arrJoin=[[],[],[],[],[],[],[],[]];
			name=ch[j].className.slice(0,-1);
			var groupArr;var move=[];var arrOn;
			x,y=getXY(ch[j]);
			arrOn=10;
			for (var i = 0; i < targetList.length; i++) {
				if (targetList[i]==ch[j].id) {
					arrOn=i;
					groupArr=[lockKing0,lockKing1,lockKing2,lockKing3,lockKing4,lockKing5,lockKing6,lockKing7];
				}
			}
			if (name=="Rook"&&lockOn==0) {
				move=Rook(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					}
				}
			} else{if (name=="Pawn"&&lockOn==0) {
				move=Pawn(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					}
				}
			} else{if ((name=="Horse"||name=="Knight")&&lockOn==0) {
				move=Horse(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					};
				}
			} else{if (name=="Bishop"&&lockOn==0) {
				move=Bishop(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					};
				}
			} else{if ((name=="Queen"||name=="ProPawn")&&lockOn==0) {
				move=Queen(x,y);
				if (more>0) {
					move=joinArr(move,lineTo);
				}
				if (arrOn!=10) {
					if (canMove(joinArr(groupArr[arrOn],move))) {
						groupMove[count]=ch[j];
						count++;
					}
				} else {
					if (canMove(move)) {
						groupMove[count]=ch[j];
						count++;
					};
				}
			} else{if (name=="King") {
				if (x>0) {
				if (standby[x][y]*standby[x-1][y-1]<1&&lockmove[x-1][y-1]!=1) {
					groupMove[count]=ch[j];
					count++;
				};
				if (lockmove[x-1][y+1]!=1&&standby[x][y]*standby[x-1][y+1]<1) {
					groupMove[count]=ch[j];
					count++;
				};
				if (lockmove[x-1][y]!=1&&standby[x-1][y]*standby[x][y]<1) {
					groupMove[count]=ch[j];
					count++;
				};
			} 
			if (x<listarr1.length-1) {
				if (lockmove[x+1][y+1]!=1&&standby[x+1][y+1]*standby[x][y]<1) {
					groupMove[count]=ch[j];
					count++;
				};
				if (lockmove[x+1][y-1]!=1&&standby[x+1][y-1]*standby[x][y]<1) {
					groupMove[count]=ch[j];
					count++;
				};
				if (lockmove[x+1][y]!=1&&standby[x+1][y]*standby[x][y]<1) {
					groupMove[count]=ch[j];
					count++;
				};
			};
			if (lockmove[x][y-1]!=1&&standby[x][y]*standby[x][y-1]<1) {
				groupMove[count]=ch[j];
				count++;
			};
			if (lockmove[x][y+1]!=1&&standby[x][y]*standby[x][y+1]<1) {
				groupMove[count]=ch[j];
				count++;
			};
			};};};};};};
			
		}		
		
	}if (more>0) {
		for (var i = 0; i < groupMove.length; i++) {
			setback(groupMove[i]);
		}
	}
	if (more==0&&count==0) {
		alert('Draw');
	} else {
		if (count==0&&turn==0) {
				alert('Black Win');
			}
			else{if (count==0&&turn==1) {alert('White Win');} else {return true;}
		}
	}
	
}
function sentClass (name,xy) {
	// body...
	var groupArr;var move=[];var arrOn;
	table=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
	x,y=getXY(xy);
	arrOn=10;
	for (var i = 0; i < targetList.length; i++) {
		if (targetList[i]==xy.id) {
			arrOn=i;
			groupArr=[lockKing0,lockKing1,lockKing2,lockKing3,lockKing4,lockKing5,lockKing6,lockKing7];
		}
	}
	if (name=="Rook"&&lockOn==0) {
		pickIt=xy;
		move=Rook(x,y);
		if (more>0) {
			move=joinArr(move,lineTo);
		}
		if (arrOn!=10) {
			markArr(joinArr(groupArr[arrOn],move))
		} else {
			markArr(move);
		}
	} else{if (name=="Pawn"&&lockOn==0) {
		pickIt=xy;
		move=Pawn(x,y);
		if (more>0) {
			move=joinArr(move,lineTo);
		}
		if (arrOn!=10) {
			markArr(joinArr(groupArr[arrOn],move))
		} else {
			markArr(move);
		}
	} else{if ((name=="Horse"||name=="Knight")&&lockOn==0) {
		pickIt=xy;
		move=Horse(x,y);
		if (more>0) {
			move=joinArr(move,lineTo);
		}
		if (arrOn!=10) {
			markArr(joinArr(groupArr[arrOn],move))
		} else {
			markArr(move);
		}
	} else{if (name=="Bishop"&&lockOn==0) {
		pickIt=xy;
		move=Bishop(x,y);
		if (more>0) {
			move=joinArr(move,lineTo);
		}
		if (arrOn!=10) {
			markArr(joinArr(groupArr[arrOn],move))
		} else {
			markArr(move);
		}
	} else{if ((name=="Queen"||name=="ProPawn")&&lockOn==0) {
		pickIt=xy;
		move=Queen(x,y);
		if (more>0) {
			move=joinArr(move,lineTo);
		}
		if (arrOn!=10) {
			markArr(joinArr(groupArr[arrOn],move))
		} else {
			markArr(move);
		}
	} else{if (name=="King") {
		pickIt=xy;
		var KingCanMove=0;
		KingCanMove=King(x,y);
	};};};};};};
	
	setMark();
}
function markLock(name,xy) {
	// body...


	x,y=getXY(xy);

	if (name=="Rook") {
		RookLock(x,y);
	} else{if (name=="Pawn") {
		PawnLock(x,y);
	} else{if (name=="Horse"||name=="Knight") {
		HorseLock(x,y);
	} else{if (name=="Bishop") {
		BishopLock(x,y);
	} else{if (name=="Queen"||name=="ProPawn") {
		QueenLock(x,y);
	} else{if (name=="King") {
		KingLock(x,y);
	};};};};};};
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

function HorseLock (x,y) {
	// body...
	if (x<listarr1.length-2&&!isNaN(lockmove[x+2][y+1])) {
		lockmove[x+2][y+1]=1;
	}
	if (x<listarr1.length-2&&!isNaN(lockmove[x+2][y-1])) {
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
	var HorseMove=[];
	HorseMove=table;
	if (x<listarr1.length-1) {
		if (x<listarr1.length-2) {
		if (standby[x+2][y+1]==0||standby[x+2][y+1]*standby[x][y]==-1) {
			HorseMove[x+2][y+1]=1;
		} 
		if (standby[x+2][y-1]==0||standby[x+2][y-1]*standby[x][y]==-1) {
			HorseMove[x+2][y-1]=1;
		} 
	}
	
	if (x<listarr1.length-1) {
		if ((standby[x+1][y+2]==0||standby[x+1][y+2]*standby[x][y]==-1)&&y<listarr2.length-2) {
			HorseMove[x+1][y+2]=1;
		}	
		if (standby[x+1][y-2]==0||standby[x+1][y-2]*standby[x][y]==-1) {
			HorseMove[x+1][y-2]=1;
		}
	};

	
	};
	if (x>0) {
		if (standby[x-1][y+2]==0||standby[x-1][y+2]*standby[x][y]==-1&&y<listarr2.length-2) {
			HorseMove[x-1][y+2]=1;
		};

		if (standby[x-1][y-2]==0||standby[x-1][y-2]*standby[x][y]==-1) {
			HorseMove[x-1][y-2]=1;
		}
		if (x>1) {
		if (standby[x-2][y+1]==0||standby[x-2][y+1]*standby[x][y]==-1) {
			HorseMove[x-2][y+1]=1;
		} 
		if (standby[x-2][y-1]==0||standby[x-2][y-1]*standby[x][y]==-1) {
			HorseMove[x-2][y-1]=1;
		} 
	}
	};
	return HorseMove;
}	
function PawnLock (x,y) {
	// body...
	if (x>0&&x<listarr1.length-1) {
		if (standby[x+standby[x][y]][y+1]*standby[x][y]!=-1&&!isNaN(standby[x+standby[x][y]][y+1])) {
			lockmove[x+standby[x][y]][y+1]=1;
		};
		if (standby[x+standby[x][y]][y-1]*standby[x][y]!=-1&&!isNaN(standby[x+standby[x][y]][y-1])) {
			lockmove[x+standby[x][y]][y-1]=1;	
		};
	}
}