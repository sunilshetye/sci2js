/* autogenerated from "macros/Events/MCLOCK_f.sci" */
function MCLOCK_f() {
    MCLOCK_f.prototype.define = function MCLOCK_f() {
nn=2;
dt=0.1;
exprs=[[string(dt)],[string(nn)]];
mfclck=MFCLCK_f("define");
mfclck.graphics.orig=[334,199];
mfclck.graphics.sz=[40,40];
mfclck.graphics.flip=true;
mfclck.graphics.exprs=exprs;
mfclck.graphics.pein=12;
mfclck.graphics.peout=[[4],[3]];
mfclck.model.rpar=0.1;
mfclck.model.ipar=nn;
mfclck.model.firing=[-1,0];
clksom=CLKSOM_f("define");
clksom.graphics.orig=[457,161];
clksom.graphics.sz=[16.666667,16.666667];
clksom.graphics.flip=true;
clksom.graphics.exprs=[["0.1"],["0.1"]];
clksom.graphics.pein=[[4],[9],[0]];
clksom.graphics.peout=5;
output_port1=CLKOUT_f("define");
output_port1.graphics.orig=[509,261];
output_port1.graphics.sz=[20,20];
output_port1.graphics.flip=true;
output_port1.graphics.exprs="1";
output_port1.graphics.pein=10;
output_port1.model.ipar=1;
output_port2=CLKOUT_f("define");
output_port2.graphics.orig=[509,142];
output_port2.graphics.sz=[20,20];
output_port2.graphics.flip=true;
output_port2.graphics.exprs="2";
output_port2.graphics.pein=13;
output_port2.model.ipar=2;
split1=CLKSPLIT_f("define");
split1.graphics.orig=[[411.92504],[169.33333]];
split1.graphics.pein=3;
split1.graphics.peout=[[9],[10]];
split2=CLKSPLIT_f("define");
split2.graphics.orig=[[482.45315],[169.33333]];
split2.graphics.pein=5;
split2.graphics.peout=[[12],[13]];
gr_i=[];
diagram=scicos_diagram();
diagram.objs[1-1]=mfclck;
diagram.objs[2-1]=clksom;
diagram.objs[3-1]=scicos_link(xx=[[360.7],[360.7],[411.9]],yy=[[193.3],[169.3],[169.3]],ct=[10,-1],from=[1,2],to=[8,1]);
diagram.objs[4-1]=scicos_link(xx=[[347.3],[347.3],[461.8],[461.8]],yy=[[193.3],[155.5],[155.5],[161]],ct=[10,-1],from=[1,1],to=[2,1]);
diagram.objs[5-1]=scicos_link(xx=[[468.9],[482.5]],yy=[[169.3],[169.3]],ct=[10,-1],from=[2,1],to=[11,1]);
diagram.objs[6-1]=output_port1;
diagram.objs[7-1]=output_port2;
diagram.objs[8-1]=split1;
diagram.objs[9-1]=scicos_link(xx=[[411.9],[457]],yy=[[169.3],[169.3]],ct=[10,-1],from=[8,1],to=[2,2]);
diagram.objs[10-1]=scicos_link(xx=[[411.9],[411.9],[509]],yy=[[169.3],[271],[271]],ct=[10,-1],from=[8,2],to=[6,1]);
diagram.objs[11-1]=split2;
diagram.objs[12-1]=scicos_link(xx=[[482.5],[489.6],[489.6],[354],[354]],yy=[[169.3],[169.3],[338.3],[338.3],[244.7]],ct=[10,-1],from=[11,1],to=[1,1]);
diagram.objs[13-1]=scicos_link(xx=[[482.4],[482.4],[509]],yy=[[169.3],[152],[152]],ct=[10,-1],from=[11,2],to=[7,1]);
x=scicos_block();
x.gui="MCLOCK_f";
x.graphics.sz=[3,2];
x.graphics.gr_i=gr_i;
x.model.sim="csuper";
x.model.evtout=[[1],[1]];
x.model.blocktype="h";
x.model.rpar=diagram;
x.graphics.peout=[[0],[0]];
    }
    MCLOCK_f.prototype.details = function MCLOCK_f() {
    }
    MCLOCK_f.prototype.get = function MCLOCK_f() {
    }
    MCLOCK_f.prototype.set = function MCLOCK_f() {
for (i=1;i<=length(arg1.model.rpar.objs);i+=1) {
o=arg1.model.rpar.objs[i-1];
if (typeof(o)=="Block"&&o.gui=="MFCLCK_f") {
path=i;
break;
}
}
newpar=list();
spath=list("model","rpar","objs",path);
xx=arg1[spath-1];
execstr("xxn="+xx.gui+"(\'set\',xx)");
if (or(xxn!=xx)) {
arg1[spath-1]=xxn;
newpar[size(newpar)+1-1]=path;
}
x=arg1;
y=0;
typ=newpar;
    }
}
