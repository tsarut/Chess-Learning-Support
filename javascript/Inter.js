

function changeBoard () {
	table=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
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
			if ('h'.indexOf(images[j].id.slice(0,1))!=-1) {
				var ProID=images[j].id;
				MakePro('B',ProID);
			}
		}
	} else{if (images[j].className.slice(-1)=="W") {
		standby[x][y]=-1;
		if (images[j].className=="PawnW") {
			if ('a'.indexOf(images[j].id.slice(0,1))!=-1) {
				var ProID=images[j].id;
				MakePro('W',ProID);
			}
		}
	};};
	}
	tableOfMark();
}

function PawnLock (x,y) {
	// body...
	if (standby[x+standby[x][y]][y+1]*standby[x][y]!=-1&&!isNaN(standby[x+standby[x][y]][y+1])) {
		lockmove[x+standby[x][y]][y+1]=1;
	};
	if (standby[x+standby[x][y]][y-1]*standby[x][y]!=-1&&!isNaN(standby[x+standby[x][y]][y-1])) {
		lockmove[x+standby[x][y]][y-1]=1;	
	};
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
function BishopLock (x,y) {
	// body...
	for (var i = x+1, j = y+1; i < listarr1.length&&j<listarr2.length; i++,j++) {
		if (standby[x][y]*standby[i][j]==0) {
			lockmove[i][j]=1;
		} else{
			lockmove[i][j]=1;
			break;		
		};
	};
	for (var i = x-1, j = y+1; i >= 0&&j<listarr2.length; j++,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			lockmove[i][j]=1;
		} else{
			lockmove[i][j]=1;
			break;		
		};
	};
	for (var j = y-1, i = x+1; i < listarr1.length&&j>=0; j--,i++) {
		if (standby[x][y]*standby[i][j]==0) {
			lockmove[i][j]=1;
		} else{
			lockmove[i][j]=1;
			break;		
		};
	};
	for (var i = x-1, j = y-1; i >= 0&&j>=0; j--,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			lockmove[i][j]=1;
		} else{
			lockmove[i][j]=1;
			break;		
		};
}}
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
function MakePro(BW,ProID) {
	// body...
	document.getElementById('Pro').style.display='inline';
	document.getElementById('Block').style.display='inline';
	var newimg = document.createElement("img");
	newimg.id="Pro_main";
	newimg.className="Pro";
	newimg.src="gui/Internation/Promotion.png";
	document.getElementById("Pro").appendChild(newimg);
	newimg = document.createElement("img");
	newimg.id="Pro_Qu";
	newimg.className="Pro";
	newimg.src="gui/Internation/PromotionQ.png";
	newimg.addEventListener("mousemove",function(){ this.style.opacity=1; });
	newimg.addEventListener("mouseout",function(){ this.style.opacity=0; });
	newimg.addEventListener("click",function(){ Promote('Queen',BW,ProID) });
	document.getElementById("Pro").appendChild(newimg);
	newimg = document.createElement("img");
	newimg.id="Pro_Bi";
	newimg.className="Pro";
	newimg.src="gui/Internation/PromotionB.png";
	newimg.addEventListener("mousemove",function(){ this.style.opacity=1; });
	newimg.addEventListener("mouseout",function(){ this.style.opacity=0; });
	newimg.addEventListener("click",function(){ Promote('Bishop',BW,ProID) });
	document.getElementById("Pro").appendChild(newimg);
	newimg = document.createElement("img");
	newimg.id="Pro_Ro";
	newimg.className="Pro";
	newimg.src="gui/Internation/PromotionR.png";
	newimg.addEventListener("mousemove",function(){ this.style.opacity=1; });
	newimg.addEventListener("mouseout",function(){ this.style.opacity=0; });
	newimg.addEventListener("click",function(){ Promote('Rook',BW,ProID) });
	document.getElementById("Pro").appendChild(newimg);
	var newimg = document.createElement("img");
	newimg.id="Pro_Kn";
	newimg.className="Pro";
	newimg.src="gui/Internation/PromotionKN.png";
	newimg.addEventListener("mousemove",function(){ this.style.opacity=1; });
	newimg.addEventListener("mouseout",function(){ this.style.opacity=0; });
	newimg.addEventListener("click",function(){ Promote('Knight',BW,ProID) });
	document.getElementById("Pro").appendChild(newimg);
}

function Promote(name,WB,mark){
	document.getElementById(mark).className=name.concat(WB);
	document.getElementById(mark).src="gui/Internation/"+name+WB+".png";
	document.getElementsByClassName("Pro").remove();
	document.getElementById('Pro').style.display='none';
	document.getElementById('Block').style.display='none';
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
function QueenLock (x,y) {
	// body...
	for (var i = x+1, j = y+1; i < listarr1.length&&j<listarr2.length; i++,j++) {
		if (standby[x][y]*standby[i][j]==0) {
			lockmove[i][j]=1;
		} else{
			lockmove[i][j]=1;
			break;		
		};
	};
	for (var i = x-1, j = y+1; i >= 0&&j<listarr2.length; j++,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			lockmove[i][j]=1;
		} else{
			lockmove[i][j]=1;
			break;		
		};
	};
	for (var j = y-1, i = x+1; i < listarr1.length&&j>=0; j--,i++) {
		if (standby[x][y]*standby[i][j]==0) {
			lockmove[i][j]=1;
		} else{
			lockmove[i][j]=1;
			break;		
		};
	};
	for (var i = x-1, j = y-1; i >= 0&&j>=0; j--,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			lockmove[i][j]=1;
		} else{
			lockmove[i][j]=1;
			break;		
		};
	};
		for (var i = x+1; i < listarr1.length; i++) {
		if (standby[x][y]*standby[i][y]==0) {
			lockmove[i][y]=1;
		} else{
			lockmove[i][y]=1;
			break;		
		};
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