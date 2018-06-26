/* autogenerated from "macros/Misc/fortran_block.sci" */
function fortran_block() {
    fortran_block.prototype.define = function fortran_block() {
        model = scicos_model();
        model.sim = list(" ",1001);
        model.in1 = 1;
        model.out = 1;
        model.evtin = [];
        model.evtout = [];
        model.state = [];
        model.dstate = [];
        model.rpar = [];
        model.ipar = 0;
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,false];
        this.funam = "forty";
        label = list([[sci2exp(model.in1)],[sci2exp(model.out)],[strcat(sci2exp(model.rpar))],[this.funam]],list([]));
        gr_i = [];
        this.x = standard_define([4,2],model,label,gr_i);
        return new BasicBlock(this.x);
    }
    fortran_block.prototype.details = function fortran_block() {
        return this.x;
    }
    fortran_block.prototype.get = function fortran_block() {
    }
    fortran_block.prototype.set = function fortran_block() {
        this.x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        while (true) {
            [ok,this.i,this.o,this.rpar,this.funam,this.lab] = scicos_getvalue("Set fortran_block parameters",[["input ports sizes"],["output port sizes"],["System parameters vector"],["function name"]],list("vec",-1,"vec",-1,"vec",-1,"str",-1),label[1-1]);
            if (!ok) {
                break;
            }
            if (this.funam==" ") {
                break;
            }
            label[1-1] = this.lab;
            this.rpar = this.rpar.slice();
            this.i = int(this.i.slice());
            ni = size(this.i,1);
            this.o = int(this.o.slice());
            no = size(this.o,1);
            tt = label[2-1];
            if (model.sim[1-1]!=this.funam||size(model.in1,"*")!=size(this.i,"*")||size(model.out,"*")!=size(this.o,"*")) {
                tt = [];
            }
            [ok,tt] = FORTR(this.funam,tt,this.i,this.o);
            if (!ok) {
                break;
            }
            [model,graphics,ok] = check_io(model,graphics,this.i,this.o,[],[]);
            if (ok) {
                model.sim[1-1] = this.funam;
                model.rpar = this.rpar;
                label[2-1] = tt;
                this.x.model = model;
                graphics.exprs = label;
                this.x.graphics = graphics;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
