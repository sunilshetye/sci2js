/* autogenerated from "macros/Linear/SAMPLEHOLD_f.sci" */
function SAMPLEHOLD_f() {
    SAMPLEHOLD_f.prototype.define = function SAMPLEHOLD_f() {
        in1 = -1;
        model = scicos_model();
        model.sim = "samphold";
        model.in1 = -1;
        model.out = -1;
        model.evtin = 1;
        model.blocktype = "d";
        model.dep_ut = [true,false];
        gr_i = [];
        this.x = standard_define([2,2],model," ",gr_i);
        return new BasicBlock(this.x);
    }
    SAMPLEHOLD_f.prototype.details = function SAMPLEHOLD_f() {
        return this.x;
    }
    SAMPLEHOLD_f.prototype.get = function SAMPLEHOLD_f() {
    }
    SAMPLEHOLD_f.prototype.set = function SAMPLEHOLD_f() {
        this.x = arg1;
        this.x.model.firing = [];
        return new BasicBlock(this.x);
    }
}
