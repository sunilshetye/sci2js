/* autogenerated from "macros/MatrixOp/MATCATH.sci" */
function MATCATH() {
    MATCATH.prototype.define = function MATCATH() {
        this.model = scicos_model();
        var function_name = "mat_cath";
        var funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in = new ScilabDouble([-1],[-1]);
        this.model.in2 = new ScilabDouble([-2],[-3]);
        this.model.intyp = new ScilabDouble([1,1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([0]);
        this.model.outtyp = new ScilabDouble([-1]);
        this.model.evtin = new ScilabDouble([]);
        this.model.evtout = new ScilabDouble([]);
        this.model.state = new ScilabDouble([]);
        this.model.dstate = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([]);
        this.model.ipar = new ScilabDouble([]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var label = [sci2exp(2)];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MATCATH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,3]),this.model,label,this.gr_i);
        return new BasicBlock(this.x);
    }
    MATCATH.prototype.details = function MATCATH() {
        return this.x;
    }
    MATCATH.prototype.get = function MATCATH() {
        var options = {
            nin:["Number of input",this.nin],
        }
        return options;
    }
    MATCATH.prototype.set = function MATCATH() {
        this.nin = arguments[0]["nin"]
        this.lab = arguments[0]["lab"]
        var label = this.graphics.exprs;
        if (size(label,"*")>1) {
            var label = "size(evstr("+label[2-1]+"),\'*\')";
        }
        while (true) {
            [ok,this.nin,this.lab] = scicos_getvalue("Set MATCATH block parameters",["Number of input"],list("vec",1),label);
            if (!ok) {
                break;
            }
            var label = this.lab;
            var in1 = [-1*(ones(this.nin,1)),-(transpose([2:this.nin+1]))];
            var out = [-1,0];
            var it = -1*(ones(this.nin,1));
            var ot = -1;
            var tmpvar0 = set_io(this.model,this.graphics,list(in1,it),list(out,ot),[],[]);
            this.model = tmpvar0[0];
            this.graphics = tmpvar0[1];
            var ok = tmpvar0[2];
            if (ok) {
                var funtyp = 4;
                this.model.sim = list(new ScilabString(["mat_cath"]), new ScilabDouble([funtyp]));
                this.graphics.exprs = new ScilabDouble([label]);
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
