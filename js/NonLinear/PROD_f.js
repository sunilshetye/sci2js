/* autogenerated from "macros/NonLinear/PROD_f.sci" */
function PROD_f() {
PROD_f.prototype.get = function PROD_f() {
}
PROD_f.prototype.set = function PROD_f() {
x=arg1;
}
PROD_f.prototype.define = function PROD_f() {
model=scicos_model();
model.sim=list("prod",2);
model.in1=[-1,-1];
model.out=-1;
model.blocktype="c";
model.dep_ut=[true,None];
x=standard_define([1,1],model,[],[]);
}
PROD_f.prototype.details = function PROD_f() {
}
}
