/* autogenerated from "macros/Branching/FROMMO.sci" */
function FROMMO() {
    FROMMO.prototype.define = function FROMMO() {
model=scicos_model();
model.sim="frommo";
model.in1=[];
model.in2=[];
model.intyp=1;
model.out=-1;
model.out2=-2;
model.outtyp=-1;
model.ipar=[];
model.opar=list("A");
model.blocktype="c";
model.dep_ut=[false,false];
mo=modelica();
mo.model="frommo";
mo.outputs="n";
exprs=["A"];
gr_i=[];
x=standard_define([2,1],model,exprs,gr_i);
x.graphics.out_implicit=["I"];
    }
    FROMMO.prototype.details = function FROMMO() {
    }
    FROMMO.prototype.get = function FROMMO() {
    }
    FROMMO.prototype.set = function FROMMO() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,tag,exprs]=scicos_getvalue("Set parameters",["Tag"],list("str",-1),exprs);
if (!ok) {
break;
}
if (ok) {
if (model.opar!=list(tag)) {
needcompile=4;
y=needcompile;
}
graphics.exprs=exprs;
model.opar=list(tag);
x.model=model;
x.graphics=graphics;
break;
}
}
needcompile=resume(needcompile)
    }
}
