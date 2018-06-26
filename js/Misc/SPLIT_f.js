/* autogenerated from "macros/Misc/SPLIT_f.sci" */
function SPLIT_f() {
    SPLIT_f.prototype.define = function SPLIT_f() {
        model = scicos_model();
        model.sim = "lsplit";
        model.in1 = -1;
        model.out = [[-1],[-1],[-1]];
        model.blocktype = "c";
        model.dep_ut = [true,false];
        this.x = standard_define([1,1]/3,model,[],[]);
        return new BasicBlock(this.x);
    }
    SPLIT_f.prototype.details = function SPLIT_f() {
        return this.x;
    }
    SPLIT_f.prototype.get = function SPLIT_f() {
    }
    SPLIT_f.prototype.set = function SPLIT_f() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
