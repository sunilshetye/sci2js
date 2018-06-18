/* autogenerated from "macros/NonLinear/INTRP2BLK_f.sci" */
function INTRP2BLK_f() {
INTRP2BLK_f.prototype.define = function INTRP2BLK_f() {
a=[0,1];
b=[0,1];
c=[0,1,1,2];
model=scicos_model();
model.sim=list("intrp2",1);
model.in1=[1,1];
model.out=1;
model.rpar=[a,b,c.slice()];
model.ipar=[2,2];
model.blocktype="c";
model.dep_ut=[true,false];
exprs=[strcat(sci2exp(a)),strcat(sci2exp(b)),strcat(sci2exp(c,0))];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
INTRP2BLK_f.prototype.details = function INTRP2BLK_f() {
}
INTRP2BLK_f.prototype.get = function INTRP2BLK_f() {
}
INTRP2BLK_f.prototype.set = function INTRP2BLK_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,a,b,c,exprs]=scicos_getvalue("Set Interpolation block parameters",["X coord.","Y coord.","Z values"],list("vec",-1,"vec",-1,"mat",[-1,-1]),exprs);
if (!ok) {
break
}
if (size(a,"*")!=size(c,"c")||size(b,"*")!=size(c,"r")) {
message("incompatible dimension");
} else if (min(a.slice(2-1,$)-a.slice(1-1,$-1))<=0||min(b.slice(2-1,$)-b.slice(1-1,$-1))<=0) {
message("X and Y must be strictly increasing");
} else {
if (ok) {
graphics.exprs=exprs;
model.rpar=[a.slice(),b.slice(),c.slice()];
model.ipar=[size(a,"*"),size(b,"*")];
x.graphics=graphics;
x.model=model;
break
}
}
}
}
}
