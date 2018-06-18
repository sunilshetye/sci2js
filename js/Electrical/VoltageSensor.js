/* autogenerated from "macros/Electrical/VoltageSensor.sci" */
function VoltageSensor() {
VoltageSensor.prototype.define = function VoltageSensor() {
model=scicos_model();
model.in1=1;
model.out=[1,1];
model.sim="VoltageSensor";
model.blocktype="c";
model.dep_ut=[true,false];
mo=modelica();
mo.model="VoltageSensor";
mo.inputs="p";
mo.outputs=["n","v"];
model.equations=mo;
exprs=[];
gr_i=[];
x=standard_define([2,2],model,exprs,list(gr_i,0));
x.graphics.in_implicit=["I"];
x.graphics.out_implicit=["I","E"];
}
VoltageSensor.prototype.details = function VoltageSensor() {
}
VoltageSensor.prototype.get = function VoltageSensor() {
}
VoltageSensor.prototype.set = function VoltageSensor() {
x=arg1;
}
}
