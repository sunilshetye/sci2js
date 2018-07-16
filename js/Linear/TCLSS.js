/* autogenerated from "macros/Linear/TCLSS.sci" */
function TCLSS() {
    TCLSS.prototype.define = function TCLSS() {
        this.x0 = 0;
        this.A = 0;
        this.B = 1;
        this.C = 1;
        this.D = 0;
        var in1 = 1;
        var nx = size(this.x0,"*");
        var out = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["tcslti4"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([in1],[nx]);
        this.model.out = new ScilabDouble([out]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.state = new ScilabDouble([this.x0]);
        this.model.rpar = new ScilabDouble([this.A.slice()],[this.B.slice()],[this.C.slice()],[this.D.slice()]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        this.exprs = [[strcat(sci2exp(this.A))],[strcat(sci2exp(this.B))],[strcat(sci2exp(this.C))],[strcat(sci2exp(this.D))],[strcat(sci2exp(this.x0))]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TCLSS\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    TCLSS.prototype.details = function TCLSS() {
        return this.x;
    }
    TCLSS.prototype.get = function TCLSS() {
        var options = {
            A:["A matrix",this.A],
            B:["B matrix",this.B],
            C:["C matrix",this.C],
            D:["D matrix",this.D],
            x0:["Initial state",this.x0],
        }
        return options;
    }
    TCLSS.prototype.set = function TCLSS() {
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==7) {
            this.exprs = this.exprs[[1:4,7]-1];
        }
        while (true) {
            var ok = true;
            this.A = parseFloat(arguments[0]["A"]);
            this.B = parseFloat(arguments[0]["B"]);
            this.C = parseFloat(arguments[0]["C"]);
            this.D = parseFloat(arguments[0]["D"]);
            this.x0 = parseFloat(arguments[0]["x0"]);
            this.exprs = parseFloat(arguments[0]["exprs"]);
            if (!ok) {
                break;
            }
            var out = size(this.C,1);
            if (out==0) {
                var out = [];
            }
            var in1 = size(this.B,2);
            if (in1==0) {
                var in1 = [];
            }
            var tmpvar0 = size(this.A);
            var ms = tmpvar0[0];
            var ns = tmpvar0[1];
            if (ms!=ns) {
                message("A matrix must be square");
            } else {
                var tmpvar1 = check_io(this.model,this.graphics,[[in1],[ms]],out,1,[]);
                this.model = tmpvar1[0];
                this.graphics = tmpvar1[1];
                var ok = tmpvar1[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([this.exprs]);
                    var rpar = [[this.A.slice()],[this.B.slice()],[this.C.slice()],[this.D.slice()]];
                    if (this.D!=[]) {
                        if (norm(this.D,1)!=0) {
                            var mmm = [true,true];
                        } else {
                            var mmm = [false,true];
                        }
                        if (or(this.model.dep_ut!=mmm)) {
                            this.model.dep_ut = new ScilabBoolean(mmm);
                        }
                    } else {
                        this.model.dep_ut = new ScilabBoolean([false,true]);
                    }
                    this.model.state = new ScilabDouble(this.x0.slice());
                    this.model.rpar = new ScilabDouble(rpar);
                    if (this.D!=[]) {
                        this.model.sim = list(new ScilabString(["tcslti4"]), new ScilabDouble([4]));
                    } else {
                        this.model.sim = list(new ScilabString(["tcsltj4"]), new ScilabDouble([4]));
                    }
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
