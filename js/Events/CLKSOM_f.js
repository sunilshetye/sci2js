/* autogenerated from "macros/Events/CLKSOM_f.sci" */
function CLKSOM_f() {
    CLKSOM_f.prototype.define = function CLKSOM_f() {
model=scicos_model();
model.sim="sum";
model.evtin=[[1],[1],[1]];
model.evtout=1;
model.blocktype="d";
model.firing=-1;
model.dep_ut=[false,false];
gr_i=[];
x=standard_define([1,1]/1.2,model,[],gr_i);
    }
    CLKSOM_f.prototype.details = function CLKSOM_f() {
    }
    CLKSOM_f.prototype.get = function CLKSOM_f() {
    }
    CLKSOM_f.prototype.set = function CLKSOM_f() {
x=arg1;
    }
}
