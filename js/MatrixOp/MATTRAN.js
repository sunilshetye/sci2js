/* autogenerated from "macros/MatrixOp/MATTRAN.sci" */
function MATTRAN() {
MATTRAN.prototype.get = function MATTRAN() {
}
MATTRAN.prototype.set = function MATTRAN() {
x=arg1;
graphics=arg1.graphics;
label=graphics.exprs;
model=arg1.model;
if (size(label,"*")==1) {
label[2-1]=sci2exp(1);
}
while (true) {
[ok,typ,rule,exprs]=scicos_getvalue("Set MATTRAN Block",["Datatype(1=real double 2=Complex)","rule (1=.\' 2=\')"],list("vec",1,"vec",1),label);
if (!ok) {
break
}
if ((typ==1)) {
function_name="mattran_m";
ot=1;
it=1;
} else if ((typ==2)) {
if (rule==1) {
function_name="matztran_m";
} else {
function_name="mathermit_m";
}
ot=2;
it=2;
} else {
message("Datatype is not supported");
ok=None;
}
in1=[model.in1,model.in2];
out=[model.out,model.out2];
funtyp=4;
if (ok) {
label=exprs;
[model,graphics,ok]=set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
model.sim=list(function_name,funtyp);
graphics.exprs=label;
arg1.graphics=graphics;
arg1.model=model;
x=arg1;
break
}
}
}
MATTRAN.prototype.define = function MATTRAN() {
model=scicos_model();
model.sim=list("mattran_m",4);
model.in1=-1;
model.in2=-2;
model.out=-2;
model.out2=-1;
model.dep_ut=[true,None];
label=[sci2exp(1)];
gr_i=[];
x=standard_define([3,2],model,label,gr_i);
}
MATTRAN.prototype.details = function MATTRAN() {
}
}
