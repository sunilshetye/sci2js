/* autogenerated from "macros/Misc/EDGETRIGGER.sci" */
function EDGETRIGGER() {
EDGETRIGGER.prototype.define = function EDGETRIGGER() {
edge=1;
model=scicos_model();
model.sim=list("edgetrig",4);
model.in1=1;
model.out=1;
model.dstate=0;
model.nzcross=1;
model.ipar=sign(edge);
model.blocktype="c";
model.dep_ut=[true,false];
exprs=[string(edge)];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
EDGETRIGGER.prototype.details = function EDGETRIGGER() {
}
EDGETRIGGER.prototype.get = function EDGETRIGGER() {
}
EDGETRIGGER.prototype.set = function EDGETRIGGER() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,edge,exprs]=scicos_getvalue("Set edge trigger block parameters",["rising (1), falling (-1), both (0)"],list("vec",1),exprs);
if (!ok) {
break
}
model.ipar=sign(edge);
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
