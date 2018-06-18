/* autogenerated from "macros/Sources/SampleCLK.sci" */
function SampleCLK() {
SampleCLK.prototype.define = function SampleCLK() {
model=scicos_model();
model.sim="sampleclk";
model.evtout=1;
model.rpar=[1,0];
model.blocktype="d";
model.firing=-1;
model.dep_ut=[false,false];
exprs=[sci2exp(1),sci2exp(0)];
x=standard_define([2,2],model,exprs," ");
}
SampleCLK.prototype.details = function SampleCLK() {
}
SampleCLK.prototype.get = function SampleCLK() {
}
SampleCLK.prototype.set = function SampleCLK() {
x=arg1;
graphics=arg1.graphics;
model=arg1.model;
exprs=graphics.exprs;
while (true) {
[ok,frequ,offset,exprs]=scicos_getvalue("Set block parameters",["Sample time","Offset"],list("vec",1,"vec",1),exprs);
if (!ok) {
break
}
if (frequ<0) {
message("Frequency must be a positif number");
ok=false;
}
if (abs(offset)>frequ) {
message("The |Offset| must be less than the Frequency");
ok=false;
}
if (ok) {
if (or(model.rpar.slice()!=[frequ,offset])) {
needcompile=4;
y=needcompile;
}
model.rpar=[frequ,offset];
model.evtout=1;
model.firing=-1;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
needcompile=resume(needcompile)
}
}
