/* autogenerated from "macros/NonLinear/SAT_f.sci" */
function SAT_f() {
    SAT_f.prototype.define = function SAT_f() {
        this.minp = -1;
        this.maxp = 1;
        slope = 1;
        rpar = [[this.minp],[this.maxp],[slope]];
        model = scicos_model();
        model.sim = list("lusat",1);
        model.in1 = 1;
        model.nzcross = 2;
        model.out = 1;
        model.rpar = [[this.minp],[this.maxp],[slope]];
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[string(this.minp)],[string(this.maxp)],[string(slope)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    SAT_f.prototype.details = function SAT_f() {
        return this.x;
    }
    SAT_f.prototype.get = function SAT_f() {
    }
    SAT_f.prototype.set = function SAT_f() {
        this.minp = parseFloat((arguments[0]["minp"]))
        this.maxp = parseFloat((arguments[0]["maxp"]))
        this.pente = parseFloat((arguments[0]["pente"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.minp,this.maxp,this.pente,exprs] = scicos_getvalue("Set Saturation parameters",["Min","Max","Slope"],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.maxp<=0) {
                message("Max must be strictly positive");
            } else if (this.pente<=0) {
                message("Slope must be strictly positive");
            } else {
                rpar = [[this.minp/this.pente],[this.maxp/this.pente],[this.pente]];
                model.rpar = rpar;
                model.firing = [];
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
