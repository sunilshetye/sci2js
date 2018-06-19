/* autogenerated from "macros/Misc/scifunc_block.sci" */
function scifunc_block() {
    scifunc_block.prototype.define = function scifunc_block() {
in1=1;
out=1;
clkin=[];
clkout=[];
x0=[];
z0=[];
typ="c";
auto=[];
rpar=[];
model=scicos_model();
model.sim=list("scifunc",3);
model.in1=in1;
model.out=out;
model.evtin=clkin;
model.evtout=clkout;
model.state=x0;
model.dstate=z0;
model.rpar=rpar;
model.ipar=0;
model.opar=list();
model.blocktype=typ;
model.firing=auto;
model.dep_ut=[true,false];
exprs=list([[sci2exp(in1)],[sci2exp(out)],[sci2exp(clkin)],[sci2exp(clkout)],[strcat(sci2exp(x0))],[strcat(sci2exp(z0))],[strcat(sci2exp(rpar))],[sci2exp(auto)]],list("y1=sin(u1)"," "," ","y1=sin(u1)"," "," "," "));
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    scifunc_block.prototype.details = function scifunc_block() {
    }
    scifunc_block.prototype.get = function scifunc_block() {
    }
    scifunc_block.prototype.set = function scifunc_block() {
needcompile=0;
x=arg1;
model=arg1.model;
graphics=arg1.graphics;
exprs=graphics.exprs;
if (size(exprs[1-1],"*")==8) {
exprs[1-1][9-1]="0";
}
while (true) {
[ok,i,o,ci,co,xx,z,rpar,auto0,deptime,lab]=scicos_getvalue([["Set scifunc_block parameters"],["only regular blocks supported"]],[["input ports sizes"],["output port sizes"],["input event ports sizes"],["output events ports sizes"],["initial continuous state"],["initial discrete state"],["System parameters vector"],["initial firing vector (<0 for no firing)"],["is block always active (0:no, 1:yes)"]],list("vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec","sum(%4)","vec",1),exprs[1-1]);
if (!ok) {
break;
}
exprs[1-1]=lab;
xx=xx.slice();
z=z.slice();
rpar=rpar.slice();
nrp=prod[size(rpar)-1];
i=int(i.slice());
ni=size(i,1);
o=int(o.slice());
no=size(o,1);
ci=int(ci.slice());
nci=size(ci,1);
co=int(co.slice());
nco=size(co,1);
[ok,tt,dep_ut]=genfunc1(exprs[2-1],i,o,nci,nco,size(xx,1),size(z,1),nrp,"c");
dep_ut[2-1]=(1==deptime);
if (!ok) {
break;
}
[model,graphics,ok]=check_io(model,graphics,i,o,ci,co);
if (ok) {
auto=auto0;
model.state=xx;
model.dstate=z;
model.rpar=rpar;
if (model.ipar!=0) {
model.opar=model.ipar;
model.ipar=0;
}
if (or(model.opar!=tt)) {
needcompile=4;
}
model.opar=tt;
model.firing=auto;
model.dep_ut=dep_ut;
x.model=model;
exprs[2-1]=tt;
graphics.exprs=exprs;
x.graphics=graphics;
break;
}
}
needcompile=resume(needcompile)
    }
}
