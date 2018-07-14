/* autogenerated from "macros/Sources/TKSCALE.sci" */
function TKSCALE() {
    TKSCALE.prototype.define = function TKSCALE() {
        this.a = -10;
        this.b = 10;
        this.f = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["tkscaleblk"]), new ScilabDouble([5]));
        this.model.out = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.a],[this.b],[this.f]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = [[sci2exp(this.a)],[sci2exp(this.b)],[sci2exp(this.f)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TKSCALE\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    TKSCALE.prototype.details = function TKSCALE() {
        return this.x;
    }
    TKSCALE.prototype.get = function TKSCALE() {
        var options = {
        a:["Min value",this.a],
        b:["Max value",this.b],
        f:["Normalization",this.f],
        }
        return options;
    }
    TKSCALE.prototype.set = function TKSCALE() {
        this.a = parseFloat(arguments[0]["a"])
        this.b = parseFloat(arguments[0]["b"])
        this.f = parseFloat(arguments[0]["f"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        [ok,this.a,this.b,this.f,this.exprs] = scicos_getvalue("Set scale block parameters",["Min value","Max value","Normalization"],list("vec",1,"vec",1,"vec",1),this.exprs);
        if (ok) {
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.model.rpar = new ScilabDouble([this.a],[this.b],[this.f]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
        }
        return new BasicBlock(this.x);
    }
}
