/* autogenerated from "macros/MatrixOp/MATEIG.sci" */
function MATEIG() {
    MATEIG.prototype.define = function MATEIG() {
        model = scicos_model();
        function_name = "mat_vps";
        funtyp = 4;
        model.sim = list(function_name,funtyp);
        model.in1 = -1;
        model.in2 = -1;
        model.intyp = 1;
        model.out = -1;
        model.out2 = 1;
        model.outtyp = 2;
        model.evtin = [];
        model.evtout = [];
        model.state = [];
        model.dstate = [];
        model.rpar = [];
        model.ipar = [];
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,false];
        label = [[sci2exp(1)],[sci2exp(1)]];
        gr_i = [];
        this.x = standard_define([2,2],model,label,gr_i);
        return new BasicBlock(this.x);
    }
    MATEIG.prototype.details = function MATEIG() {
        return this.x;
    }
    MATEIG.prototype.get = function MATEIG() {
    }
    MATEIG.prototype.set = function MATEIG() {
        this.x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,typ,decomptyp,lab] = scicos_getvalue("Set MATEIG block parameters",[["Datatype(1=real double  2=Complex)"],["decomposition type (1=eig values  2=eig values+eig vectors"]],list("vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            label = lab;
            if ((typ==1)) {
                if ((decomptyp==1)) {
                    function_name = "mat_vps";
                    out = [-1,1];
                    ot = 2;
                } else if ((decomptyp==2)) {
                    function_name = "mat_vpv";
                    out = [[-1,-1],[-1,-1]];
                    ot = [2,2];
                } else {
                    message("decomposition type is not supported");
                    ok = false;
                }
                it = 1;
            } else if ((typ==2)) {
                if ((decomptyp==1)) {
                    function_name = "matz_vps";
                    out = [-1,1];
                    ot = 2;
                } else if ((decomptyp==2)) {
                    function_name = "matz_vpv";
                    out = [[-1,-1],[-1,-1]];
                    ot = [2,2];
                } else {
                    message("decomposition type is not supported");
                    ok = false;
                }
                it = 2;
            } else {
                message("Datatype is not supported");
                ok = false;
            }
            in1 = [-1,-1];
            funtyp = 4;
            if (ok) {
                [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
            }
            if (ok) {
                model.sim = list(function_name,funtyp);
                arg1.model = model;
                graphics.exprs = label;
                arg1.graphics = graphics;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
