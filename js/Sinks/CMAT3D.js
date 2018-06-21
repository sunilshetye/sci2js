/* autogenerated from "macros/Sinks/CMAT3D.sci" */
function CMAT3D() {
    CMAT3D.prototype.define = function CMAT3D() {
cmin=0;
cmax=100;
colormap=jetcolormap(25);
size_c=25;
x=-1;
y=-1;
size_x=1;
size_y=1;
model=scicos_model();
model.sim=list("cmat3d",4);
model.in1=-1;
model.in2=-2;
model.intyp=1;
model.evtin=1;
model.ipar=[[cmin],[cmax],[size_c],[size_x],[size_y]];
model.rpar=[[colormap.slice()],[x],[y]];
model.blocktype="c";
model.dep_ut=[true,false];
exprs=[[strcat(string(x)," ")],[strcat(string(y)," ")],[string("jetcolormap(25)")],[string(cmin)],[string(cmax)]];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    CMAT3D.prototype.details = function CMAT3D() {
    }
    CMAT3D.prototype.get = function CMAT3D() {
    }
    CMAT3D.prototype.set = function CMAT3D() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,vec_x,vec_y,colormap,cmin,cmax,exprs]=scicos_getvalue("Set Scope parameters",[["Bounds Vector X (-1 for standard)"],["Bounds Vector Y (-1 for standard)"],["ColorMap"],["Zmin"],["Zmax"]],list("vec",-1,"vec",-1,"vec",-1,"vec",1,"vec",1),exprs);
if (!ok) {
break;
}
mess=[];
if (size(vec_x,"*")!=size(vec_y,"*")) {
mess=[[mess],["Vector X and Vector Y must have the same size"],[" "]];
ok=false;
}
if (cmax<=cmin) {
mess=[[mess],["Error with minimum and maximum value"],[" "]];
ok=false;
}
if (!ok) {
message([["Some specified values are inconsistent:"],[" "],[mess]]);
}
if (ok) {
size_x=size(vec_x,"*");
size_c=size(colormap.slice(),1);
ipar=[[cmin],[cmax],[size_c],[size_x]];
rpar=[[colormap.slice()],[vec_x.slice()],[vec_y.slice()]];
model.ipar=ipar;
model.rpar=rpar;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break;
}
}
    }
}
