/* autogenerated from "macros/NonLinear/SAT_f.sci" */
function SAT_f() {
    SAT_f.prototype.define = function SAT_f() {
        this.minp = -1;
        this.maxp = 1;
        var slope = 1;
        var rpar = [[this.minp],[this.maxp],[slope]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["lusat"]), new ScilabDouble([1]));
        this.model.in = new ScilabDouble([1]);
        this.model.nzcross = new ScilabDouble([2]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.minp],[this.maxp],[slope]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.exprs = [[string(this.minp)],[string(this.maxp)],[string(slope)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SAT_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    SAT_f.prototype.details = function SAT_f() {
        return this.x;
    }
    SAT_f.prototype.get = function SAT_f() {
        var options = {
            minp:["Min",this.minp],
            maxp:["Max",this.maxp],
            pente:["Slope",this.pente],
        }
        return options;
    }
    SAT_f.prototype.set = function SAT_f() {
        this.minp = parseFloat(arguments[0]["minp"])
        this.maxp = parseFloat(arguments[0]["maxp"])
        this.pente = arguments[0]["pente"]
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.minp,this.maxp,this.pente,this.exprs] = scicos_getvalue("Set Saturation parameters",["Min","Max","Slope"],list("vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.maxp<=0) {
                message("Max must be strictly positive");
            } else if (this.pente<=0) {
                message("Slope must be strictly positive");
            } else {
                var rpar = [[this.minp/this.pente],[this.maxp/this.pente],[this.pente]];
                this.model.rpar = new ScilabDouble(rpar);
                this.model.firing = new ScilabDouble([]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
