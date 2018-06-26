/* autogenerated from "macros/NonLinear/ABS_VALUE.sci" */
function ABS_VALUE() {
    ABS_VALUE.prototype.define = function ABS_VALUE() {
        nu = -1;
        model = scicos_model();
        model.sim = list("absolute_value",4);
        model.in1 = nu;
        model.out = nu;
        model.nzcross = nu;
        model.nmode = nu;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [string([1])];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    ABS_VALUE.prototype.details = function ABS_VALUE() {
        return this.x;
    }
    ABS_VALUE.prototype.get = function ABS_VALUE() {
    }
    ABS_VALUE.prototype.set = function ABS_VALUE() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,zcr,exprs] = scicos_getvalue("Set block parameters",["use zero_crossing (1: yes) (0:no)"],list("vec",1),exprs);
            if (!ok) {
                break;
            }
            graphics.exprs = exprs;
            if (ok) {
                if (zcr!=0) {
                    model.nmode = -1;
                    model.nzcross = -1;
                } else {
                    model.nmode = 0;
                    model.nzcross = 0;
                }
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
