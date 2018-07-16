/* autogenerated from "macros/NonLinear/EXPBLK_m.sci" */
function EXPBLK_m() {
    EXPBLK_m.prototype.define = function EXPBLK_m() {
        var in1 = 1;
        this.a = math.E;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["expblk_m"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.a]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = ["%e"];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EXPBLK_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    EXPBLK_m.prototype.details = function EXPBLK_m() {
        return this.x;
    }
    EXPBLK_m.prototype.get = function EXPBLK_m() {
        var options = {
        }
        return options;
    }
    EXPBLK_m.prototype.set = function EXPBLK_m() {
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==2) {
            this.exprs = this.exprs[2-1];
        }
        while (true) {
            var ok = true;
            this.a = parseFloat(arguments[0]["a"]);
            this.exprs = parseFloat(arguments[0]["exprs"]);
            if (!ok) {
                break;
            }
            if (or(this.a<=0)) {
                message("a^u : a must be positive");
            } else {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.rpar = new ScilabDouble([this.a]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
