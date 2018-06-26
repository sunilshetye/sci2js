/* autogenerated from "macros/NonLinear/COSBLK_f.sci" */
function COSBLK_f() {
    COSBLK_f.prototype.define = function COSBLK_f() {
        in1 = 1;
        model = scicos_model();
        model.sim = "cosblk";
        model.in1 = -1;
        model.out = -1;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        gr_i = [];
        this.x = standard_define([2,2],model,[],gr_i);
        return new BasicBlock(this.x);
    }
    COSBLK_f.prototype.details = function COSBLK_f() {
        return this.x;
    }
    COSBLK_f.prototype.get = function COSBLK_f() {
    }
    COSBLK_f.prototype.set = function COSBLK_f() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
