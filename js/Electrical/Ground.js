/* autogenerated from "macros/Electrical/Ground.sci" */
function Ground() {
    Ground.prototype.define = function Ground() {
model=scicos_model();
model.in1=[1];
model.out=[];
model.sim="Ground";
model.blocktype="c";
model.dep_ut=[true,false];
mo=modelica();
mo.model="Ground";
mo.inputs="p";
model.equations=mo;
exprs="";
gr_i=[];
x=standard_define([1,1],model,exprs,list(gr_i,0));
x.graphics.in_implicit=["I"];
x.graphics.out_implicit=["I"];
    }
    Ground.prototype.details = function Ground() {
    }
    Ground.prototype.get = function Ground() {
    }
    Ground.prototype.set = function Ground() {
x=arg1;
    }
}
