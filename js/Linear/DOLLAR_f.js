/* autogenerated from "macros/Linear/DOLLAR_f.sci" */
function DOLLAR_f() {
    DOLLAR_f.prototype.define = function DOLLAR_f() {
        z = 0;
        inh = 0;
        in1 = 1;
        exprs = string([[z],[inh]]);
        model = scicos_model();
        model.sim = "dollar";
        model.in1 = in1;
        model.out = in1;
        model.evtin = 1-inh;
        model.dstate = z;
        model.blocktype = "d";
        model.dep_ut = [false,false];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DOLLAR_f.prototype.details = function DOLLAR_f() {
        return this.x;
    }
    DOLLAR_f.prototype.get = function DOLLAR_f() {
    }
    DOLLAR_f.prototype.set = function DOLLAR_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,"*")<2) {
            exprs[2-1] = "0";
        }
        while (true) {
            [ok,a,inh,exprs] = scicos_getvalue("Set 1/z block parameters",[["initial condition"],["Inherit (no:0, yes:1)"]],list("vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            out = size(a,"*");
            if (out==0) {
                out = [];
            }
            in1 = out;
            if (ok) {
                [model,graphics,ok] = check_io(model,graphics,-1,-1,ones(1-inh,1),[]);
            }
            if (ok) {
                graphics.exprs = exprs;
                model.dstate = a;
                model.in1 = in1;
                model.out = out;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
