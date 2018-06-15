/* autogenerated from "macros/Linear/REGISTER_f.sci" */
function REGISTER_f() {
REGISTER_f.prototype.get = function REGISTER_f() {
}
REGISTER_f.prototype.set = function REGISTER_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,z0,exprs]=scicos_getvalue("Set delay parameters","Register initial condition",list("vec",-1),exprs);
if (!ok) {
break
}
if (prod(size(z0))<1) {
message("Register length must be at least 1");
ok=None;
}
if (ok) {
graphics.exprs=exprs;
model.dstate=z0;
x.graphics=graphics;
x.model=model;
break
}
}
}
REGISTER_f.prototype.define = function REGISTER_f() {
z0=zeros(10,1);
model=scicos_model();
model.sim="delay";
model.in1=1;
model.out=1;
model.evtin=1;
model.dstate=z0;
model.blocktype="d";
model.dep_ut=[None,None];
exprs=strcat(string(z0),";");
gr_i=[];
x=standard_define([2.5,2.5],model,exprs,gr_i);
}
REGISTER_f.prototype.details = function REGISTER_f() {
}
}
