/* autogenerated from "macros/Misc/BACKLASH.sci" */
function BACKLASH() {
    BACKLASH.prototype.define = function BACKLASH() {
        exprs = [["0"],["1"],["1"]];
        model = scicos_model();
        model.sim = list("backlash",4);
        model.in1 = 1;
        model.out = 1;
        model.rpar = [[0],[1]];
        model.nzcross = 2;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    BACKLASH.prototype.details = function BACKLASH() {
        return this.x;
    }
    BACKLASH.prototype.get = function BACKLASH() {
    }
    BACKLASH.prototype.set = function BACKLASH() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        rpar = model.rpar;
        while (true) {
            [ok,this.ini,this.gap,this.zcr,exprs] = scicos_getvalue("Set backlash parameters",["initial output","gap","use zero-crossing (0:no, 1:yes)"],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (ok) {
                graphics.exprs = exprs;
                rpar[1-1] = this.ini;
                rpar[2-1] = this.gap;
                if (this.zcr!=0) {
                    model.nzcross = 2;
                } else {
                    model.nzcross = 0;
                }
                model.rpar = rpar;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
