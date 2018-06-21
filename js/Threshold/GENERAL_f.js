/* autogenerated from "macros/Threshold/GENERAL_f.sci" */
function GENERAL_f() {
    GENERAL_f.prototype.define = function GENERAL_f() {
rpar=[[0],[0],[0],[0]];
in1=1;
out=1;
model=scicos_model();
model.sim=list("zcross",1);
model.nzcross=in1;
model.in1=in1;
model.evtout=ones(out,1);
model.rpar=[[0],[0],[0],[0]];
model.blocktype="z";
model.firing=-ones(out,1);
model.dep_ut=[true,false];
exprs=[[strcat(sci2exp(in1))],[strcat(sci2exp(out))]];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
    }
    GENERAL_f.prototype.details = function GENERAL_f() {
    }
    GENERAL_f.prototype.get = function GENERAL_f() {
    }
    GENERAL_f.prototype.set = function GENERAL_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
rpar=model.rpar;
in1=model.in1;
out=model.evtout;
nin=sum(in1);
nout=sum(out);
[ok,in1,out,exprs]=scicos_getvalue("Set General Zero-Crossing parameters",[["Input size"],["Number of event output"]],list("vec",1,"vec",1),exprs);
if (ok) {
[model,graphics,ok]=check_io(model,graphics,in1,[],[],ones(out,1));
if (ok) {
nout1=out;
nin1=in1;
if (nout==nout1&&nin==nin1) {
rp=matrix(rpar,nout,2^(2*nin));
} else {
rp=-1*ones(nout1,2^(2*nin1));
}
n=size(rp,2)/2;
result=x_mdialog("routing matrix",string.slice(1-1,nout1),string.slice(1-1,2^(2*nin1)),string[rp.slice().slice()-1]);
if (result!=[]) {
rp.slice(1-1,nout1).slice(1-1,2*n)=evstr(result);
model.nzcross=in1;
model.rpar=rp.slice();
model.firing=-ones(out,1);
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
}
}
}
    }
}
