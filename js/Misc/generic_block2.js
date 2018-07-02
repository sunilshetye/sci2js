/* autogenerated from "macros/Misc/generic_block2.sci" */
function generic_block2() {
    generic_block2.prototype.define = function generic_block2() {
        model = scicos_model();
        this.function_name = "sinblk";
        this.funtyp = 1;
        model.sim = list(this.function_name,this.funtyp);
        model.in1 = 1;
        model.out = 1;
        model.evtin = [];
        model.evtout = [];
        model.state = [];
        model.dstate = [];
        model.rpar = [];
        model.ipar = [];
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,false];
        label = [[this.function_name],[sci2exp(this.funtyp)],[sci2exp(model.in1)],[sci2exp(model.out)],[sci2exp(model.evtin)],[sci2exp(model.evtout)],[sci2exp(model.state)],[sci2exp(model.dstate)],[sci2exp(model.rpar)],[sci2exp(model.ipar)],[sci2exp(model.nmode)],[sci2exp(model.nzcross)],[sci2exp(model.firing)],["y"],["n"]];
        gr_i = [];
        this.x = standard_define([2,2],model,label,gr_i);
        return new BasicBlock(this.x);
    }
    generic_block2.prototype.details = function generic_block2() {
        return this.x;
    }
    generic_block2.prototype.get = function generic_block2() {
    }
    generic_block2.prototype.set = function generic_block2() {
        this.x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.function_name,this.funtyp,this.i,this.o,this.ci,this.co,this.xx,this.z,this.rpar,this.ipar,this.nmode,this.nzcr,this.auto0,this.depu,this.dept,this.lab] = scicos_getvalue("Set GENERIC block parameters",["simulation function","function type (0,1,2,..)","input ports sizes","output port sizes","input event ports sizes","output events ports sizes","initial continuous state","initial discrete state","Real parameters vector","Integer parameters vector","number of modes","number of zero_crossings","initial firing vector (<0 for no firing)","direct feedthrough (y or n)","time dependence (y or n)"],list("str",1,"vec",1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",1,"vec",1,"vec","sum(%6)","str",1,"str",1),label);
            if (!ok) {
                break;
            }
            label = this.lab;
            this.function_name = stripblanks(this.function_name);
            this.xx = this.xx.slice();
            this.z = this.z.slice();
            this.rpar = this.rpar.slice();
            this.ipar = int(this.ipar.slice());
            this.i = int(this.i.slice());
            this.o = int(this.o.slice());
            this.ci = int(this.ci.slice());
            this.co = int(this.co.slice());
            this.funtyp = int(this.funtyp);
            if (this.funtyp<0) {
                message("function type cannot be negative");
                ok = false;
            }
            if ([[this.ci],[this.co]]!=[]) {
                if (max([[this.ci],[this.co]])>1) {
                    message("vector event links not supported");
                    ok = false;
                }
            }
            this.depu = stripblanks(this.depu);
            if (part(this.depu,1)=="y") {
                this.depu = true;
            } else {
                this.depu = false;
            }
            this.dept = stripblanks(this.dept);
            if (part(this.dept,1)=="y") {
                this.dept = true;
            } else {
                this.dept = false;
            }
            dep_ut = [this.depu,this.dept];
            if (ok) {
                [model,graphics,ok] = check_io(model,graphics,this.i,this.o,this.ci,this.co);
            }
            if (ok) {
                if (this.funtyp==3) {
                    needcompile = 4;
                }
                model.sim = list(this.function_name,this.funtyp);
                model.state = this.xx;
                model.dstate = this.z;
                model.rpar = this.rpar;
                model.ipar = this.ipar;
                model.firing = this.auto0;
                model.nzcross = this.nzcr;
                model.nmode = this.nmode;
                model.dep_ut = dep_ut;
                arg1.model = model;
                graphics.exprs = label;
                arg1.graphics = graphics;
                this.x = arg1;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
