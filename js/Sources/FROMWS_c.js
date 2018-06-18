/* autogenerated from "macros/Sources/FROMWS_c.sci" */
function FROMWS_c() {
FROMWS_c.prototype.define = function FROMWS_c() {
varnam="V";
Method=1;
ZC=1;
OutEnd=0;
model=scicos_model();
model.sim=list("fromws_c",4);
model.out=-1;
model.out2=-2;
model.outtyp=-1;
model.ipar=[length(varnam),_str2code(varnam),Method,ZC,OutEnd];
model.evtin=[1];
model.evtout=[1];
model.firing=[0];
model.blocktype="d";
model.dep_ut=[false,true];
gr_i=[];
exprs=[string(varnam),string(Method),string(ZC),string(OutEnd)];
x=standard_define([3.5,2],model,exprs,gr_i);
}
FROMWS_c.prototype.details = function FROMWS_c() {
}
FROMWS_c.prototype.get = function FROMWS_c() {
}
FROMWS_c.prototype.set = function FROMWS_c() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,varnam,Method,ZC,OutEnd,exprs]=scicos_getvalue("Set From_Workspace block parameters",["Variable name","Interpolation Method","Enable zero crossing(0:No, 1:Yes)?","Output at end(0:Zero, 1:Hold, 2:Repeat)"],list("str",1,"vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
if (!(Method==0||Method==1||Method==2||Method==3)) {
message("Interpolation method should be chosen in [0,1,2,3]");
ok=false;
}
if (!(ZC==0||ZC==1)) {
message("Zero crossing should be either 0 or 1");
ok=false;
}
if (!(OutEnd==0||OutEnd==1||OutEnd==2)) {
message("Output at end option should be either 0 or 1");
ok=false;
}
r=false;
ierr=execstr("r=validvar(varnam)","errcatch");
if (!r) {
message(["Invalid variable name.","Please choose another variable name."]);
ok=false;
}
if (ok) {
model.ipar=[length(varnam),_str2code(varnam),Method,ZC,OutEnd];
[model,graphics,ok]=set_io(model,graphics,list(),list([-1,-2],-1),1,1);
if (ok) {
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
}
}
