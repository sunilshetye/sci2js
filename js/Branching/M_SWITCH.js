/* autogenerated from "macros/Branching/M_SWITCH.sci" */
function M_SWITCH() {
M_SWITCH.prototype.get = function M_SWITCH() {
}
M_SWITCH.prototype.set = function M_SWITCH() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,nin,base,rule,exprs]=scicos_getvalue("Set parameters",["number of inputs","zero base indexing (0), otherwise 1","rounding rule: int (0), round (1), ceil (2), floor (3)"],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
nin=int(nin);
base=int(base);
if (nin<1) {
message("Number of inputs must be >=1 ");
} else if (!((base==1)||(base==0))) {
message("base indexing must be 1 or 0");
} else if (!((rule==1)||(rule==0)||(rule==2)||(rule==3))) {
message("incorrect rounding rule");
} else {
if (nin==1) {
in1=[1,1,-1,1];
out=[1,1];
} else {
in1=[1,-ones(nin,1)];
in2=[1,-2*ones(nin,1)];
in1=[in1,in2];
out=[-1,-2];
}
it=[-1,-2*ones(nin,1)];
ot=-2;
[model,graphics,ok]=set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
if (ok) {
graphics.exprs=exprs;
model.ipar=[base,rule];
x.graphics=graphics;
x.model=model;
break
}
}
}
}
M_SWITCH.prototype.define = function M_SWITCH() {
in1=[1,-1,-1];
ipar=[1,3];
nin=2;
model=scicos_model();
model.sim=list("mswitch",4);
model.in1=in1;
model.out=-1;
model.ipar=ipar;
model.blocktype="c";
model.dep_ut=[true,None];
exprs=[string(nin),string(ipar)];
gr_i=[];
x=standard_define([2.5,2],model,exprs,gr_i);
}
M_SWITCH.prototype.details = function M_SWITCH() {
}
}
