/* autogenerated from "macros/NonLinear/PRODUCT.sci" */
function PRODUCT() {
    PRODUCT.prototype.define = function PRODUCT() {
sgn=[[1],[-1]];
model=scicos_model();
model.sim=list("product",4);
model.in1=[[-1],[-1]];
model.out=-1;
model.ipar=sgn;
model.blocktype="c";
model.dep_ut=[true,false];
exprs=sci2exp(sgn);
gr_i=[];
x=standard_define([2,3],model,exprs,gr_i);
    }
    PRODUCT.prototype.details = function PRODUCT() {
    }
    PRODUCT.prototype.get = function PRODUCT() {
    }
    PRODUCT.prototype.set = function PRODUCT() {
x=arg1;
graphics=arg1.graphics;
model=arg1.model;
exprs=graphics.exprs;
while (true) {
[ok,sgn,exprs]=scicos_getvalue([["         Set multiplication block parameters"],["(multiplication is set with + 1, division with -1)"],[""]],"Number of inputs or sign vector",list("vec",-1),exprs);
if (!ok) {
break;
}
sgn=sgn.slice();
if (size(sgn,1)==1) {
if (sgn<1) {
message("Number of inputs must be > 0");
ok=false;
} else if (sgn==1) {
in1=-1;
sgn=[];
nout=1;
} else {
in1=-ones(sgn,1);
sgn=ones(sgn,1);
nout=-1;
}
} else {
if (!and(abs(sgn)==1)) {
message("Signs can only be +1 or -1");
ok=false;
} else {
in1=-ones(size(sgn,1),1);
nout=-1;
}
}
if (ok) {
[model,graphics,ok]=check_io(model,graphics,in1,nout,[],[]);
}
if (ok) {
model.ipar=sgn;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
}
    }
}
