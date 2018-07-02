/* autogenerated from "macros/Misc/c_block.sci" */
function c_block() {
    c_block.prototype.define = function c_block() {
        in1 = 1;
        out = 1;
        clkin = [];
        clkout = [];
        x0 = [];
        z0 = [];
        typ = "c";
        auto = [];
        this.rpar = [];
        this.funam = "toto";
        model = scicos_model();
        model.sim = list(" ",2001);
        model.in1 = in1;
        model.out = out;
        model.evtin = clkin;
        model.evtout = clkout;
        model.state = x0;
        model.dstate = z0;
        model.rpar = this.rpar;
        model.ipar = 0;
        model.blocktype = typ;
        model.firing = auto;
        model.dep_ut = [true,false];
        label = list([[sci2exp(in1)],[sci2exp(out)],[strcat(sci2exp(this.rpar))],[this.funam]],list([]));
        gr_i = [];
        this.x = standard_define([3,2],model,label,gr_i);
        return new BasicBlock(this.x);
    }
    c_block.prototype.details = function c_block() {
        return this.x;
    }
    c_block.prototype.get = function c_block() {
    }
    c_block.prototype.set = function c_block() {
        this.x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        while (true) {
            [ok,this.i,this.o,this.rpar,this.funam,this.lab] = scicos_getvalue("Set C_block parameters",["input ports sizes","output port sizes","System parameters vector","function name"],list("vec",-1,"vec",-1,"vec",-1,"str",-1),label[1-1]);
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
            [ok,tt] = CFORTR(this.funam,tt,this.i,this.o);
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
