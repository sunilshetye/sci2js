/* autogenerated from "macros/Events/MFCLCK_f.sci" */
function MFCLCK_f() {
    MFCLCK_f.prototype.define = function MFCLCK_f() {
        nn = 2;
        dt = 0.1;
        model = scicos_model();
        model.sim = "mfclck";
        model.evtin = 1;
        model.evtout = [[1],[1]];
        model.dstate = 0;
        model.rpar = dt;
        model.ipar = nn;
        model.blocktype = "d";
        model.firing = [-1,0];
        model.dep_ut = [false,false];
        exprs = [[string(dt)],[string(nn)]];
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    MFCLCK_f.prototype.details = function MFCLCK_f() {
        return this.x;
    }
    MFCLCK_f.prototype.get = function MFCLCK_f() {
    }
    MFCLCK_f.prototype.set = function MFCLCK_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        [ok,dt,nn,exprs] = scicos_getvalue("Set Multifrequency clock parameters",[["basic period (1/f)"],["multiply by (n)"]],list("vec",1,"vec",1),exprs);
        if (ok) {
            model.ipar = nn;
            model.rpar = dt;
            hh = model.firing;
            hh[2-1] = 0;
            model.firing = hh;
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
        }
        return new BasicBlock(this.x);
    }
}
