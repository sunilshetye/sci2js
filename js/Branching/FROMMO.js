/* autogenerated from "macros/Branching/FROMMO.sci" */
function FROMMO() {
    FROMMO.prototype.define = function FROMMO() {
        this.model = scicos_model();
        this.model.sim = new ScilabString("frommo");
        this.model.in1 = [];
        this.model.in2 = [];
        this.model.intyp = new ScilabDouble(1);
        this.model.out = new ScilabDouble(-1);
        this.model.out2 = new ScilabDouble(-2);
        this.model.outtyp = new ScilabDouble(-1);
        this.model.ipar = [];
        this.model.opar = list(new ScilabString("A"));
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [false,false];
        mo = modelica();
        mo.model = "frommo";
        mo.outputs = "n";
        exprs = ["A"];
        gr_i = [];
        this.x = standard_define([2,1],this.model,exprs,gr_i);
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    FROMMO.prototype.details = function FROMMO() {
        return this.x;
    }
    FROMMO.prototype.get = function FROMMO() {
        var options = {
            tag:["Tag",this.tag],
        }
        return options;
    }
    FROMMO.prototype.set = function FROMMO() {
        this.tag = arguments[0]["tag"]
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.tag,exprs] = scicos_getvalue("Set parameters",["Tag"],list("str",-1),exprs);
            if (!ok) {
                break;
            }
            if (ok) {
                if (this.model.opar!=list(this.tag)) {
                    needcompile = 4;
                    y = needcompile;
                }
                graphics.exprs = exprs;
                this.model.opar = list(new ScilabDouble(this.tag));
                this.x.model = this.model;
                this.x.graphics = graphics;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
