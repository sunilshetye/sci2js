/* autogenerated from "macros/Sinks/OUT_f.sci" */
function OUT_f() {
OUT_f.prototype.get = function OUT_f() {
}
OUT_f.prototype.set = function OUT_f() {
x=arg1;
graphics=arg1.graphics;
model=arg1.model;
exprs=graphics.exprs;
if (size(exprs,"*")==2) {
exprs=exprs(1);
}
while (true) {
[ok,prt,exprs]=scicos_getvalue([msprintf(gettext("Set %s block parameters"),"OUT_f")," ",gettext("Regular output port")],gettext("Port number"),list("vec",1),exprs);
if (!ok) {
break
}
prt=int(prt);
if (prt<=0) {
block_parameter_error(msprintf(gettext("Wrong value for \'Port Number\' parameter: %d."),prt),gettext("Strictly positive integer expected."));
} else {
model.ipar=prt;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
OUT_f.prototype.define = function OUT_f() {
n=-1;
prt=1;
model=scicos_model();
model.sim="output";
model.in1=-1;
model.in2=-2;
model.intyp=-1;
model.ipar=prt;
model.blocktype="c";
model.dep_ut=[None,None];
exprs=string(prt);
gr_i=[];
x=standard_define([1,1],model,exprs,gr_i);
}
OUT_f.prototype.details = function OUT_f() {
}
}
