/* autogenerated from "macros/Branching/EXTRACTOR.sci" */
function EXTRACTOR() {
EXTRACTOR.prototype.define = function EXTRACTOR() {
ind=1;
model=scicos_model();
model.sim=list("extractor",4);
model.in1=-1;
model.out=1;
model.blocktype="c";
model.dep_ut=[true,false];
model.ipar=ind;
exprs=[sci2exp(ind)];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
EXTRACTOR.prototype.details = function EXTRACTOR() {
}
EXTRACTOR.prototype.get = function EXTRACTOR() {
}
EXTRACTOR.prototype.set = function EXTRACTOR() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,ind,exprs]=scicos_getvalue("Set block parameters",["indices to extract"],list("vec",-1),exprs);
if (!ok) {
break
}
ind=int(ind);
ind=ind.slice();
[model,graphics,ok]=check_io(model,graphics,[-1],size(ind,1),[],[]);
if (ok) {
model.ipar=ind;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
}
