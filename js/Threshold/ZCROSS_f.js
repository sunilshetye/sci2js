/* autogenerated from "macros/Threshold/ZCROSS_f.sci" */
function ZCROSS_f() {
    ZCROSS_f.prototype.define = function ZCROSS_f() {
        var rpar = [[-1],[-1],[0],[0]];
        this.in1 = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        this.model.in = new ScilabDouble([this.in1]);
        this.model.nzcross = new ScilabDouble([this.in1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([-1],[-1],[0],[0]);
        this.model.blocktype = new ScilabString(["z"]);
        this.model.firing = new ScilabDouble([-1]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = strcat(sci2exp(this.in1));
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ZCROSS_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    ZCROSS_f.prototype.details = function ZCROSS_f() {
        return this.x;
    }
    ZCROSS_f.prototype.get = function ZCROSS_f() {
        var options = {
            in1:["Input size",this.in1],
        }
        return options;
    }
    ZCROSS_f.prototype.set = function ZCROSS_f() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.in1 = parseFloat(arguments[0]["in1"]);
            if (!ok) {
                break;
            }
            this.in1 = int(this.in1);
            if (this.in1<=0) {
                message("Block must have at least one input");
                throw "user error";
            } else {
                var kk = 0;
                for (jj=1;jj<=this.in1;jj+=1) {
                    var kk = kk+2^(this.in1+jj-1);
                }
                this.model.rpar = new ScilabDouble([-ones(kk,1)],[zeros(2^(2*this.in1)-kk,1)]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.in = new ScilabDouble([this.in1]);
                this.model.nzcross = new ScilabDouble([this.in1]);
                this.model.firing = new ScilabDouble([-1]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
