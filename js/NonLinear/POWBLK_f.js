/* autogenerated from "macros/NonLinear/POWBLK_f.sci" */
function POWBLK_f() {
POWBLK_f.prototype.define = function POWBLK_f() {
in1=1;
a=1.5;
model=scicos_model();
model.sim="powblk";
model.in1=-1;
model.out=-1;
model.rpar=a;
model.blocktype="c";
model.dep_ut=[true,false];
exprs=string(a);
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
POWBLK_f.prototype.details = function POWBLK_f() {
}
POWBLK_f.prototype.get = function POWBLK_f() {
}
POWBLK_f.prototype.set = function POWBLK_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
if (size(exprs,"*")==2) {
exprs=exprs[2-1];
}
while (true) {
[ok,a,exprs]=scicos_getvalue("Set u^a block parameters","to the power of",list("vec",1),exprs);
if (!ok) {
break
}
graphics.exprs=exprs;
if (a==int(a)) {
model.ipar=a;
model.rpar=[];
} else {
model.rpar=a;
model.ipar=[];
}
model.firing=[];
x.graphics=graphics;
x.model=model;
break
}
}
}
