/* autogenerated from "macros/Sources/TIME_f.sci" */
function TIME_f() {
    TIME_f.prototype.define = function TIME_f() {
        model = scicos_model();
        model.sim = "timblk";
        model.out = 1;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        gr_i = [];
        this.x = standard_define([2,2],model,[],gr_i);
        return new BasicBlock(this.x);
    }
    TIME_f.prototype.details = function TIME_f() {
        return this.x;
    }
    TIME_f.prototype.get = function TIME_f() {
    }
    TIME_f.prototype.set = function TIME_f() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
