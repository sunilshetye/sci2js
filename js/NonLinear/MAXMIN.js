/* autogenerated from "macros/NonLinear/MAXMIN.sci" */
function MAXMIN() {
    MAXMIN.prototype.define = function MAXMIN() {
model=scicos_model();
model.sim=list("minmax",4);
model.out=1;
model.in1=-1;
model.blocktype="c";
model.dep_ut=[true,false];
model.ipar=0;
exprs=[string(transpose([2,1,1]))];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
x.graphics.style="MAXMIN;displayedLabel=MAX";
    }
    MAXMIN.prototype.details = function MAXMIN() {
    }
    MAXMIN.prototype.get = function MAXMIN() {
    }
    MAXMIN.prototype.set = function MAXMIN() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,mm,nin,zcr,exprs]=scicos_getvalue("Set Max/Min block parameters",[["Min (1) or Max (2) "],["Number of input vectors (1 or 2)"],["zero-crossing (1: yes, 0;no)"]],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break;
}
if (zcr!=0) {
zcr=-1;
}
if (mm!=1) {
mm=2;
}
if (nin!=1&&nin!=2) {
message("Wrong number of inputs, only 1 and 2 allowed");
ok=false;
}
if (ok) {
if (nin==1) {
[model,graphics,ok]=check_io(model,graphics,-1,1,[],[]);
} else {
[model,graphics,ok]=check_io(model,graphics,[-1,-1],-1,[],[]);
}
}
if (ok) {
model.nzcross=zcr;
if (nin==1) {
model.nmode=abs(zcr);
} else {
model.nmode=zcr;
}
model.ipar=mm;
if (mm==1) {
label="MIN";
} else {
label="MAX";
}
graphics.style="MAXMIN;displayedLabel="+label;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
}
    }
}
