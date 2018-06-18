/* autogenerated from "macros/Sources/Modulo_Count.sci" */
function Modulo_Count() {
Modulo_Count.prototype.define = function Modulo_Count() {
ini_c=0;
base=3;
model=scicos_model();
model.sim=list("modulo_count",4);
model.evtin=1;
model.out=1;
model.dstate=ini_c;
model.ipar=base;
model.blocktype="c";
model.dep_ut=[false,false];
exprs=[string(ini_c),string(base)];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
Modulo_Count.prototype.details = function Modulo_Count() {
}
Modulo_Count.prototype.get = function Modulo_Count() {
}
Modulo_Count.prototype.set = function Modulo_Count() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,ini_c,base,exprs]=scicos_getvalue([msprintf(gettext("Set %s block parameters"),"Modulo_Count")," ",gettext("Modulo counter (0 to N counter)")," "],[gettext("Initial State (zero or positive number)"),gettext("Upper Limit (positive number)")],list("vec",1,"vec",1),exprs);
ini_c=int(ini_c);
base=int(base);
if (!ok) {
break
}
if (ini_c<0) {
block_parameter_error(msprintf(gettext("Wrong value for \'Initial State\' parameter: %d."),ini_c),gettext("Null or positive integer expected."));
} else if (base<=0) {
block_parameter_error(msprintf(gettext("Wrong values for \'Upper Limit\' parameter: %d."),base),gettext("Strictly positive integer expected."));
} else {
graphics.exprs=exprs;
model.ipar=base;
model.dstate=ini_c;
x.graphics=graphics;
x.model=model;
break
}
}
}
}
