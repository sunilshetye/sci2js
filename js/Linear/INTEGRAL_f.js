/* autogenerated from "macros/Linear/INTEGRAL_f.sci" */
function INTEGRAL_f() {
    INTEGRAL_f.prototype.define = function INTEGRAL_f() {
        this.x0 = 0;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["integr"]);
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.state = new ScilabDouble([this.x0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        this.exprs = strcat(sci2exp(this.x0));
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"INTEGRAL_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    INTEGRAL_f.prototype.details = function INTEGRAL_f() {
        return this.x;
    }
    INTEGRAL_f.prototype.get = function INTEGRAL_f() {
        var options = {
            x0:["Initial state",this.x0],
        }
        return options;
    }
    INTEGRAL_f.prototype.set = function INTEGRAL_f() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.x0 = parseFloat(arguments[0]["x0"]);
            if (!ok) {
                break;
            }
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.model.state = new ScilabDouble([this.x0]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        this.x.model.firing = [];
        return new BasicBlock(this.x);
    }
}
