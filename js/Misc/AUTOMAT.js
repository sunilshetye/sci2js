/* autogenerated from "macros/Misc/AUTOMAT.sci" */
function AUTOMAT() {
    AUTOMAT.prototype.define = function AUTOMAT() {
NMode=2;
Minitial=1;
NX=1;
X0=[0.0];
XP=[[1],[1]];
C1=[2];
C2=[1];
exprs=[[string(NMode)],[string(Minitial)],[string(NX)],[sci2exp(X0)],[sci2exp(XP)],[sci2exp(C1)],[sci2exp(C2)]];
ipar=[[NMode],[Minitial],[NX],[XP],[C1],[C2]];
rpar=[X0];
model=scicos_model();
model.sim=list("automat",10004);
model.in1=[[2*NX+1],[2*NX+1]];
model.out=[[2],[2*NX]];
model.state=ones(2*NX,1);
model.nzcross=1;
model.blocktype="c";
model.evtout=1;
model.firing=-1;
model.dep_ut=[false,true];
model.ipar=ipar;
model.rpar=rpar;
gr_i=[];
x=standard_define([4,2],model,exprs,gr_i);
    }
    AUTOMAT.prototype.details = function AUTOMAT() {
    }
    AUTOMAT.prototype.get = function AUTOMAT() {
    }
    AUTOMAT.prototype.set = function AUTOMAT() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
ipar=model.ipar;
NMode=ipar[1-1];
NX=ipar[3-1];
while (true) {
CX="C1";
MSG0="\'Jump from Mode ";
MSG2=":[..;M_final(Guard=In(";
MSG3=").i);..]\'";
MSG=MSG0+"1"+MSG2+"1"+MSG3;
VEC="\'mat\',[-1,1]";
for (i=2;i<=NMode;i+=1) {
CX=CX+","+"C"+string(i);
MSG=MSG+";"+MSG0+string(i)+MSG2+string(i)+MSG3;
VEC=VEC+","+"\'mat\',[-1,1]";
}
GTV="[ok,NMode,Minitial,NX,X0,XP,"+CX+",exprs]=scicos_getvalue(\'Set Finite state machine model\',            [\'Number (finite-state) Modes\';\'Initial Mode\';\'Number of continuous-time states\';\'Continuous-time states intial values\';\'Xproperties of continuous-time states in each Mode\';"+MSG+"],            list(\'vec\',1,\'vec\',1,\'vec\',1,\'mat\',[-1,-1],\'mat\',[-1,-1],"+VEC+"),exprs)";
execstr(GTV);
if (!ok) {
break;
}
NMode_old=size(exprs,"*")-5;
ModifEncore=false;
if ((NMode_old>NMode)) {
exprs.slice(NMode+6-1,NMode_old+5)=[];
ModifEncore=true;
}
if ((NMode_old<NMode)) {
exprs.slice(NMode_old+6-1,NMode+5)=exprs[NMode_old+4-1];
ModifEncore=true;
}
if ((NX!=size(X0,"*"))) {
messagebox("the size of intial continuous-time states should be NX="+string(NX),"modal","error");
ModifEncore=true;
}
[rXP,cXP]=size(XP);
if (cXP!=NX) {
messagebox("Xproperty matrix is not valid: it should have NX="+string(NX)+" columns","modal","error");
ModifEncore=true;
} else if (((rXP!=NMode)&&(rXP>1))) {
messagebox("Xproperty matrix is not valid: it should have NMode="+string(NMode)+" or 1 row(s)","modal","error");
ModifEncore=true;
} else if ((rXP==1)) {
for (i=1;i<=NMode-1;i+=1) {
XP=[[XP],[XP[1-1].slice()]];
}
}
if ((NMode_old==NMode)&&(!ModifEncore)) {
XP=matrix(transpose(XP),NMode*NX,1);
ipar=[[NMode],[Minitial],[NX],[XP]];
rpar=matrix(X0,NX,1);
INP=ones(NMode,1);
if (NX>0) {
OUT=[[2],[2*NX]];
} else {
OUT=[2];
}
MaxModes=1;
nzcross=0;
for (i=1;i<=NMode;i+=1) {
Ci=evstr(exprs[5+i-1]);
ipar=[[ipar],[Ci]];
INP[i-1][1-1]=2*NX+length(Ci);
if ((nzcross<length(Ci))) {
nzcross=length(Ci);
}
if ((MaxModes<max(Ci))) {
MaxModes=max(Ci);
imax=i;
}
}
if (MaxModes>NMode) {
messagebox([["Number of Modes should be "+string(MaxModes)],["A destination Mode in Mode#"+string(imax)+"\'s targets is invalid!"]],"modal","error");
ModifEncore=true;
}
if (MaxModes<NMode) {
messagebox(["There is an unused Mode or the Number of Modes should be "+string(MaxModes)],"modal","error");
ModifEncore=true;
}
}
if (!ModifEncore) {
[model,graphics,ok]=check_io(model,graphics,INP,OUT,[],[1]);
if (!ok) {
break;
}
model.nzcross=nzcross;
model.state=ones(2*NX,1);
graphics.gr_i[1-1][1-1]="txt=[\'Automaton\';\'nM="+string(NMode)+",nX="+string(NX)+"\'];";
graphics.exprs=exprs;
x.graphics=graphics;
model.ipar=ipar;
model.rpar=rpar;
x.model=model;
break;
}
}
    }
}
