/* autogenerated from "macros/Linear/SAMPHOLD_m.sci" */
function SAMPHOLD_m() {
    SAMPHOLD_m.prototype.define = function SAMPHOLD_m() {
model=scicos_model();
model.sim=list("samphold4_m",4);
model.in1=-1;
model.in2=-2;
model.intyp=1;
model.outtyp=1;
model.out=-1;
model.out2=-2;
model.evtin=1;
model.blocktype="d";
model.dep_ut=[true,false];
label=[sci2exp(1)];
gr_i=[];
x=standard_define([2,2],model,label,gr_i);
    }
    SAMPHOLD_m.prototype.details = function SAMPHOLD_m() {
    }
    SAMPHOLD_m.prototype.get = function SAMPHOLD_m() {
    }
    SAMPHOLD_m.prototype.set = function SAMPHOLD_m() {
x=arg1;
x.model.firing=[];
graphics=arg1.graphics;
label=graphics.exprs;
model=arg1.model;
while (true) {
[ok,it,exprs]=scicos_getvalue("Set parameters Block",["Datatype(1=real double 2=Complex 3=int32 ...)"],list("vec",1),label);
if (!ok) {
break;
}
if (((it<1)||(it>8))) {
message("Datatype is not supported");
ok=false;
}
if (ok) {
in1=[model.in1,model.in2];
[model,graphics,ok]=set_io(model,graphics,list(in1,it),list(in1,it),1,[]);
if (ok) {
graphics.exprs=exprs;
arg1.graphics=graphics;
arg1.model=model;
x=arg1;
break;
}
}
}
    }
}
