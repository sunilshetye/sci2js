/* autogenerated from "macros/Misc/BPLATFORM.sci" */
function BPLATFORM() {
    BPLATFORM.prototype.define = function BPLATFORM() {
plen=2;
csiz=2;
phi=0;
xmin=-5;
xmax=5;
ymin=0;
ymax=15;
model=scicos_model();
model.sim=list("bplatform2",5);
model.in1=[[1],[1]];
model.evtin=1;
model.dstate=0;
model.rpar=[[plen],[csiz],[phi],[xmin],[xmax],[ymin],[ymax]];
model.blocktype="d";
model.dep_ut=[false,false];
exprs=string(model.rpar);
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    BPLATFORM.prototype.details = function BPLATFORM() {
    }
    BPLATFORM.prototype.get = function BPLATFORM() {
    }
    BPLATFORM.prototype.set = function BPLATFORM() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
dstate=model.dstate;
while (true) {
[ok,plen,csiz,phi,xmin,xmax,ymin,ymax,exprs]=scicos_getvalue("Set Scope parameters",[["pendulum length"],["cart size (square side)"],["slope"],["Xmin"],["Xmax"],["Ymin"],["Ymax"]],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break;
}
mess=[];
if (plen<=0||csiz<=0) {
mess=[[mess],["Pendulum length and cart size must be positive."],[" "]];
ok=false;
}
if (ymin>=ymax) {
mess=[[mess],["Ymax must be greater than Ymin"],[" "]];
ok=false;
}
if (xmin>=xmax) {
mess=[[mess],["Xmax must be greater than Xmin"],[" "]];
ok=false;
}
if (!ok) {
message(mess);
} else {
rpar=[[plen],[csiz],[phi],[xmin],[xmax],[ymin],[ymax]];
model.rpar=rpar;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
}
    }
}
