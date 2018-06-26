/* autogenerated from "macros/Branching/ESELECT_f.sci" */
function ESELECT_f() {
    ESELECT_f.prototype.define = function ESELECT_f() {
        this.out = 2;
        model = scicos_model();
        model.sim = list("eselect",-2);
        model.in1 = 1;
        model.in2 = 1;
        model.intyp = -1;
        model.evtin = 1;
        model.evtout = ones(this.out,1);
        model.blocktype = "l";
        model.firing = -ones(this.out,1);
        model.dep_ut = [true,false];
        model.nmode = 0;
        model.nzcross = 0;
        gr_i = [];
        exprs = [[string(this.out)],[string(1)],[string(model.nmode)]];
        this.x = standard_define([4,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    ESELECT_f.prototype.details = function ESELECT_f() {
        return this.x;
    }
    ESELECT_f.prototype.get = function ESELECT_f() {
    }
    ESELECT_f.prototype.set = function ESELECT_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        if (size(exprs,"*")==1) {
            exprs[2-1] = string(1);
        }
        if (size(exprs,"*")==2) {
            exprs[3-1] = string(0);
        }
        model = arg1.model;
        while (true) {
            [ok,this.out,this.inh,this.nmod,exprs] = scicos_getvalue("Set ESELECT block parameters",[["number of output event ports"],["Inherit (1: no, 0: yes)"],["zero-crossing (0: no, 1: yes)"]],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.nmod!=0) {
                this.nmod = 1;
            }
            if (this.inh==0) {
                this.inh = [];
            } else {
                this.inh = 1;
            }
            this.out = int(this.out);
            if (this.out<2) {
                message("Block must have at least two output ports");
            } else {
                [model,graphics,ok] = check_io(model,graphics,1,[],this.inh,[ones(this.out,1)]);
                if (ok) {
                    graphics.exprs = exprs;
                    model.evtout = ones(this.out,1);
                    model.firing = -ones(this.out,1);
                    this.x.graphics = graphics;
                    model.nmode = this.nmod;
                    model.nzcross = this.nmod;
                    this.x.model = model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
