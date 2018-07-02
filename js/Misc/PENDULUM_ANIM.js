/* autogenerated from "macros/Misc/PENDULUM_ANIM.sci" */
function PENDULUM_ANIM() {
    PENDULUM_ANIM.prototype.define = function PENDULUM_ANIM() {
        this.plen = 2;
        this.csiz = 2;
        this.phi = 0;
        this.xmin = -5;
        this.xmax = 5;
        this.ymin = -5;
        this.ymax = 5;
        model = scicos_model();
        model.sim = list("anim_pen",5);
        model.in1 = [[1],[1]];
        model.evtin = 1;
        model.dstate = 0;
        model.rpar = [[this.plen],[this.csiz],[this.phi],[this.xmin],[this.xmax],[this.ymin],[this.ymax]];
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = string(model.rpar);
        gr_i = [];
        this.x = standard_define([3,3],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    PENDULUM_ANIM.prototype.details = function PENDULUM_ANIM() {
        return this.x;
    }
    PENDULUM_ANIM.prototype.get = function PENDULUM_ANIM() {
    }
    PENDULUM_ANIM.prototype.set = function PENDULUM_ANIM() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        dstate = model.dstate;
        while (true) {
            [ok,this.plen,this.csiz,this.phi,this.xmin,this.xmax,this.ymin,this.ymax,exprs] = scicos_getvalue("Set Scope parameters",["pendulum length","cart size (square side)","slope","Xmin","Xmax","Ymin","Ymax"],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            mess = [];
            if (this.plen<=0||this.csiz<=0) {
                mess = [[mess],["Pendulum length and cart size must be positive."],[" "]];
                ok = false;
            }
            if (this.ymin>=this.ymax) {
                mess = [[mess],["Ymax must be greater than Ymin"],[" "]];
                ok = false;
            }
            if (this.xmin>=this.xmax) {
                mess = [[mess],["Xmax must be greater than Xmin"],[" "]];
                ok = false;
            }
            if (!ok) {
                message(mess);
            } else {
                rpar = [[this.plen],[this.csiz],[this.phi],[this.xmin],[this.xmax],[this.ymin],[this.ymax]];
                model.rpar = rpar;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
