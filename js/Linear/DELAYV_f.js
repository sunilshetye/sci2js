/* autogenerated from "macros/Linear/DELAYV_f.sci" */
function DELAYV_f() {
DELAYV_f.prototype.define = function DELAYV_f() {
nin=1;
z0=zeros(11,1);
zz0=z0.slice(1-1,$-1);
T=1;
model=scicos_model();
model.sim=list("delayv",1);
model.in1=[nin,1];
model.out=nin;
model.evtin=1;
model.evtout=[1,1];
model.dstate=z0;
model.rpar=T/(size(zz0,"*"));
model.blocktype="d";
model.firing=[0,-1];
model.dep_ut=[true,false];
exprs=[string(nin),strcat(string(z0.slice(1-1,$-1)),";"),string(T)];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
DELAYV_f.prototype.details = function DELAYV_f() {
}
DELAYV_f.prototype.get = function DELAYV_f() {
}
DELAYV_f.prototype.set = function DELAYV_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
nin=model.in1(1);
z0=model.dstate;
zz0=z0.slice(1-1,$-1);
told=z0[$-1];
while (true) {
[ok,nin,zz0,T,exprs]=scicos_getvalue("Set delay parameters",["Number of inputs","Register initial condition","Max delay"],list("vec",1,"vec",-1,"vec",1),exprs);
if (!ok) {
break
}
if (size(zz0,"*")<2) {
message("Register length must be at least 2");
ok=false;
}
if (T<=0) {
message("Delay must be positive");
ok=false;
}
if (ok) {
[model,graphics,ok]=check_io(model,graphics,[nin,1],nin,1,[1,1]);
}
if (ok) {
graphics.exprs=exprs;
model.dstate=[zz0.slice(),told];
model.rpar=T/(size(zz0,"*"));
x.graphics=graphics;
x.model=model;
break
}
}
}
}
