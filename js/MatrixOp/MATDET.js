/* autogenerated from "macros/MatrixOp/MATDET.sci" */
function MATDET() {
    MATDET.prototype.define = function MATDET() {
        this.model = scicos_model();
        var function_name = "mat_det";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-1]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var label = [sci2exp(1)];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATDET\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,label,this.gr_i);
        return new BasicBlock(this.x);
    }
    MATDET.prototype.details = function MATDET() {
        return this.x;
    }
    MATDET.prototype.get = function MATDET() {
        var options = {
            typ:["Datatype(1=real double  2=Complex)",this.typ],
        }
        return options;
    }
    MATDET.prototype.set = function MATDET() {
        this.typ = inverse(arguments[0]["typ"])
        this.exprs = arguments[0]["exprs"]
        var label = this.graphics.exprs;
        if (size(label,"*")==14) {
            label[9-1] = [];
        }
        while (true) {
            [ok,this.typ,this.exprs] = scicos_getvalue("Set MATDET Block",["Datatype(1=real double  2=Complex)"],list("vec",1),label);
            if (!ok) {
                break;
            }
            if ((this.typ==1)) {
                var function_name = "mat_det";
                var ot = 1;
                var it = 1;
            } else if ((this.typ==2)) {
                var function_name = "matz_det";
                var ot = 2;
                var it = 2;
            } else {
                message("Datatype is not supported");
                var ok = false;
            }
            var in1 = [this.model.in,this.model.in2];
            var out = [this.model.out,this.model.out2];
            var funtyp = 4;
            if (ok) {
                var label = this.exprs;
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
                this.graphics.exprs = new ScilabDouble([label]);
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
