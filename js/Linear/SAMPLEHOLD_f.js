/* autogenerated from "macros/Linear/SAMPLEHOLD_f.sci" */
function SAMPLEHOLD_f() {
SAMPLEHOLD_f.prototype.get = function SAMPLEHOLD_f() {
}
SAMPLEHOLD_f.prototype.set = function SAMPLEHOLD_f() {
x=arg1;
x.model.firing=[];
}
SAMPLEHOLD_f.prototype.define = function SAMPLEHOLD_f() {
in1=-1;
model=scicos_model();
model.sim="samphold";
model.in1=-1;
model.out=-1;
model.evtin=1;
model.blocktype="d";
model.dep_ut=[true,None];
gr_i=[];
x=standard_define([2,2],model," ",gr_i);
}
SAMPLEHOLD_f.prototype.details = function SAMPLEHOLD_f() {
}
}
