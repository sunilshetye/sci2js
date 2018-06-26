/* autogenerated from "macros/Sinks/CLKOUTV_f.sci" */
function CLKOUTV_f() {
    CLKOUTV_f.prototype.define = function CLKOUTV_f() {
        prt = 1;
        model = scicos_model();
        model.sim = "output";
        model.evtin = 1;
        model.ipar = prt;
        model.blocktype = "d";
        model.firing = [];
        model.dep_ut = [false,false];
        exprs = string(prt);
        this.x = standard_define([1,1],model,exprs," ");
        return new BasicBlock(this.x);
    }
    CLKOUTV_f.prototype.details = function CLKOUTV_f() {
        return this.x;
    }
    CLKOUTV_f.prototype.get = function CLKOUTV_f() {
    }
    CLKOUTV_f.prototype.set = function CLKOUTV_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        while (true) {
            [ok,prt,exprs] = scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"CLKOUTV_f")],[" "],[gettext("Event output port")]],gettext("Port number"),list("vec",1),exprs);
            if (!ok) {
                break;
            }
            prt = int(prt);
            if (prt<=0) {
                block_parameter_error(msprintf(gettext("Wrong value for \'Port Number\' parameter: %d."),prt),gettext("Strictly positive integer expected."));
            } else {
                model.ipar = prt;
                model.evtin = 1;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
