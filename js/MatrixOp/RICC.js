/* autogenerated from "macros/MatrixOp/RICC.sci" */
function RICC() {
    RICC.prototype.define = function RICC() {
        this.model = scicos_model();
        var function_name = "ricc_m";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in = new ScilabDouble([-1],[-1],[-1]);
        this.model.in2 = new ScilabDouble([-1],[-1],[-1]);
        this.model.intyp = new ScilabDouble([1,1,1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([1],[1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var label = [[sci2exp(1)],[sci2exp(1)]];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RICC\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(label),gr_i);
        return new BasicBlock(this.x);
    }
    RICC.prototype.details = function RICC() {
        return this.x;
    }
    RICC.prototype.get = function RICC() {
        var label = this.graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        this.set_param_popup_title = "Set RICC Block";
        var options = {
            tpe:["Type (1=Cont  2=Disc)",this.tpe],
            mod:["Model(1=Schr  2=sign(cont) inv(disc))",this.mod],
        }
        return options;
    }
    RICC.prototype.set = function RICC() {
        var label = this.graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            var ok = true;
            this.tpe = arguments[0]["tpe"];
            this.mod = arguments[0]["mod"];
            var exprs = [arguments[0]["tpe"], arguments[0]["mod"]];
            if (!ok) {
                break;
            }
            var in1 = [this.model.in,this.model.in2];
            var out = [this.model.out,this.model.out2];
            var it = [1,1,1];
            var ot = 1;
            var label = exprs;
            var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
            this.model = tmpvar0[0];
            this.graphics = tmpvar0[1];
            var ok = tmpvar0[2];
            if (ok) {
                this.model.ipar = new ScilabDouble([this.tpe],[this.mod]);
                this.graphics.exprs = new ScilabDouble([label]);
                break;
            }
        }
        return new BasicBlock(this.x);
    }
    RICC.prototype.get_popup_title = function RICC() {
        return this.set_param_popup_title;
    }
    RICC.prototype.importset = function RICC() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.tpe = ary[0];
        this.mod = ary[1];
    }
    RICC.prototype.getContainer = function RICC() { return new BasicBlock(this.x); }
}
