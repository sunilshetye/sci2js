/* autogenerated from "macros/Linear/DERIV.sci" */
function DERIV() {
    DERIV.prototype.define = function DERIV() {
model=scicos_model();
model.sim=list("deriv",4);
model.in1=-1;
model.out=-1;
model.blocktype="x";
model.dep_ut=[true,false];
exprs=[];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
    }
    DERIV.prototype.details = function DERIV() {
    }
    DERIV.prototype.get = function DERIV() {
    }
    DERIV.prototype.set = function DERIV() {
x=arg1;
    }
}
