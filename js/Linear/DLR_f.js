/* autogenerated from "macros/Linear/DLR_f.sci" */
function DLR_f() {
    DLR_f.prototype.define = function DLR_f() {
        var x0 = 0;
        var A = -1;
        var B = 1;
        var C = 1;
        var D = 0;
        this.exprs = [["1"],["1+z"]];
        this.model = scicos_model();
        this.model.sim = new ScilabString(["dsslti"]);
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble(x0.slice());
        this.model.rpar = new ScilabDouble([A.slice()],[B.slice()],[C.slice()],[D.slice()]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DLR_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2.5,2.5]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    DLR_f.prototype.details = function DLR_f() {
        return this.x;
    }
    DLR_f.prototype.get = function DLR_f() {
        var options = {
            num:["Numerator (z)",this.num],
            den:["Denominator (z)",this.den],
        }
        return options;
    }
    DLR_f.prototype.set = function DLR_f() {
        this.num = arguments[0]["num"]
        this.den = arguments[0]["den"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        var x0 = this.model.dstate;
        var ns = prod(size(x0));
        var PREVAR_scicos_context = PREVAR_scicos_context;
        PREVAR_scicos_context.z = %z;
        while (true) {
            [ok,this.num,this.den,this.exprs] = scicos_getvalue("Set discrete SISO transfer parameters",["Numerator (z)","Denominator (z)"],list("pol",1,"pol",1),this.exprs);
            if (!ok) {
                break;
            }
            if (degree(this.num)>degree(this.den)) {
                message("Transfer must be proper");
                var ok = false;
            }
            if (ok) {
                var H = cont_frm(this.num,this.den);
                var tmpvar0 = H.slice(2-1,5);
                var A = tmpvar0[0];
                var B = tmpvar0[1];
                var C = tmpvar0[2];
                var D = tmpvar0[3];
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                var tmpvar1 = size(A);
                var ns1 = tmpvar1[0];
                var ns1 = tmpvar1[1];
                if (ns1<=ns) {
                    var x0 = x0.slice(1-1,ns1);
                } else {
                    x0[ns1-1][1-1] = 0;
                }
                var rpar = [[A.slice()],[B.slice()],[C.slice()],[D.slice()]];
                this.model.dstate = new ScilabDouble(x0);
                this.model.rpar = new ScilabDouble(rpar);
                if (norm(D,1)!=0) {
                    var mmm = [true,false];
                } else {
                    var mmm = [false,false];
                }
                if (or(this.model.dep_ut!=mmm)) {
                    this.model.dep_ut = new ScilabBoolean(mmm);
                }
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        this.x.model.firing = [];
        return new BasicBlock(this.x);
    }
}
