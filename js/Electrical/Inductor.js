/* autogenerated from "macros/Electrical/Inductor.sci" */
function Inductor() {
    Inductor.prototype.define = function Inductor() {
model=scicos_model();
model.in1=[1];
model.out=[1];
L=1.e-5;
model.rpar=L;
model.sim="Inductor";
model.blocktype="c";
model.dep_ut=[true,false];
mo=modelica();
mo.model="Inductor";
mo.inputs="p";
mo.outputs="n";
mo.parameters=list("L",list(L));
model.equations=mo;
exprs=string(L);
gr_i=[];
x=standard_define([2,0.9],model,exprs,list(gr_i,0));
x.graphics.in_implicit=["I"];
x.graphics.out_implicit=["I"];
    }
    Inductor.prototype.details = function Inductor() {
    }
    Inductor.prototype.get = function Inductor() {
    }
    Inductor.prototype.set = function Inductor() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,L,exprs]=scicos_getvalue("Set Inductor block parameter","L (H)",list("vec",1),exprs);
if (!ok) {
break;
}
model.rpar=L;
model.equations.parameters[2-1]=list(L);
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
    }
}
