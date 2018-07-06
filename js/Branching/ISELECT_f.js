/* autogenerated from "macros/Branching/ISELECT_f.sci" */
function ISELECT_f() {
    ISELECT_f.prototype.define = function ISELECT_f() {
        this.z0 = 0;
        out = [[-1],[-1]];
        this.nout = 2;
        model = scicos_model();
        model.sim = list("selector",2);
        model.in1 = -1;
        model.out = out;
        model.evtin = ones(out);
        model.dstate = this.z0;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[string(this.nout)],[string(this.z0+1)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    ISELECT_f.prototype.details = function ISELECT_f() {
        return this.x;
    }
    ISELECT_f.prototype.get = function ISELECT_f() {
        var options = {
            nout:["number of outputs",this.nout],
            z0:["initial connected output",this.z0],
        }
        return options;
    }
    ISELECT_f.prototype.set = function ISELECT_f() {
        this.nout = parseFloat(arguments[0]["nout"])
        this.z0 = parseFloat(arguments[0]["z0"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.nout,this.z0,exprs] = scicos_getvalue("Set parameters",["number of outputs","initial connected output"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.z0>this.nout||this.z0<=0) {
                message("initial connected input is not a valid input port number");
            } else {
                [model,graphics,ok] = check_io(model,graphics,-1,-ones(this.nout,1),ones(this.nout,1),[]);
                if (ok) {
                    graphics.exprs = exprs;
                    model.dstate = this.z0-1;
                    this.x.graphics = graphics;
                    this.x.model = model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
