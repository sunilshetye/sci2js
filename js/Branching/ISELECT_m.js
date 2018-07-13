/* autogenerated from "macros/Branching/ISELECT_m.sci" */
function ISELECT_m() {
    ISELECT_m.prototype.define = function ISELECT_m() {
        this.z0 = 1;
        this.nout = 2;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["selector_m"]), new ScilabDouble([4]));
        this.model.out = new ScilabDouble([-1],[-1]);
        this.model.out2 = new ScilabDouble([-2],[-2]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([]);
        this.model.firing = new ScilabDouble([]);
        this.model.evtin = new ScilabDouble([ones(this.nout,1)]);
        this.model.dstate = new ScilabDouble([this.z0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        this.exprs = [[sci2exp(1)],[sci2exp(this.nout)],[sci2exp(this.z0)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ISELECT_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    ISELECT_m.prototype.details = function ISELECT_m() {
        return this.x;
    }
    ISELECT_m.prototype.get = function ISELECT_m() {
        var options = {
            typ:["Datatype(1= real double  2=Complex 3=int32 ...)",this.typ],
            nout:["number of outputs",this.nout],
            z0:["initial connected output",this.z0],
        }
        return options;
    }
    ISELECT_m.prototype.set = function ISELECT_m() {
        this.typ = inverse(arguments[0]["typ"])
        this.nout = parseFloat(arguments[0]["nout"])
        this.z0 = parseFloat(arguments[0]["z0"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.typ,this.nout,this.z0,this.exprs] = scicos_getvalue("Set parameters",["Datatype(1= real double  2=Complex 3=int32 ...)","number of outputs","initial connected output"],list("vec",1,"vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.z0>this.nout||this.z0<=0) {
                message("initial connected input is not a valid input port number");
            } else if (((this.typ<1)||(this.typ>8))) {
                message("Datatype is not supported");
                var ok = false;
            } else {
                var it = this.typ;
                var ot = this.typ*ones(1,this.nout);
                if (ok) {
                    var out = [-ones(this.nout,1),-2*ones(this.nout,1)];
                    var in1 = [-1,-2];
                    var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),ones(this.nout,1),[]);
                    this.model = tmpvar0[0];
                    this.graphics = tmpvar0[1];
                    var ok = tmpvar0[2];
                    if (ok) {
                        this.graphics.exprs = new ScilabDouble([this.exprs]);
                        this.model.dstate = new ScilabDouble([this.z0]);
                        this.x.graphics = this.graphics;
                        this.x.model = this.model;
                        break;
                    }
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
