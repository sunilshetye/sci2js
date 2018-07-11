/* autogenerated from "macros/MatrixOp/MATCATH.sci" */
function MATCATH() {
    MATCATH.prototype.define = function MATCATH() {
        this.model = scicos_model();
        function_name = "mat_cath";
        funtyp = 4;
        this.model.sim = list(new ScilabString([function_name]), new ScilabDouble([funtyp]));
        this.model.in1 = new ScilabDouble([-1],[-1]);
        this.model.in2 = new ScilabDouble([-2],[-3]);
        this.model.intyp = [1,1];
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([0]);
        this.model.outtyp = new ScilabDouble([-1]);
        this.model.evtin = [];
        this.model.evtout = [];
        this.model.state = [];
        this.model.dstate = [];
        this.model.rpar = [];
        this.model.ipar = [];
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = [];
        this.model.dep_ut = [true,false];
        label = [sci2exp(2)];
        gr_i = [];
        this.x = standard_define([2,3],this.model,label,gr_i);
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
        this.x = arg1;
        this.model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")>1) {
            label = "size(evstr("+label[2-1]+"),\'*\')";
        }
        while (true) {
            [ok,this.nin,this.lab] = scicos_getvalue("Set MATCATH block parameters",["Number of input"],list("vec",1),label);
            if (!ok) {
                break;
            }
            label = this.lab;
            in1 = [-1*(ones(this.nin,1)),-(transpose([2:this.nin+1]))];
            out = [-1,0];
            it = -1*(ones(this.nin,1));
            ot = -1;
            [this.model,graphics,ok] = set_io(this.model,graphics,list(in1,it),list(out,ot),[],[]);
            if (ok) {
                funtyp = 4;
                this.model.sim = list(new ScilabString(["mat_cath"]), new ScilabDouble([funtyp]));
                graphics.exprs = label;
                arg1.graphics = graphics;
                arg1.model = this.model;
                this.x = arg1;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
