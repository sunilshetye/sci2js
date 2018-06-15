/* autogenerated from "macros/Branching/NRMSOM_f.sci" */
function NRMSOM_f() {
NRMSOM_f.prototype.get = function NRMSOM_f() {
}
NRMSOM_f.prototype.set = function NRMSOM_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,nin,exprs]=scicos_getvalue("Set parameters",["number of inputs"],list("vec",1),exprs);
if (!ok) {
break
}
[model,graphics,ok]=check_io(model,graphics,-ones(nin,1),-1,[],[]);
if (ok) {
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
NRMSOM_f.prototype.define = function NRMSOM_f() {
in1=[-1,-1];
nin=2;
model=scicos_model();
model.sim="junk";
model.in1=in1;
model.out=-1;
model.blocktype="c";
model.dep_ut=[true,None];
exprs=[string(nin)];
gr_i=[];
x=standard_define([.2,2],model,exprs,gr_i);
}
NRMSOM_f.prototype.details = function NRMSOM_f() {
}
}
