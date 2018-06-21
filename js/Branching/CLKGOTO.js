/* autogenerated from "macros/Branching/CLKGOTO.sci" */
function CLKGOTO() {
    CLKGOTO.prototype.define = function CLKGOTO() {
model=scicos_model();
model.sim="clkgoto";
model.evtin=1;
model.opar=list("A");
model.ipar=int(1);
model.blocktype="d";
model.firing=-1;
model.dep_ut=[false,false];
exprs=[["A"],[sci2exp(1)]];
x=standard_define([2,1],model,exprs," ");
x.graphics.id="Goto";
    }
    CLKGOTO.prototype.details = function CLKGOTO() {
    }
    CLKGOTO.prototype.get = function CLKGOTO() {
    }
    CLKGOTO.prototype.set = function CLKGOTO() {
x=arg1;
graphics=arg1.graphics;
model=arg1.model;
exprs=graphics.exprs;
while (true) {
[ok,tag,tagvis,exprs]=scicos_getvalue("Set block parameters",[["Tag"],["Tag Visibility (1=Local 2=Scoped 3=Global)"]],list("str",-1,"vec",1),exprs);
if (!ok) {
break;
}
if (((tagvis<1)||(tagvis>3))) {
message("Tag Visibility must be between 1 and 3");
ok=false;
}
tagvis=int(tagvis);
if (ok) {
if (((model.opar!=list(tag))||(model.ipar!=tagvis))) {
needcompile=4;
y=needcompile;
}
model.opar=list(tag);
model.ipar=tagvis;
model.evtin=1;
model.firing=-1;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
}
needcompile=resume(needcompile)
    }
}
