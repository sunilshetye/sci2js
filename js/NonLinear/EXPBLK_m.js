/* autogenerated from "macros/NonLinear/EXPBLK_m.sci" */
function EXPBLK_m() {
    EXPBLK_m.prototype.define = function EXPBLK_m() {
        in1 = 1;
        this.a = math.E;
        model = scicos_model();
        model.sim = list("expblk_m",4);
        model.in1 = -1;
        model.in2 = -2;
        model.out = -1;
        model.out2 = -2;
        model.intyp = 1;
        model.outtyp = 1;
        model.rpar = this.a;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = ["%e"];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    EXPBLK_m.prototype.details = function EXPBLK_m() {
        return this.x;
    }
    EXPBLK_m.prototype.get = function EXPBLK_m() {
    }
    EXPBLK_m.prototype.set = function EXPBLK_m() {
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
