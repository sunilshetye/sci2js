/* autogenerated from "macros/Branching/SWITCH2.sci" */
function SWITCH2() {
    SWITCH2.prototype.define = function SWITCH2() {
in1=[[-1],[1],[-1]];
ipar=[0];
nzz=1;
rpar=0;
model=scicos_model();
model.sim=list("switch2",4);
model.in1=in1;
model.out=-1;
model.ipar=ipar;
model.rpar=rpar;
model.nzcross=nzz;
model.nmode=1;
model.blocktype="c";
model.dep_ut=[true,false];
exprs=[[string(ipar)],[string(rpar)],[string(nzz)]];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    SWITCH2.prototype.details = function SWITCH2() {
    }
    SWITCH2.prototype.get = function SWITCH2() {
    }
    SWITCH2.prototype.set = function SWITCH2() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,rule,thra,nzz,exprs]=scicos_getvalue("Set parameters",[["pass first input if: u2>=a (0), u2>a (1), u2~=a (2)"],["threshold a"],["use zero crossing: yes (1), no (0)"]],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break;
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
x.graphics=graphics;
x.model=model;
break;
}
    }
}
