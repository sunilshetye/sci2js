/* autogenerated from "macros/Branching/NRMSOM_f.sci" */
function NRMSOM_f() {
    NRMSOM_f.prototype.define = function NRMSOM_f() {
        in1 = [[-1],[-1]];
        this.nin = 2;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["junk"]);
        this.model.in1 = new ScilabDouble(in1);
        this.model.out = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [true,false];
        exprs = [string(this.nin)];
        gr_i = [];
        this.x = standard_define([.2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    NRMSOM_f.prototype.details = function NRMSOM_f() {
        return this.x;
    }
    NRMSOM_f.prototype.get = function NRMSOM_f() {
        var options = {
            nin:["number of inputs",this.nin],
        }
        return options;
    }
    NRMSOM_f.prototype.set = function NRMSOM_f() {
        this.nin = parseFloat(arguments[0]["nin"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.nin,exprs] = scicos_getvalue("Set parameters",["number of inputs"],list("vec",1),exprs);
            if (!ok) {
                break;
            }
            [this.model,graphics,ok] = check_io(this.model,graphics,-ones(this.nin,1),-1,[],[]);
            if (ok) {
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
