/* autogenerated from "macros/Branching/SELECT_f.sci" */
function SELECT_f() {
    SELECT_f.prototype.define = function SELECT_f() {
        this.z0 = 0;
        var in1 = [[-1],[-1]];
        this.nin = 2;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["selector"]), new ScilabDouble([2]));
        this.model.in = new ScilabDouble(in1);
        this.model.out = new ScilabDouble([-1]);
        this.model.evtin = new ScilabDouble([ones(in1)]);
        this.model.dstate = new ScilabDouble([this.z0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [[string(this.nin)],[string(this.z0+1)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SELECT_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    SELECT_f.prototype.details = function SELECT_f() {
        return this.x;
    }
    SELECT_f.prototype.get = function SELECT_f() {
        var options = {
            nin:["number of inputs",this.nin],
            z0:["initial connected input",this.z0],
        }
        return options;
    }
    SELECT_f.prototype.set = function SELECT_f() {
        this.nin = parseFloat(arguments[0]["nin"])
        this.z0 = parseFloat(arguments[0]["z0"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.nin,this.z0,this.exprs] = scicos_getvalue("Set parameters",["number of inputs","initial connected input"],list("vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.z0>this.nin||this.z0<=0) {
                message("initial connected input is not a valid input port number");
            } else {
                var tmpvar0 = check_io(this.model,this.graphics,-ones(this.nin,1),-1,ones(this.nin,1),[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([this.exprs]);
                    this.model.dstate = new ScilabDouble([this.z0-1]);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
