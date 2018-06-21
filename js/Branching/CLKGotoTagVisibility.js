/* autogenerated from "macros/Branching/CLKGotoTagVisibility.sci" */
function CLKGotoTagVisibility() {
    CLKGotoTagVisibility.prototype.define = function CLKGotoTagVisibility() {
model=scicos_model();
model.sim="clkgototagvisibility";
model.in1=[];
model.in2=[];
model.out=[];
model.out2=[];
model.evtin=[];
model.intyp=1;
model.outtyp=1;
model.opar=list("A");
model.blocktype="c";
model.firing=false;
model.dep_ut=[false,false];
exprs="A";
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    CLKGotoTagVisibility.prototype.details = function CLKGotoTagVisibility() {
    }
    CLKGotoTagVisibility.prototype.get = function CLKGotoTagVisibility() {
    }
    CLKGotoTagVisibility.prototype.set = function CLKGotoTagVisibility() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,tag,exprs]=scicos_getvalue("Set parameters",["GotoTag"],list("str",-1),exprs);
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
x.graphics=graphics;
x.model=model;
break;
}
}
needcompile=resume(needcompile)
    }
}
