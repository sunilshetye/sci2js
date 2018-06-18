/* autogenerated from "macros/MatrixOp/MATDIV.sci" */
function MATDIV() {
MATDIV.prototype.define = function MATDIV() {
model=scicos_model();
function_name="mat_div";
funtyp=4;
model.sim=list(function_name,funtyp);
model.in1=[-1,-2];
model.in2=[-3,-3];
model.intyp=[1,1];
model.out=-1;
model.out2=-2;
model.outtyp=1;
model.evtin=[];
model.evtout=[];
model.state=[];
model.dstate=[];
model.rpar=[];
model.ipar=[];
model.blocktype="c";
model.firing=[];
model.dep_ut=[true,false];
label=[sci2exp(1)];
gr_i=[];
x=standard_define([2,2],model,label,gr_i);
}
MATDIV.prototype.details = function MATDIV() {
}
MATDIV.prototype.get = function MATDIV() {
}
MATDIV.prototype.set = function MATDIV() {
x=arg1;
graphics=arg1.graphics;
label=graphics.exprs;
model=arg1.model;
if (size(label,"*")==14) {
label[9-1]=[];
}
while (true) {
[ok,typ,exprs]=scicos_getvalue("Set MATDIV Block",["Datatype(1=real double  2=Complex)"],list("vec",1),label);
if (!ok) {
break
}
if ((typ==1)) {
function_name="mat_div";
ot=1;
it=[1,1];
} else if ((typ==2)) {
function_name="matz_div";
ot=2;
it=[2,2];
} else {
message("Datatype is not supported");
ok=false;
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
}
