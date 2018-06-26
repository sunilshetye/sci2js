/* autogenerated from "macros/Sinks/BARXY.sci" */
function BARXY() {
    BARXY.prototype.define = function BARXY() {
        model = scicos_model();
        xmin = -15;
        xmax = 15;
        ymin = -15;
        ymax = 15;
        model.sim = list("BARXY_sim",5);
        model.blocktype = "d";
        model.dep_ut = [true,false];
        model.in1 = [[-1],[-1]];
        model.intyp = [1];
        model.out = [];
        model.evtin = [1];
        model.rpar = [[xmin],[xmax],[ymin],[ymax]];
        model.ipar = 1;
        this.x = standard_define([2,2],model,[],[]);
        this.x.graphics.in_implicit = ["E","E"];
        this.x.graphics.out_implicit = [];
        this.x.graphics.exprs = [["-15"],["15"],["-15"],["15"],["1"]];
        return new BasicBlock(this.x);
    }
    BARXY.prototype.details = function BARXY() {
        return this.x;
    }
    BARXY.prototype.get = function BARXY() {
    }
    BARXY.prototype.set = function BARXY() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,xmin,xmax,ymin,ymax,thickness,exprs] = scicos_getvalue("Set Scope parameters",[["Xmin"],["Xmax"],["Ymin"],["Ymax"],["Segs Thickness"]],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            mess = [];
            if (ymin>=ymax) {
                mess = [[mess],["Ymax must be greater than Ymin"],[" "]];
                ok = false;
            }
            if (xmin>=xmax) {
                mess = [[mess],["Xmax must be greater than Xmin"],[" "]];
                ok = false;
            }
            if (thickness<=0) {
                mess = [[mess],["Thickness must be strictly positive."]];
                ok = false;
            }
            if (!ok) {
                message(mess);
            } else {
                model.rpar = [[xmin],[xmax],[ymin],[ymax]];
                model.ipar = thickness;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
