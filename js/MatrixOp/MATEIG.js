/* autogenerated from "macros/MatrixOp/MATEIG.sci" */
function MATEIG() {
    MATEIG.prototype.define = function MATEIG() {
        this.model = scicos_model();
        function_name = "mat_vps";
        funtyp = 4;
        this.model.sim = list(new ScilabString(function_name),new ScilabDouble(funtyp));
        this.model.in1 = new ScilabDouble(-1);
        this.model.in2 = new ScilabDouble(-1);
        this.model.intyp = new ScilabDouble(1);
        this.model.out = new ScilabDouble(-1);
        this.model.out2 = new ScilabDouble(1);
        this.model.outtyp = new ScilabDouble(2);
        this.model.evtin = [];
        this.model.evtout = [];
        this.model.state = [];
        this.model.dstate = [];
        this.model.rpar = [];
        this.model.ipar = [];
        this.model.blocktype = new ScilabString("c");
        this.model.firing = [];
        this.model.dep_ut = [true,false];
        label = [[sci2exp(1)],[sci2exp(1)]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    MATEIG.prototype.details = function MATEIG() {
        return this.x;
    }
    MATEIG.prototype.get = function MATEIG() {
        var options = {
            typ:["Datatype(1=real double  2=Complex)",this.typ],
            decomptyp:["decomposition type (1=eig values  2=eig values+eig vectors",this.decomptyp],
        }
        return options;
    }
    MATEIG.prototype.set = function MATEIG() {
        this.typ = inverse(arguments[0]["typ"])
        this.decomptyp = arguments[0]["decomptyp"]
        this.lab = arguments[0]["lab"]
        this.x = arg1;
        this.model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,this.decomptyp,this.lab] = scicos_getvalue("Set MATEIG block parameters",["Datatype(1=real double  2=Complex)","decomposition type (1=eig values  2=eig values+eig vectors"],list("vec",1,"vec",1),label);
            if (!ok) {
                break;
            }
            label = this.lab;
            if ((this.typ==1)) {
                if ((this.decomptyp==1)) {
                    function_name = "mat_vps";
                    out = [-1,1];
                    ot = 2;
                } else if ((this.decomptyp==2)) {
                    function_name = "mat_vpv";
                    out = [[-1,-1],[-1,-1]];
                    ot = [2,2];
                } else {
                    message("decomposition type is not supported");
                    ok = false;
                }
                it = 1;
            } else if ((this.typ==2)) {
                if ((this.decomptyp==1)) {
                    function_name = "matz_vps";
                    out = [-1,1];
                    ot = 2;
                } else if ((this.decomptyp==2)) {
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
                [model,graphics,ok] = set_io(this.model,graphics,list(in1,it),list(out,ot),[],[]);
            }
            if (ok) {
                this.model.sim = list(new ScilabString(function_name),new ScilabDouble(funtyp));
                arg1.model = this.model;
                graphics.exprs = label;
                arg1.graphics = graphics;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
