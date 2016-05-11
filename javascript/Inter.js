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
function Check(name,kingX,kingY) {
	// body...
	console.log('Check')
	lineTo=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
	x,y=getXY(list[0]);
	if (name.className.slice(0,-1)=='Queen'||name.className.slice(0,-1)=='Bishop'||name.className.slice(0,-1)=='Rook') {
		if (kingX-x==0||kingY-y==0) {
			for (var i = 0; Math.abs(i) <= Math.abs(kingX-x); i=i+(kingX-x)/Math.abs(kingX-x)) {
				for (var j = 0; Math.abs(j) <= Math.abs(kingY-y); j=j+(kingY-y)/Math.abs(kingY-y)) {
					lineTo[i+x][j+y]=1;
				}
			}
			
		} else {
			for (var i = 0 ,j=0; Math.abs(i) <= Math.abs(kingX-x)&&Math.abs(j) <= Math.abs(kingY-y); i=i+(kingX-x)/Math.abs(kingX-x), j=j+(kingY-y)/Math.abs(kingY-y)) {
					lineTo[i+x][j+y]=1;
			}
		}
	} else {lineTo[x][y]=1}
	lineTo[kingX][kingY]=0;
}
function makeMark (x,y) {
	// body...
	var newimg = document.createElement("img");
	newimg.id=listarr1[x]+listarr2[y];
	newimg.className="Mark";
	if (document.getElementById(listarr1[x]+listarr2[y])) {
		newimg.src=document.getElementById(listarr1[x]+listarr2[y]).src;
	}else{newimg.src="../gui/international/Mark_Allow.png";}
	document.body.appendChild(newimg);

}
function lockKing(kingX,kingY,className) { 	
	// body...
	typeList=[0,0,0,0,0,0,0,0,0];
	console.log(kingX+' '+kingY);	
	var count=0;
	var markX;
	var markY;
	for (var i = kingX+1, j = kingY+1; i < listarr1.length&&j<listarr2.length; i++,j++) {
		if (i<0||j<0||i>listarr1||j>listarr2) {
			console.log("UR");
			break;
		}
		if (standby[kingX][kingY]*standby[i][j]==0) {
			lockKing4[i][j]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Bishop"+turnName[standby[i][j]+1]||document.getElementById(listarr1[i]+listarr2[j]).className=="Queen"+turnName[standby[i][j]+1])) {
					targetList[4]=listarr1[markX]+listarr2[markY];
					typeList[4]=1;
					lockKing4[i][j]=1;
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
		if (i<0||j<0||i>listarr1||j>listarr2) {
			console.log("DR");
			break;
		}
		if (standby[kingX][kingY]*standby[i][j]==0) {
			lockKing5[i][j]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Bishop"+turnName[standby[i][j]+1]||document.getElementById(listarr1[i]+listarr2[j]).className=="Queen"+turnName[standby[i][j]+1])) {
					targetList[5]=listarr1[markX]+listarr2[markY];
					typeList[5]=1;
					lockKing5[i][j]=1;
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
		if (i<0||j<0||i>listarr1||j>listarr2) {
			console.log("UL");
			break;
		}
		if (standby[kingX][kingY]*standby[i][j]==0) {
			lockKing6[i][j]=1;
		} else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Bishop"+turnName[standby[i][j]+1]||document.getElementById(listarr1[i]+listarr2[j]).className=="Queen"+turnName[standby[i][j]+1])) {
					targetList[6]=listarr1[markX]+listarr2[markY];
					typeList[6]=1;
					lockKing6[i][j]=1;
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
		if (i<0||j<0||i>listarr1||j>listarr2) {
			console.log("DL");
			break;
		}
		if (standby[kingX][kingY]*standby[i][j]==0) {
			lockKing7[i][j]=1;
		}  else{
			if (standby[kingX][kingY]!=standby[i][j]&&count==0) {
			break;	
			}
			else{
				count++;
				if (count==2) {
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Bishop"+turnName[standby[i][j]+1]||document.getElementById(listarr1[i]+listarr2[j]).className=="Queen"+turnName[standby[i][j]+1])) 
						{targetList[7]=listarr1[markX]+listarr2[markY];
					typeList[7]=1;
					lockKing7[i][j]=1;
					}
					break;
				}
				markX=i;
				markY=j;
			}
			
					
		};
	};
	count=0;
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
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Rook"+turnName[standby[i][j]+1]||document.getElementById(listarr1[i]+listarr2[j]).className=="Queen"+turnName[standby[i][j]+1])) {
					console.log(i+' '+j+'Queen');
					targetList[0]=listarr1[markX]+listarr2[markY];
					typeList[0]=1;
					lockKing0[i][j]=1;
					console.log(i+' '+j+'Queen');
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
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Rook"+turnName[standby[i][j]+1]||document.getElementById(listarr1[i]+listarr2[j]).className=="Queen"+turnName[standby[i][j]+1])) {
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
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Rook"+turnName[standby[i][j]+1]||document.getElementById(listarr1[i]+listarr2[j]).className=="Queen"+turnName[standby[i][j]+1])) {
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
					if (standby[kingX][kingY]*standby[i][j]!=1&&(document.getElementById(listarr1[i]+listarr2[j]).className=="Rook"+turnName[standby[i][j]+1]||document.getElementById(listarr1[i]+listarr2[j]).className=="Queen"+turnName[standby[i][j]+1])) {
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
	document.getElementsByClassName("KingW")[0].style.backgroundColor='';
	document.getElementsByClassName("KingB")[0].style.backgroundColor='';
	for (var i = 0; i < list.length; i++) {
		list[i].style.backgroundColor='';
	}
	for (var i = 0; i < groupMove.length; i++) {
		groupMove[i].style.backgroundColor='';
	}
	tableOfMark();
	ableMove();
}



function Pawn (x,y) {
	// body...
	var PawnMove=[];
	PawnMove=table;
	if (standby[x][y]*standby[x+standby[x][y]][y]==0) {
	PawnMove[x+standby[x][y]][y]=1;
	if ((x==1&&standby[x][y]==1)||(x==6&&standby[x][y]==-1)) {
		if (standby[x][y]*standby[x+2*standby[x][y]][y]==0) {
		PawnMove[x+2*standby[x][y]][y]=1;	
	
		};
	}		
	};
	if (standby[x+standby[x][y]][y+1]*standby[x][y]==-1) {
		PawnMove[x+standby[x][y]][y+1]=1;
	};
	if (standby[x+standby[x][y]][y-1]*standby[x][y]==-1) {
		PawnMove[x+standby[x][y]][y-1]=1;
	};
	return PawnMove;
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
	var BishopMove=[];
	BishopMove=table;
	for (var i = x+1, j = y+1; i < listarr1.length&&j<listarr2.length; i++,j++) {
		if (standby[x][y]*standby[i][j]==0) {
			BishopMove[i][j]=1;
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				BishopMove[i][j]=1;
				break;
			} else{break;};
		};
	};
	for (var i = x-1, j = y+1; i >= 0&&j<listarr2.length; j++,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			BishopMove[i][j]=1;
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				BishopMove[i][j]=1;
				break;
			} else{break;};
		};
	};
	for (var j = y-1, i = x+1; i < listarr1.length&&j>=0; j--,i++) {
		if (standby[x][y]*standby[i][j]==0) {
			BishopMove[i][j]=1;
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				BishopMove[i][j]=1;
				break;
			} else{break;}; 
		};
	};
	for (var i = x-1, j = y-1; i >= 0&&j>=0; j--,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			BishopMove[i][j]=1;
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				BishopMove[i][j]=1;
				break;
			} else{break;};
		};
	};
	return BishopMove;
}
function MakePro(BW,ProID) {
	// body...
	document.getElementById('Pro').style.display='inline';
	document.getElementById('Block').style.display='inline';
	var newimg = document.createElement("img");
	newimg.id="Pro_main";
	newimg.className="Pro";
	newimg.src="../gui/international/Promotion.png";
	document.getElementById("Pro").appendChild(newimg);
	newimg = document.createElement("img");
	newimg.id="Pro_Qu";
	newimg.className="Pro";
	newimg.src="../gui/international/PromotionQ.png";
	newimg.addEventListener("mousemove",function(){ this.style.opacity=1; });
	newimg.addEventListener("mouseout",function(){ this.style.opacity=0; });
	newimg.addEventListener("click",function(){ Promote('Queen',BW,ProID) });
	document.getElementById("Pro").appendChild(newimg);
	newimg = document.createElement("img");
	newimg.id="Pro_Bi";
	newimg.className="Pro";
	newimg.src="../gui/international/PromotionB.png";
	newimg.addEventListener("mousemove",function(){ this.style.opacity=1; });
	newimg.addEventListener("mouseout",function(){ this.style.opacity=0; });
	newimg.addEventListener("click",function(){ Promote('Bishop',BW,ProID) });
	document.getElementById("Pro").appendChild(newimg);
	newimg = document.createElement("img");
	newimg.id="Pro_Ro";
	newimg.className="Pro";
	newimg.src="../gui/international/PromotionR.png";
	newimg.addEventListener("mousemove",function(){ this.style.opacity=1; });
	newimg.addEventListener("mouseout",function(){ this.style.opacity=0; });
	newimg.addEventListener("click",function(){ Promote('Rook',BW,ProID) });
	document.getElementById("Pro").appendChild(newimg);
	var newimg = document.createElement("img");
	newimg.id="Pro_Kn";
	newimg.className="Pro";
	newimg.src="../gui/international/PromotionKN.png";
	newimg.addEventListener("mousemove",function(){ this.style.opacity=1; });
	newimg.addEventListener("mouseout",function(){ this.style.opacity=0; });
	newimg.addEventListener("click",function(){ Promote('Knight',BW,ProID) });
	document.getElementById("Pro").appendChild(newimg);
}

function Promote(name,WB,mark){
	document.getElementById(mark).className=name.concat(WB);
	document.getElementById(mark).src="../gui/international/"+name+WB+".png";
	document.getElementsByClassName("Pro").remove();
	document.getElementById('Pro').style.display='none';
	document.getElementById('Block').style.display='none';
}

function Queen (x,y) {
	// body...
	var QueenMove=[];
	QueenMove=table;
	for (var i = x+1, j = y+1; i < listarr1.length&&j<listarr2.length; i++,j++) {
		if (standby[x][y]*standby[i][j]==0) {
			QueenMove[i][j]=1;
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				QueenMove[i][j]=1;
				break;
			} else{break;};
		};
	};
	for (var i = x-1, j = y+1; i >= 0&&j<listarr2.length; j++,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			QueenMove[i][j]=1;
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				QueenMove[i][j]=1;
				break;
			} else{break;};
		};
	};
	for (var j = y-1, i = x+1; i < listarr1.length&&j>=0; j--,i++) {
		if (standby[x][y]*standby[i][j]==0) {
			QueenMove[i][j]=1;
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				QueenMove[i][j]=1;
				break;
			} else{break;}; 
		};
	};
	for (var i = x-1, j = y-1; i >= 0&&j>=0; j--,i--) {
		if (standby[x][y]*standby[i][j]==0) {
			QueenMove[i][j]=1;
		} else{
			if (standby[x][y]*standby[i][j]==-1) {
				QueenMove[i][j]=1;
				break;
			} else{break;};
		};
	};
		for (var i = x+1; i < listarr1.length; i++) {
		if (standby[x][y]*standby[i][y]==0) {
			QueenMove[i][y]=1;
		} else{
			if (standby[x][y]*standby[i][y]==-1) {
				QueenMove[i][y]=1;
				break;
			} else{break;};
		};
	};
	for (var i = x-1; i >= 0; i--) {
		if (standby[x][y]*standby[i][y]==0) {
			QueenMove[i][y]=1;
		} else{
			if (standby[x][y]*standby[i][y]==-1) {
				QueenMove[i][y]=1;
				break;
			} else{break;};
		};
	};
	for (var i = y+1; i < listarr1.length; i++) {
		if (standby[x][y]*standby[x][i]==0) {
			QueenMove[x][i]=1;
		} else{
			if (standby[x][y]*standby[x][i]==-1) {
				QueenMove[x][i]=1;
				break;
			} else{break;}; 
		};
	};
	for (var i = y-1; i >= 0; i--) {
		if (standby[x][y]*standby[x][i]==0) {
			QueenMove[x][i]=1;
		} else{
			if (standby[x][y]*standby[x][i]==-1) {
				QueenMove[x][i]=1;
				break;
			} else{break;};
		};
	};
	return QueenMove;
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