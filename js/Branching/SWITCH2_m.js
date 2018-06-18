/* autogenerated from "macros/Branching/SWITCH2_m.sci" */
function SWITCH2_m() {
SWITCH2_m.prototype.define = function SWITCH2_m() {
ipar=[0];
nzz=1;
rpar=0;
model=scicos_model();
model.sim=list("switch2_m",4);
model.in1=[-1,1,-1];
model.in2=[-2,1,-2];
model.intyp=1;
model.out=-1;
model.out2=-2;
model.outtyp=1;
model.ipar=ipar;
model.rpar=rpar;
model.nzcross=nzz;
model.nmode=1;
model.blocktype="c";
model.dep_ut=[true,false];
exprs=[sci2exp(1),string(ipar),string(rpar),string(nzz)];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
SWITCH2_m.prototype.details = function SWITCH2_m() {
}
SWITCH2_m.prototype.get = function SWITCH2_m() {
}
SWITCH2_m.prototype.set = function SWITCH2_m() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,ot,rule,thra,nzz,exprs]=scicos_getvalue("Set parameters",["Datatype (1=real double  2=complex 3=int32 ...)","pass first input if: u2>=a (0), u2>a (1), u2~=a (2)","threshold a","use zero crossing: yes (1), no (0)"],list("vec",1,"vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
rule=int(rule);
if ((rule<0)) {
rule=0;
}
if ((rule>2)) {
rule=2;
}
graphics.exprs=exprs;
model.ipar=rule;
model.rpar=thra;
if (nzz!=0) {
model.nmode=1;
model.nzcross=1;
} else {
model.nmode=0;
model.nzcross=0;
}
if (((ot<1)||(ot>8))&&(ot!=-1)) {
message("Datatype is not supported");
ok=false;
}
if (ok) {
it[1-1]=ot;
it[2-1]=1;
it[3-1]=ot;
in1=[model.in1,model.in2];
out=[model.out,model.out2];
[model,graphics,ok]=set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
}
if (ok) {
x.graphics=graphics;
x.model=model;
break
}
}
}
}
