/* autogenerated from "macros/Linear/GAIN_f.sci" */
function GAIN_f() {
    GAIN_f.prototype.define = function GAIN_f() {
        this.gain = 1;
        var in1 = 1;
        var out = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["gain"]);
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.gain]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [[strcat(sci2exp(this.gain))],[strcat(sci2exp(in1))],[strcat(sci2exp(out))]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GAIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    GAIN_f.prototype.details = function GAIN_f() {
        return this.x;
    }
    GAIN_f.prototype.get = function GAIN_f() {
        var options = {
            gain:["Gain",this.gain],
        }
        return options;
    }
    GAIN_f.prototype.set = function GAIN_f() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.gain = parseFloat(arguments[0]["gain"]);
            this.exprs = arguments[0]["exprs"];
            if (!ok) {
                break;
            }
            if (this.gain==[]) {
                message("Gain must have at least one element");
            } else {
                var tmpvar0 = size(this.gain);
                var out = tmpvar0[0];
                var in1 = tmpvar0[1];
                var tmpvar1 = check_io(this.model,this.graphics,in1,out,[],[]);
                this.model = tmpvar1[0];
                this.graphics = tmpvar1[1];
                var ok = tmpvar1[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([this.exprs]);
                    this.model.rpar = new ScilabDouble(this.gain.slice());
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
