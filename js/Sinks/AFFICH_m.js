/* autogenerated from "macros/Sinks/AFFICH_m.sci" */
function AFFICH_m() {
AFFICH_m.prototype.define = function AFFICH_m() {
font=1;
fontsize=1;
colr=1;
nt=5;
nd=1;
in1=[1,1];
model=scicos_model();
model.sim=list("affich2",4);
model.in1=in1(1,1);
model.in2=in1(1,2);
model.evtin=1;
model.dstate=[-1,0,0,1,1,0,zeros(in1(1,1)*in1(1,2),1)];
model.ipar=[font,fontsize,colr,1000,nt,nd,in1(1,1)];
model.blocktype="c";
model.firing=[];
model.dep_ut=[true,false];
model.label="";
exprs=[sci2exp([model.in1,model.in2]),string(font),string(fontsize),string(colr),string(nt),string(nd),string(0)];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
AFFICH_m.prototype.details = function AFFICH_m() {
}
AFFICH_m.prototype.get = function AFFICH_m() {
}
AFFICH_m.prototype.set = function AFFICH_m() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,in1,font,fontsize,colr,nt,nd,herit,exprs]=scicos_getvalue("Set  parameters",["Input Size","Font number","Font size","Color","Total number of digits","Number of rational part digits","Block inherits (1) or not (0)"],list("mat",[1,2],"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
mess=[];
if (font<=0) {
mess=[mess,"Font number must be positive"," "];
ok=false;
}
if (fontsize<=0) {
mess=[mess,"Font size must be positive"," "];
ok=false;
}
if (nt<=3) {
mess=[mess,"Total number of digits must be greater than 3"," "];
ok=false;
}
if (nd<0) {
mess=[mess,"Number of rational part digits must be ","greater or equal 0"," "];
ok=false;
}
if (!ok) {
message(["Some specified values are inconsistent:"," ",mess]);
}
if (!or(herit==[0,1])) {
mess=[mess,"Accept inherited values are 0 and 1"," "];
ok=false;
}
if (!ok) {
message(["Some specified values are inconsistent:"," ",mess]);
}
if (ok) {
[model,graphics,ok]=set_io(model,graphics,list(in1,1),list(),ones(1-herit,1),[]);
}
if (ok) {
model.ipar=[font,fontsize,colr,nt,nd,in1(1,1)];
model.dstate=[-1,0,0,1,1,0,zeros(in1(1,1)*in1(1,2),1)];
model.evtin=ones(1-herit,1);
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
}
