/* autogenerated from "macros/Sources/CONST_f.sci" */
function CONST_f() {
    CONST_f.prototype.define = function CONST_f() {
C=1;
model=scicos_model();
model.sim=list("cstblk",1);
model.in1=[];
model.out=1;
model.rpar=C;
model.blocktype="d";
model.dep_ut=[false,false];
exprs=strcat(sci2exp(C));
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    CONST_f.prototype.details = function CONST_f() {
    }
    CONST_f.prototype.get = function CONST_f() {
    }
    CONST_f.prototype.set = function CONST_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,C,exprs]=scicos_getvalue(["Set Contant Block"],"Constant",list("vec",-1),exprs);
if (!ok) {
break;
}
nout=size(C,"*");
if (nout==0) {
message("C must have at least one element");
} else {
model.rpar=C.slice();
model.out=nout;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
}
    }
}
