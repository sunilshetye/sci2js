/* autogenerated from "macros/Linear/DLSS_f.sci" */
function DLSS_f() {
DLSS_f.prototype.get = function DLSS_f() {
}
DLSS_f.prototype.set = function DLSS_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
if (size(exprs,"*")==7) {
exprs=exprs([1:4,7]);
}
model=arg1.model;
while (true) {
[ok,A,B,C,D,x0,exprs]=scicos_getvalue("Set discrete linear system parameters",["A matrix","B matrix","C matrix","D matrix","Initial state"],list("mat",[-1,-1],"mat",["size(%1,2)","-1"],"mat",["-1","size(%1,2)"],"mat",[-1,-1],"vec","size(%1,2)"),exprs);
if (!ok) {
break
}
out=size(C,1);
if (out==0) {
out=[];
}
in1=size(B,2);
if (in1==0) {
in1=[];
}
[ms,ns]=size(A);
if (ms!=ns) {
message("A matrix must be square");
} else {
[model,graphics,ok]=check_io(model,graphics,in1,out,1,[]);
if (ok) {
graphics.exprs=exprs;
rpar=[A.slice(),B.slice(),C.slice(),D.slice()];
if (D!=[]) {
if (norm(D,1)!=0) {
mmm=[true,None];
} else {
mmm=[None,None];
}
if (or(model.dep_ut!=mmm)) {
model.dep_ut=mmm;
}
} else {
model.dep_ut=[None,None];
}
model.dstate=x0.slice();
model.rpar=rpar;
x.graphics=graphics;
x.model=model;
break
}
}
}
}
DLSS_f.prototype.define = function DLSS_f() {
x0=0;
A=-1;
B=1;
C=1;
D=0;
model=scicos_model();
model.sim=list("dsslti",1);
model.in1=1;
model.out=1;
model.evtin=1;
model.dstate=x0.slice();
model.rpar=[A.slice(),B.slice(),C.slice(),D.slice()];
model.blocktype="d";
model.dep_ut=[None,None];
exprs=[strcat(sci2exp(A)),strcat(sci2exp(B)),strcat(sci2exp(C)),strcat(sci2exp(D)),strcat(sci2exp(x0))];
gr_i=[];
x=standard_define([4,2],model,exprs,gr_i);
}
DLSS_f.prototype.details = function DLSS_f() {
}
}
