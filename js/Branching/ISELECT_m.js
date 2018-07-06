/* autogenerated from "macros/Branching/ISELECT_m.sci" */
function ISELECT_m() {
    ISELECT_m.prototype.define = function ISELECT_m() {
        this.z0 = 1;
        this.nout = 2;
        model = scicos_model();
        model.sim = list("selector_m",4);
        model.out = [[-1],[-1]];
        model.out2 = [[-2],[-2]];
        model.outtyp = 1;
        model.in1 = -1;
        model.in2 = -2;
        model.intyp = 1;
        model.evtout = [];
        model.state = [];
        model.rpar = [];
        model.ipar = [];
        model.firing = [];
        model.evtin = ones(this.nout,1);
        model.dstate = this.z0;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[sci2exp(1)],[sci2exp(this.nout)],[sci2exp(this.z0)]];
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    ISELECT_m.prototype.details = function ISELECT_m() {
        return this.x;
    }
    ISELECT_m.prototype.get = function ISELECT_m() {
        var options = {
            typ:["Datatype(1= real double  2=Complex 3=int32 ...)",this.typ],
            nout:["number of outputs",this.nout],
            z0:["initial connected output",this.z0],
        }
        return options;
    }
    ISELECT_m.prototype.set = function ISELECT_m() {
        this.typ = inverse(arguments[0]["typ"])
        this.nout = parseFloat(arguments[0]["nout"])
        this.z0 = parseFloat(arguments[0]["z0"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.typ,this.nout,this.z0,exprs] = scicos_getvalue("Set parameters",["Datatype(1= real double  2=Complex 3=int32 ...)","number of outputs","initial connected output"],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.z0>this.nout||this.z0<=0) {
                message("initial connected input is not a valid input port number");
            } else if (((this.typ<1)||(this.typ>8))) {
                message("Datatype is not supported");
                ok = false;
            } else {
                it = this.typ;
                ot = this.typ*ones(1,this.nout);
                if (ok) {
                    out = [-ones(this.nout,1),-2*ones(this.nout,1)];
                    in1 = [-1,-2];
                    [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),ones(this.nout,1),[]);
                    if (ok) {
                        graphics.exprs = exprs;
                        model.dstate = this.z0;
                        this.x.graphics = graphics;
                        this.x.model = model;
                        break;
                    }
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
