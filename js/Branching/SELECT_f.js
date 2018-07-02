/* autogenerated from "macros/Branching/SELECT_f.sci" */
function SELECT_f() {
    SELECT_f.prototype.define = function SELECT_f() {
        this.z0 = 0;
        in1 = [[-1],[-1]];
        this.nin = 2;
        model = scicos_model();
        model.sim = list("selector",2);
        model.in1 = in1;
        model.out = -1;
        model.evtin = ones(in1);
        model.dstate = this.z0;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[string(this.nin)],[string(this.z0+1)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    SELECT_f.prototype.details = function SELECT_f() {
        return this.x;
    }
    SELECT_f.prototype.get = function SELECT_f() {
    }
    SELECT_f.prototype.set = function SELECT_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.nin,this.z0,exprs] = scicos_getvalue("Set parameters",["number of inputs","initial connected input"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.z0>this.nin||this.z0<=0) {
                message("initial connected input is not a valid input port number");
            } else {
                [model,graphics,ok] = check_io(model,graphics,-ones(this.nin,1),-1,ones(this.nin,1),[]);
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
