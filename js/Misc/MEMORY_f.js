/* autogenerated from "macros/Misc/MEMORY_f.sci" */
function MEMORY_f() {
    MEMORY_f.prototype.define = function MEMORY_f() {
        var z = 0;
        var in1 = 1;
        this.exprs = [[string(z)],[string(1)]];
        this.model = scicos_model();
        this.model.sim = new ScilabString(["memo"]);
        this.model.in = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([in1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([0]);
        this.model.rpar = new ScilabDouble([z]);
        this.model.blocktype = new ScilabString(["m"]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MEMORY_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,this.exprs,this.gr_i);
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
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.a,this.inh,this.exprs] = scicos_getvalue("Set memory block parameters",["initial condition","Inherit (1: no, 0: yes)"],list("vec",-1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.inh==0) {
                this.inh = [];
            } else {
                this.inh = 1;
            }
            var tmpvar0 = check_io(this.model,this.graphics,-1,-1,this.inh,[]);
            this.model = tmpvar0[0];
            this.graphics = tmpvar0[1];
            var ok = tmpvar0[2];
            var out = size(this.a,"*");
            if (out==0) {
                var ok = false;
                messagebox("Initial condition empty","modal","error");
            }
            var in1 = out;
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.rpar = new ScilabDouble([this.a]);
                this.model.in = new ScilabDouble([in1]);
                this.model.out = new ScilabDouble([out]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
