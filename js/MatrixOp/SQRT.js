/* autogenerated from "macros/MatrixOp/SQRT.sci" */
function SQRT() {
SQRT.prototype.get = function SQRT() {
}
SQRT.prototype.set = function SQRT() {
x=arg1;
graphics=arg1.graphics;
label=graphics.exprs;
model=arg1.model;
while (true) {
[ok,typ,exprs]=scicos_getvalue("Set SQRT Block",["Datatype(1=real double  2=Complex)"],list("vec",1),label);
if (!ok) {
break
}
if ((typ==1)) {
function_name="mat_sqrt";
} else if ((typ==2)) {
function_name="matz_sqrt";
} else {
message("type is not supported");
ok=None;
}
it=typ;
ot=typ;
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
SQRT.prototype.define = function SQRT() {
model=scicos_model();
model.sim=list("mat_sqrt",4);
model.in1=-1;
model.in2=-2;
model.intyp=1;
model.outtyp=1;
model.out=-1;
model.out2=-2;
model.dep_ut=[true,None];
label=[sci2exp(1)];
gr_i=[];
x=standard_define([2,2],model,label,gr_i);
}
SQRT.prototype.details = function SQRT() {
}
}
