/* autogenerated from "macros/Branching/GOTO.sci" */
function GOTO() {
    GOTO.prototype.define = function GOTO() {
model=scicos_model();
model.sim="goto";
model.in1=-1;
model.in2=-2;
model.intyp=-1;
model.out=[];
model.out2=[];
model.outtyp=1;
model.ipar=int(1);
model.opar=list("A");
model.blocktype="c";
model.dep_ut=[false,false];
exprs=[["A"],[sci2exp(1)]];
gr_i=[];
x=standard_define([2,1],model,exprs,gr_i);
x.graphics.id="Goto";
    }
    GOTO.prototype.details = function GOTO() {
    }
    GOTO.prototype.get = function GOTO() {
    }
    GOTO.prototype.set = function GOTO() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,tag,tagvis,exprs]=scicos_getvalue("Set parameters",[["Tag"],["Tag Visibility(1=Local 2=scoped 3= global)"]],list("str",-1,"vec",1),exprs);
if (!ok) {
break;
}
tagvis=int(tagvis);
if (((tagvis<1)||(tagvis>3))) {
message("Tag Visibility must be between 1 and 3");
ok=false;
}
if (ok) {
if (((model.ipar!=tagvis)||(model.opar!=list(tag)))) {
needcompile=4;
y=needcompile;
}
graphics.exprs=exprs;
model.opar=list(tag);
model.ipar=tagvis;
x.model=model;
x.graphics=graphics;
arg1=x;
break;
}
}
needcompile=resume(needcompile)
    }
}
