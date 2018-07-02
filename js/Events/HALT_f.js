/* autogenerated from "macros/Events/HALT_f.sci" */
function HALT_f() {
    HALT_f.prototype.define = function HALT_f() {
        this.n = 0;
        model = scicos_model();
        model.sim = "hltblk";
        model.evtin = 1;
        model.dstate = 0;
        model.ipar = 0;
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = string(this.n);
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    HALT_f.prototype.details = function HALT_f() {
        return this.x;
    }
    HALT_f.prototype.get = function HALT_f() {
    }
    HALT_f.prototype.set = function HALT_f() {
        this.n = parseFloat((arguments[0]["n"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.n,exprs] = scicos_getvalue("Set Halt block parameters",["State on halt"],list("vec",1),exprs);
            if (!ok) {
                break;
            }
            if (ok) {
                graphics.exprs = exprs;
                model.ipar = this.n;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
