/* autogenerated from "macros/Linear/SUM_f.sci" */
function SUM_f() {
    SUM_f.prototype.define = function SUM_f() {
model=scicos_model();
model.sim=list("plusblk",2);
model.in1=[[-1],[-1],[-1]];
model.out=-1;
model.blocktype="c";
model.dep_ut=[true,false];
gr_i=[];
exprs=[];
x=standard_define([1,1],model,exprs,gr_i);
    }
    SUM_f.prototype.details = function SUM_f() {
    }
    SUM_f.prototype.get = function SUM_f() {
    }
    SUM_f.prototype.set = function SUM_f() {
x=arg1;
    }
}
