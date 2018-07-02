/* autogenerated from "macros/NonLinear/EXPBLK_f.sci" */
function EXPBLK_f() {
    EXPBLK_f.prototype.define = function EXPBLK_f() {
        in1 = 1;
        this.a = math.E;
        model = scicos_model();
        model.sim = "expblk";
        model.in1 = -1;
        model.out = -1;
        model.rpar = this.a;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = ["%e"];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    EXPBLK_f.prototype.details = function EXPBLK_f() {
        return this.x;
    }
    EXPBLK_f.prototype.get = function EXPBLK_f() {
    }
    EXPBLK_f.prototype.set = function EXPBLK_f() {
        this.a = parseFloat((arguments[0]["a"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,"*")==2) {
            exprs = exprs[2-1];
        }
        while (true) {
            [ok,this.a,exprs] = scicos_getvalue("Set a^u  block parameters","a (>0)",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            if (or(this.a<=0)) {
                message("a^u : a must be positive");
            } else {
                graphics.exprs = exprs;
                model.rpar = this.a;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
