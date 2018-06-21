/* autogenerated from "macros/Events/HALT_f.sci" */
function HALT_f() {
    HALT_f.prototype.define = function HALT_f() {
n=0;
model=scicos_model();
model.sim="hltblk";
model.evtin=1;
model.dstate=0;
model.ipar=0;
model.blocktype="d";
model.dep_ut=[false,false];
exprs=string(n);
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    HALT_f.prototype.details = function HALT_f() {
    }
    HALT_f.prototype.get = function HALT_f() {
    }
    HALT_f.prototype.set = function HALT_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,n,exprs]=scicos_getvalue("Set Halt block parameters",["State on halt"],list("vec",1),exprs);
if (!ok) {
break;
}
if (ok) {
graphics.exprs=exprs;
model.ipar=n;
x.graphics=graphics;
x.model=model;
break;
}
}
    }
}
