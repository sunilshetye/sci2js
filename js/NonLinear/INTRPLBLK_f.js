/* autogenerated from "macros/NonLinear/INTRPLBLK_f.sci" */
function INTRPLBLK_f() {
    INTRPLBLK_f.prototype.define = function INTRPLBLK_f() {
a=[[0],[1]];
b=[[0],[1]];
model=scicos_model();
model.sim="intrpl";
model.in1=1;
model.out=1;
model.rpar=[[a],[b]];
model.blocktype="c";
model.dep_ut=[true,false];
exprs=[[strcat(sci2exp(a))],[strcat(sci2exp(b))]];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    INTRPLBLK_f.prototype.details = function INTRPLBLK_f() {
    }
    INTRPLBLK_f.prototype.get = function INTRPLBLK_f() {
    }
    INTRPLBLK_f.prototype.set = function INTRPLBLK_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,a,b,exprs]=scicos_getvalue("Set Interpolation block parameters",[["X coord."],["Y coord."]],list("vec",-1,"vec",-1),exprs);
if (!ok) {
break;
}
if (size(a,"*")!=size(b,"*")) {
message("X and Y must have the same size");
} else if (min(a.slice(2-1,$)-a.slice(1-1,$-1))<=0) {
message("X must be strictly increasing");
} else {
if (ok) {
graphics.exprs=exprs;
model.rpar=[[a.slice()],[b.slice()]];
x.graphics=graphics;
x.model=model;
break;
}
}
}
    }
}
