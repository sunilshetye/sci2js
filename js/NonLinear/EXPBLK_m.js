/* autogenerated from "macros/NonLinear/EXPBLK_m.sci" */
function EXPBLK_m() {
EXPBLK_m.prototype.define = function EXPBLK_m() {
in1=1;
a=math.E;
model=scicos_model();
model.sim=list("expblk_m",4);
model.in1=-1;
model.in2=-2;
model.out=-1;
model.out2=-2;
model.intyp=1;
model.outtyp=1;
model.rpar=a;
model.blocktype="c";
model.dep_ut=[true,false];
exprs=["%e"];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
EXPBLK_m.prototype.details = function EXPBLK_m() {
}
EXPBLK_m.prototype.get = function EXPBLK_m() {
}
EXPBLK_m.prototype.set = function EXPBLK_m() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
if (size(exprs,"*")==2) {
exprs=exprs[2-1];
}
while (true) {
[ok,a,exprs]=scicos_getvalue("Set a^u  block parameters","a (>0)",list("vec",1),exprs);
if (!ok) {
break
}
if (or(a<=0)) {
message("a^u : a must be positive");
} else {
graphics.exprs=exprs;
model.rpar=a;
x.graphics=graphics;
x.model=model;
break
}
}
}
}
