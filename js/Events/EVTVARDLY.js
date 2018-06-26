/* autogenerated from "macros/Events/EVTVARDLY.sci" */
function EVTVARDLY() {
    EVTVARDLY.prototype.define = function EVTVARDLY() {
        model = scicos_model();
        model.sim = list("evtvardly",4);
        model.in1 = 1;
        model.evtin = 1;
        model.evtout = 1;
        model.blocktype = "d";
        model.firing = -1;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = string(model.firing);
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    EVTVARDLY.prototype.details = function EVTVARDLY() {
        return this.x;
    }
    EVTVARDLY.prototype.get = function EVTVARDLY() {
    }
    EVTVARDLY.prototype.set = function EVTVARDLY() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.fir,exprs] = scicos_getvalue("Set parameter of variable event delay","Initial event firing time (<0 if absent)",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            graphics.exprs = exprs;
            model.firing = this.fir;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
