/* autogenerated from "macros/NonLinear/FSV_f.sci" */
function FSV_f() {
    FSV_f.prototype.define = function FSV_f() {
        in1 = 1;
        model = scicos_model();
        model.sim = list("fsv",1);
        model.in1 = in1;
        model.out = in1;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = " ";
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    FSV_f.prototype.details = function FSV_f() {
        return this.x;
    }
    FSV_f.prototype.get = function FSV_f() {
    }
    FSV_f.prototype.set = function FSV_f() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
