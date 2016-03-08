var listarr1=["a","b","c","d","e","f","g","h"];
var listarr2=["1","2","3","4","5","6","7","8"];

var arr = [["a1","a2","a3","a4","a5","a6","a7","a8"],
["b1","b2","b3","b4","b5","b6","b7","b8"],
["c1","c2","c3","c4","c5","c6","c7","c8"],
["d1","d2","d3","d4","d5","d6","d7","d8"],
["e1","e2","e3","e4","e5","e6","e7","e8"],
["f1","f2","f3","f4","f5","f6","f7","f8"],
["g1","g2","g3","g4","g5","g6","g7","g8"],
["h1","h2","h3","h4","h5","h6","h7","h8"],
["i1","i2","i3","i4","i5","i6","i7","i8"],
["j1","j2","j3","j4","j5","j6","j7","j8"]
];
var standby=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
function sentClass (name,xy) {
	// body...
	x,y=getXY(xy);
	if (name=="Rook") {
		pickIt=xy;
		Rook(x,y);
	} else{if (name=="Pawn") {
		pickIt=xy;
		Pawn(x,y);
	} else{if (name=="Horse") {
		pickIt=xy;
		Horse(x,y);
	} else{if (name=="Bishop") {
		pickIt=xy;
		Bishop(x,y);
	} else{if (name=="Queen"||name=="ProPawn") {
		pickIt=xy;
		Queen(x,y);
	} else{if (name=="King") {
		pickIt=xy;
		King(x,y);
	};};};};};};
setMark();
}
function makeMark (x,y) {
	// body...
	var newimg = document.createElement("img");
	newimg.id=listarr1[x]+listarr2[y];
	newimg.className="Mark";
	newimg.src=pickIt.src;
	document.body.appendChild(newimg);

}
function King (x,y) {
	// body...
		if (x>0) {
		if (standby[x][y]*standby[x-1][y-1]<1) {
			makeMark(x-1,y-1);
		};
		if (standby[x][y]*standby[x-1][y+1]<1) {
			makeMark(x-1,y+1);
		};
		if (standby[x-1][y]*standby[x][y]<1) {
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
		if (standby[x+1][y]*standby[x][y]<1) {
			makeMark(x+1,y);
		};
	};
	if (standby[x][y]*standby[x][y-1]<1) {
		makeMark(x,y-1);
	};
	if (standby[x][y]*standby[x][y+1]<1) {
		makeMark(x,y+1);
	};
}
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
