var thisclass ="";
var listarr1=["a","b","c","d","e","f","g","h","i","j"];
var listarr2=["1","2","3","4","5","6","7","8","9"];

var arr = [["a1","a2","a3","a4","a5","a6","a7","a8","a9"],
["b1","b2","b3","b4","b5","b6","b7","b8","b9"],
["c1","c2","c3","c4","c5","c6","c7","c8","c9"],
["d1","d2","d3","d4","d5","d6","d7","d8","d9"],
["e1","e2","e3","e4","e5","e6","e7","e8","e9"],
["f1","f2","f3","f4","f5","f6","f7","f8","f9"],
["g1","g2","g3","g4","g5","g6","g7","g8","g9"],
["h1","h2","h3","h4","h5","h6","h7","h8","h9"],
["i1","i2","i3","i4","i5","i6","i7","i8","i9"],
["j1","j2","j3","j4","j5","j6","j7","j8","j9"]
];
var table=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var standby=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var lockKing0=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var lockKing1=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var lockKing2=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var lockKing3=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
function lockKing(kingX,kingY,className) { 	
	// body...
	console.log(kingX+' '+kingY+' '+standby[kingX][kingY]);

	var markX;
	var markY;
		for (var i = kingX+standby[kingX][kingY],j=kingY; i < listarr1.length&& i>=0; i=i+standby[kingX][kingY]) {
		if (standby[kingX][kingY]*standby[i][kingY]==0) {
			
		} else
		{
			if (document.getElementById(listarr1[i]+listarr2[j]).className=="King"+turnName[standby[i][j]+1]){
				console.log(document.getElementById(listarr1[kingX]+listarr2[kingY]).className+' win');
			}else{
				break;	
			}
		};
	};
}
function changeBoard () {
	// body...
	console.log(standby);
	standby=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
	arrMove=
	[[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1]];
	if (pickIt.className.slice(0,-1)==Pawn) {

	};
	var images = document.getElementsByTagName('img');
	for (var j = 1; j < images.length; j++) {
	x,y=getXY(images[j]);
	if (images[j].className.slice(-1)=="B") {
		standby[x][y]=1;
	} else{if (images[j].className.slice(-1)=="W") {
		standby[x][y]=-1;
	};};
	}
	document.getElementsByClassName("KingW")[0].style.backgroundColor='';
	document.getElementsByClassName("KingB")[0].style.backgroundColor='';
	for (var i = 0; i < list.length; i++) {
		list[i].style.backgroundColor='';
	}
	tableOfMark();
}
var list=[];
var typeList=[];
var targetList=[];
var lockmove=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
function tableOfMark() {
	// body...
	targetList=[];
	more=0;
	var kingX=0;
	var kingY=0;
	lockmove=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];

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
					images[i].style.backgroundColor='rgba(255,0,0,0.5)';
					document.getElementsByClassName("KingW")[0].style.backgroundColor='rgba(255,0,0,0.5)';
					lockmove[kingX][kingY]=more+1;
					console.log("more");
					console.log(list);
				}
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
					images[i].style.backgroundColor='rgba(255,0,0,0.5)';
					document.getElementsByClassName("KingB")[0].style.backgroundColor='rgba(255,0,0,0.5)';
					lockmove[kingX][kingY]=more+1;
					console.log("more");
					console.log(list);
				}
			}
			
		}

		standby[kingX][kingY]=1;
	}}
	lockKing(kingX,kingY);
}


//var selectID;
//var selectClass;

function sentClass (name,xy) {
	// body...
	var groupArr;var move=[];var arrOn=10;
		table=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
	x,y=getXY(xy);
	if (name=="Rook") {
		move=Rook(x,y);
		pickIt=xy;
				if (arrOn!=10) {
			markArr(joinArr(groupArr[arrOn],move))
		} else {
			markArr(move);
		}
	} else{if (name=="Pawn") {
		Pawn(x,y)
		pickIt=xy;
	} else{if (name=="Horse") {
		Horse(x,y);
		pickIt=xy;
	} else{if (name=="Elephant") {
		Elephant(x,y);
		pickIt=xy;
	} else{if (name=="Guard") {
		Guard(x,y);
		pickIt=xy;
	} else{if (name=="Cannon") {
		Cannon(x,y);
		pickIt=xy;
	} else{if (name=="King") {
		King(x,y);
		pickIt=xy;
	};};};};};};};
setMark();
}
function markLock(name,xy) {
	// body...
	//console.log(xy);

	x,y=getXY(xy);

	if (name=="Rook") {
		RookLock(x,y);
	} else{if (name=="Pawn") {
		PawnLock(x,y);
	} else{if (name=="Horse") {
		HorseLock(x,y);
	} else{if (name=="Cannon") {
		CannonLock(x,y);
	} ;};};};
}

function Pawn (x,y) {
	// body...
	makeMark(x+standby[x][y],y);
	if (x*standby[x][y]>4) {
		makeMark(x,y+1);
		makeMark(x,y-1);		
	} else{
		if (standby[x][y]==-1&&x<=4) {
		makeMark(x,y+1);
		makeMark(x,y-1);
		} 
	};

}
function PawnLock (x,y) {
	// body...
	lockmove[x+standby[x][y]][y]=1;
	if (x*standby[x][y]>4) {
		lockmove[x][y+1]=1;
		lockmove[x][y-1]=1;
	} else{
		if (standby[x][y]==-1&&x<=4) {
		lockmove[x][y+1]=1;
		lockmove[x][y-1]=1;
		} 
	};
}
function Horse (x,y) {
	// body...
	if (x<listarr1.length-1) {
		if (standby[x+1][y]==0&&x<8) {
		if (standby[x+2][y+1]==0||standby[x+2][y+1]*standby[x][y]==-1) {
			makeMark(x+2,y+1);
		} 
		if (standby[x+2][y-1]==0||standby[x+2][y-1]*standby[x][y]==-1) {
			makeMark(x+2,y-1);
		} 
	}
	if (standby[x][y+1]==0) {
		if (standby[x+1][y+2]==0||standby[x+1][y+2]*standby[x][y]==-1) {
			makeMark(x+1,y+2);
		} 
		if (standby[x-1][y+2]==0||standby[x-1][y-2]*standby[x][y]==-1) {
			makeMark(x-1,y+2);
		} 
	};
	};
	if (x>0) {
		if (standby[x-1][y]==0&&x>1) {
		if (standby[x-2][y+1]==0||standby[x-2][y+1]*standby[x][y]==-1) {
			makeMark(x-2,y+1);
		} 
		if (standby[x-2][y-1]==0||standby[x-2][y-1]*standby[x][y]==-1) {
			makeMark(x-2,y-1);
		} 
	}
	};
		if (standby[x][y-1]==0&&x>1) {
		if (standby[x-1][y-2]==0||standby[x-1][y-2]*standby[x][y]==-1) {
			makeMark(x-1,y-2);
		} if (x<listarr1.length-1) {
			if (standby[x+1][y-2]==0||standby[x+1][y-2]*standby[x][y]==-1) {
			makeMark(x+1,y-2);
		}
		};
		 
		
	};
	
}
function HorseLock (x,y) {
	// body...
	if (x<listarr1.length-1) {
		if (standby[x+1][y]==0&&x<8) {
		if (!isNaN(lockmove[x+2][y+1])) {
			lockmove[x+2][y+1]=1;
		} 
		if (!isNaN(lockmove[x+2][y-1])) {
			lockmove[x+2][y-1]=1;
		} 
	}
	if (standby[x][y+1]==0) {
		if (!isNaN(lockmove[x+1][y+2])) {
			lockmove[x+1][y+2]=1;
		} 
		if (x>0) {
		if (!isNaN(lockmove[x-1][y+2])) {
			lockmove[x-1][y+2]=1;
		} }
	};
	};
	if (x>0) {
		if (standby[x-1][y]==0&&x>1) {
		if (!isNaN(lockmove[x-2][y+1])) {
			lockmove[x-2][y+1]=1;
		} 
		if (!isNaN(lockmove[x-2][y-1])) {
			lockmove[x-2][y-1]=1;
		} 
	}
	};
		if (standby[x][y-1]==0&&x>1) {
		if (!isNaN(lockmove[x-1][y-2])) {
			lockmove[x-1][y-2]=1;
		} if (x<listarr1.length-1) {
			if (!isNaN(lockmove[x+1][y-2])) {
			lockmove[x+1][y-2]=1;
		}
		};
		 
		
	};
	
}
function Elephant (x,y) {
	// body...
	if (standby[x][y]==-1) {
		if (x>6) {
			if (standby[x-1][y-1]==0) {
			if (standby[x-2][y-2]>-1) {
				makeMark(x-2,y-2);
			};
		}
		if (standby[x-1][y+1]==0) {
			if (standby[x-2][y+2]>-1) {
				makeMark(x-2,y+2);
			};
		}
		};
		if (x<8) {if (standby[x+1][y+1]==0) {
			if (standby[x+2][y+2]>-1) {
				makeMark(x+2,y+2);
			};
		} 
		
		if (standby[x+1][y-1]==0) {
			if (standby[x+2][y-2]>-1) {
				makeMark(x+2,y-2);
			};
		}};
		
	} else{
		if (standby[x][y]==1) {
			if (x>1) {
		if (standby[x-1][y-1]==0) {
			if (standby[x-2][y-2]<1) {
				makeMark(x-2,y-2);
			};
		}
		if (standby[x-1][y+1]==0) {
			if (standby[x-2][y+2]<1) {
				makeMark(x-2,y+2);
			};
		}		
			} 
			if (x<3) {
						if (standby[x+1][y+1]==0) {
			if (standby[x+2][y+2]>-1) {
				makeMark(x+2,y+2);
			};
		} 
		
		
		if (standby[x+1][y-1]==0) {
			if (standby[x+2][y-2]>-1) {
				makeMark(x+2,y-2);
			};
		}
			};

	}
	};
}
function Guard (x,y) {
	// body...
	
	if (standby[1][4]<1&&(x==0||x==2)) {
		makeMark(1,4);
	};
	if (standby[8][4]>-1&&(x==9||x==7)) {
		makeMark(8,4);
	};
	if (x==1) {
		if (standby[0][3]<1) {
			makeMark(0,3);
		};
		if (standby[0][5]<1) {
			makeMark(0,5);
		};
		if (standby[2][3]<1) {
			makeMark(2,3);
		};
		if (standby[2][5]<1) {
			makeMark(2,5);
		};
	};
	
	if (x==8) {
		if (standby[9][3]>-1) {
			makeMark(9,3);
		};
		if (standby[9][5]>-1) {
			makeMark(9,5);
		};
		if (standby[7][3]>-1) {
			makeMark(7,3);
		};
		if (standby[7][5]>-1) {
			makeMark(7,5);
		};
	};
	
}
function Cannon (x,y) {

	for (var i = x+1; i < 10; i++) {
		if (standby[x][y]*standby[i][y]==0) {
			makeMark(i,y);
		} else{
			for (var j = i+1; j < 10; j++) {
				if (standby[x][y]*standby[j][y]==-1) {	
					makeMark(j,y);
					break;
				}
			} break;
		};
	};
	for (var i = x-1; i >= 0; i--) {
		if (standby[x][y]*standby[i][y]==0) {
			makeMark(i,y);
		} else{
			for (var j = i-1; j >= 0; j--) {
				if (standby[x][y]*standby[j][y]==-1) {	
					makeMark(j,y);
					break;
				}
			} break;
		};
	};
	for (var i = y+1; i < 10; i++) {
		if (standby[x][y]*standby[x][i]==0) {
			makeMark(x,i);
		} else{
			for (var j = i+1; j < 10; j++) {
				if (standby[x][y]*standby[x][j]==-1) {	
					makeMark(x,j);
					break;
				}
			} break;
		};
	};
	for (var i = y-1; i >= 0; i--) {
		if (standby[x][y]*standby[x][i]==0) {
			makeMark(x,i);
		} else{
			for (var j = i-1; j >= 0; j--) {
				if (standby[x][y]*standby[x][j]==-1) {	
					makeMark(x,j);
					break;
				}
			} break;
		};
	};

}
function CannonLock (x,y) {

	for (var i = x+1; i < 10; i++) {
		if (standby[x][y]*standby[i][y]==0) {
		} else{
			for (var j = i+1; j < 10; j++) {
				lockmove[j][y]=1;
				if (standby[x][y]*standby[j][y]!=0) {
					break;
				}
			} break;
		};
	};
	for (var i = x-1; i >= 0; i--) {
		if (standby[x][y]*standby[i][y]==0) {
		} else{
			for (var j = i-1; j >= 0; j--) {
				lockmove[j][y]=1;
				if (standby[x][y]*standby[j][y]!=0) {
					break;
				}
			} break;
		};
	};
	for (var i = y+1; i < 10; i++) {
		if (standby[x][y]*standby[x][i]==0) {
		} else{
			for (var j = i+1; j < 10; j++) {
				lockmove[x][j]=1;
				if (standby[x][y]*standby[x][j]!=0) {	
					break;
				}
			} break;
		};
	};
	for (var i = y-1; i >= 0; i--) {
		if (standby[x][y]*standby[x][i]==0) {
		} else{
			for (var j = i-1; j >= 0; j--) {
				lockmove[x][j]=1;
				if (standby[x][y]*standby[x][j]!=0) {	
					break;
				}
			} break;
		};
	};

}

function King (x,y) {
	// body...
	if (x*standby[x][y]>0||x*standby[x][y]<-7) {
		if (standby[x-1][y]*standby[x][y]<1) {
			makeMark(x-1,y);
		};
	}
	if (x*standby[x][y]<2&&x*standby[x][y]>-9) {
		if (standby[x+1][y]*standby[x][y]<1) {
			makeMark(x+1,y);
		};
	};
	if (y>3&&standby[x][y-1]*standby[x][y]<1) {
		makeMark(x,y-1);
	};
	if (y<5&&standby[x][y+1]*standby[x][y]<1) {
		makeMark(x,y+1);
	};
}

function makeMark (x,y) {
	// body...
	var newimg = document.createElement("img");
	newimg.id=listarr1[x]+listarr2[y];
	newimg.className="Mark";
	newimg.src="../gui/xiangqi/Mark_Allow.png";
	document.body.appendChild(newimg);

}