/* autogenerated from "macros/Linear/INTEGRAL_f.sci" */
function INTEGRAL_f() {
    INTEGRAL_f.prototype.define = function INTEGRAL_f() {
        this.x0 = 0;
        model = scicos_model();
        model.sim = "integr";
        model.in1 = 1;
        model.out = 1;
        model.state = this.x0;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = strcat(sci2exp(this.x0));
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    INTEGRAL_f.prototype.details = function INTEGRAL_f() {
        return this.x;
    }
    INTEGRAL_f.prototype.get = function INTEGRAL_f() {
    }
    INTEGRAL_f.prototype.set = function INTEGRAL_f() {
        this.x0 = parseFloat((arguments[0]["x0"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.x0,exprs] = scicos_getvalue("Set continuous linear system parameters","Initial state",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            graphics.exprs = exprs;
            model.state = this.x0;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
        this.x.model.firing = [];
        return new BasicBlock(this.x);
    }
}
