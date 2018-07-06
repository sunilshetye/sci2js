/* autogenerated from "macros/Misc/MEMORY_f.sci" */
function MEMORY_f() {
    MEMORY_f.prototype.define = function MEMORY_f() {
        z = 0;
        in1 = 1;
        exprs = [[string(z)],[string(1)]];
        model = scicos_model();
        model.sim = "memo";
        model.in1 = in1;
        model.out = in1;
        model.evtin = 1;
        model.dstate = 0;
        model.rpar = z;
        model.blocktype = "m";
        model.dep_ut = [false,false];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    MEMORY_f.prototype.details = function MEMORY_f() {
        return this.x;
    }
    MEMORY_f.prototype.get = function MEMORY_f() {
        var options = {
            a:["initial condition",this.a],
            inh:["Inherit (1: no, 0: yes)",this.inh],
        }
        return options;
    }
    MEMORY_f.prototype.set = function MEMORY_f() {
        this.a = arguments[0]["a"]
        this.inh = parseFloat(arguments[0]["inh"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.a,this.inh,exprs] = scicos_getvalue("Set memory block parameters",["initial condition","Inherit (1: no, 0: yes)"],list("vec",-1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.inh==0) {
                this.inh = [];
            } else {
                this.inh = 1;
            }
            [model,graphics,ok] = check_io(model,graphics,-1,-1,this.inh,[]);
            out = size(this.a,"*");
            if (out==0) {
                ok = false;
                messagebox("Initial condition empty","modal","error");
            }
            in1 = out;
            if (ok) {
                graphics.exprs = exprs;
                model.rpar = this.a;
                model.in1 = in1;
                model.out = out;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
