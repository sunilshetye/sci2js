/* autogenerated from "macros/NonLinear/INVBLK.sci" */
function INVBLK() {
INVBLK.prototype.define = function INVBLK() {
in1=-1;
model=scicos_model();
model.sim=list("invblk4",4);
model.in1=in1;
model.out=in1;
model.blocktype="c";
model.dep_ut=[true,false];
exprs=" ";
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
INVBLK.prototype.details = function INVBLK() {
}
INVBLK.prototype.get = function INVBLK() {
}
INVBLK.prototype.set = function INVBLK() {
x=arg1;
}
}
