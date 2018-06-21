/* autogenerated from "macros/Branching/SCALAR2VECTOR.sci" */
function SCALAR2VECTOR() {
    SCALAR2VECTOR.prototype.define = function SCALAR2VECTOR() {
nout=-1;
model=scicos_model();
model.sim=list("scalar2vector",4);
model.out=nout;
model.in1=1;
model.blocktype="c";
model.dep_ut=[true,false];
exprs=[string([nout])];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
    }
    SCALAR2VECTOR.prototype.details = function SCALAR2VECTOR() {
    }
    SCALAR2VECTOR.prototype.get = function SCALAR2VECTOR() {
    }
    SCALAR2VECTOR.prototype.set = function SCALAR2VECTOR() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,nout,exprs]=scicos_getvalue("Set block parameters",["size of output (-1: if don\'t know)"],list("vec",1),exprs);
if (!ok) {
break;
}
nout=int(nout);
if ((nout!=-1&&(nout<=0))) {
message("size of output must be -1 or >0");
ok=false;
}
if (ok) {
[model,graphics,ok]=check_io(model,graphics,[1],nout,[],[]);
}
if (ok) {
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
}
    }
}
