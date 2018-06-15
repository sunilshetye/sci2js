/* autogenerated from "macros/Branching/ESELECT_f.sci" */
function ESELECT_f() {
ESELECT_f.prototype.get = function ESELECT_f() {
}
ESELECT_f.prototype.set = function ESELECT_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
if (size(exprs,"*")==1) {
exprs[2-1]=string(1);
}
if (size(exprs,"*")==2) {
exprs[3-1]=string(0);
}
model=arg1.model;
while (true) {
[ok,out,inh,nmod,exprs]=scicos_getvalue("Set ESELECT block parameters",["number of output event ports","Inherit (1: no, 0: yes)","zero-crossing (0: no, 1: yes)"],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
if (nmod!=0) {
nmod=1;
}
if (inh==0) {
inh=[];
} else {
inh=1;
}
out=int(out);
if (out<2) {
message("Block must have at least two output ports");
} else {
[model,graphics,ok]=check_io(model,graphics,1,[],inh,[ones(out,1)]);
if (ok) {
graphics.exprs=exprs;
model.evtout=ones(out,1);
model.firing=-ones(out,1);
x.graphics=graphics;
model.nmode=nmod;
model.nzcross=nmod;
x.model=model;
break
}
}
}
}
ESELECT_f.prototype.define = function ESELECT_f() {
out=2;
model=scicos_model();
model.sim=list("eselect",-2);
model.in1=1;
model.in2=1;
model.intyp=-1;
model.evtin=1;
model.evtout=ones(out,1);
model.blocktype="l";
model.firing=-ones(out,1);
model.dep_ut=[true,None];
model.nmode=0;
model.nzcross=0;
gr_i=[];
exprs=[string(out),string(1),string(model.nmode)];
x=standard_define([4,2],model,exprs,gr_i);
}
ESELECT_f.prototype.details = function ESELECT_f() {
}
}
