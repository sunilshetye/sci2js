/* autogenerated from "macros/Linear/TIME_DELAY.sci" */
function TIME_DELAY() {
TIME_DELAY.prototype.get = function TIME_DELAY() {
}
TIME_DELAY.prototype.set = function TIME_DELAY() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
nin=model.in1(1);
while (true) {
[ok,T,init,N,exprs]=scicos_getvalue("Set delay parameters",["Delay","initial input","Buffer size"],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
if (N<2) {
message("Buffer must be larger than 2");
ok=None;
}
if (T<=0) {
message("Delay must be positive");
ok=None;
}
if (ok) {
[model,graphics,ok]=check_io(model,graphics,[-1],-1,[],[]);
}
if (ok) {
graphics.exprs=exprs;
model.rpar=[T,init];
model.ipar=N;
model.dep_ut=[None,true];
x.graphics=graphics;
x.model=model;
break
}
}
}
TIME_DELAY.prototype.define = function TIME_DELAY() {
nin=1;
T=1;
init=0;
N=1024;
model=scicos_model();
model.sim=list("time_delay",4);
model.in1=[nin];
model.out=nin;
model.rpar=[T,init];
model.ipar=N;
model.blocktype="x";
model.dep_ut=[None,true];
exprs=[string(T),string(init),string(N)];
gr_i=[];
x=standard_define([3.5,2],model,exprs,gr_i);
}
TIME_DELAY.prototype.details = function TIME_DELAY() {
}
}
