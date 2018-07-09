/* autogenerated from "macros/Linear/TIME_DELAY.sci" */
function TIME_DELAY() {
    TIME_DELAY.prototype.define = function TIME_DELAY() {
        nin = 1;
        this.T = 1;
        this.init = 0;
        this.N = 1024;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString("time_delay"),new ScilabDouble(4));
        this.model.in1 = [nin];
        this.model.out = new ScilabDouble(nin);
        this.model.rpar = [this.T,this.init];
        this.model.ipar = new ScilabDouble(this.N);
        this.model.blocktype = new ScilabString("x");
        this.model.dep_ut = [false,true];
        exprs = [[string(this.T)],[string(this.init)],[string(this.N)]];
        gr_i = [];
        this.x = standard_define([3.5,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    TIME_DELAY.prototype.details = function TIME_DELAY() {
        return this.x;
    }
    TIME_DELAY.prototype.get = function TIME_DELAY() {
        var options = {
            T:["Delay",this.T],
            init:["initial input",this.init],
            N:["Buffer size",this.N],
        }
        return options;
    }
    TIME_DELAY.prototype.set = function TIME_DELAY() {
        this.T = parseFloat(arguments[0]["T"])
        this.init = parseFloat(arguments[0]["init"])
        this.N = parseFloat(arguments[0]["N"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        nin = this.model.in1[1-1];
        while (true) {
            [ok,this.T,this.init,this.N,exprs] = scicos_getvalue("Set delay parameters",["Delay","initial input","Buffer size"],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.N<2) {
                message("Buffer must be larger than 2");
                ok = false;
            }
            if (this.T<=0) {
                message("Delay must be positive");
                ok = false;
            }
            if (ok) {
                [model,graphics,ok] = check_io(this.model,graphics,[-1],-1,[],[]);
            }
            if (ok) {
                graphics.exprs = exprs;
                this.model.rpar = [[this.T],[this.init]];
                this.model.ipar = new ScilabDouble(this.N);
                this.model.dep_ut = [false,true];
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
