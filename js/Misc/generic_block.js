/* autogenerated from "macros/Misc/generic_block.sci" */
function generic_block() {
    generic_block.prototype.define = function generic_block() {
        this.model = scicos_model();
        this.function_name = "sinblk";
        this.funtyp = 1;
        this.model.sim = list(new ScilabString(this.function_name),new ScilabDouble(this.funtyp));
        this.model.in1 = new ScilabDouble(1);
        this.model.out = new ScilabDouble(1);
        this.model.evtin = [];
        this.model.evtout = [];
        this.model.state = [];
        this.model.dstate = [];
        this.model.rpar = [];
        this.model.ipar = [];
        this.model.blocktype = new ScilabString("c");
        this.model.firing = [];
        this.model.dep_ut = [true,false];
        label = [[this.function_name],[sci2exp(this.funtyp)],[sci2exp(this.model.in1)],[sci2exp(this.model.out)],[sci2exp(this.model.evtin)],[sci2exp(this.model.evtout)],[sci2exp(this.model.state)],[sci2exp(this.model.dstate)],[sci2exp(this.model.rpar)],[sci2exp(this.model.ipar)],[sci2exp(this.model.firing)],["y"],["n"]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,label,gr_i);
        return new BasicBlock(this.x);
    }
    generic_block.prototype.details = function generic_block() {
        return this.x;
    }
    generic_block.prototype.get = function generic_block() {
        var options = {
            function_name:["simulation function",this.function_name],
            funtyp:["function type (0,1,2,..)",this.funtyp],
            i:["input ports sizes",this.i],
            o:["output port sizes",this.o],
            ci:["input event ports sizes",this.ci],
            co:["output events ports sizes",this.co],
            xx:["initial continuous state",this.xx],
            z:["initial discrete state",this.z],
            rpar:["Real parameters vector",this.rpar],
            ipar:["Integer parameters vector",this.ipar],
            auto0:["initial firing vector (<0 for no firing)",this.auto0],
            depu:["direct feedthrough (y or n)",this.depu],
            dept:["time dependence (y or n)",this.dept],
        }
        return options;
    }
    generic_block.prototype.set = function generic_block() {
        this.function_name = arguments[0]["function_name"]
        this.funtyp = parseFloat(arguments[0]["funtyp"])
        this.i = parseFloat(arguments[0]["i"])
        this.o = parseFloat(arguments[0]["o"])
        this.ci = parseFloat(arguments[0]["ci"])
        this.co = parseFloat(arguments[0]["co"])
        this.xx = inverse(arguments[0]["xx"])
        this.z = inverse(arguments[0]["z"])
        this.rpar = inverse(arguments[0]["rpar"])
        this.ipar = parseFloat(arguments[0]["ipar"])
        this.auto0 = arguments[0]["auto0"]
        this.depu = parseBoolean(arguments[0]["depu"])
        this.dept = parseBoolean(arguments[0]["dept"])
        this.lab = arguments[0]["lab"]
        this.x = arg1;
        this.model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.function_name,this.funtyp,this.i,this.o,this.ci,this.co,this.xx,this.z,this.rpar,this.ipar,this.auto0,this.depu,this.dept,this.lab] = scicos_getvalue("Set GENERIC block parameters",["simulation function","function type (0,1,2,..)","input ports sizes","output port sizes","input event ports sizes","output events ports sizes","initial continuous state","initial discrete state","Real parameters vector","Integer parameters vector","initial firing vector (<0 for no firing)","direct feedthrough (y or n)","time dependence (y or n)"],list("str",1,"vec",1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec","sum(%6)","str",1,"str",1),label);
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
                [model,graphics,ok] = check_io(this.model,graphics,this.i,this.o,this.ci,this.co);
            }
            if (ok) {
                if (this.funtyp==3) {
                    needcompile = 4;
                }
                this.model.sim = list(new ScilabDouble(this.function_name),new ScilabDouble(this.funtyp));
                this.model.state = this.xx;
                this.model.dstate = this.z;
                this.model.rpar = this.rpar;
                this.model.ipar = new ScilabDouble(this.ipar);
                this.model.firing = new ScilabDouble(this.auto0);
                this.model.dep_ut = dep_ut;
                arg1.model = this.model;
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
