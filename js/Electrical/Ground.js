/* autogenerated from "macros/Electrical/Ground.sci" */
function Ground() {
    Ground.prototype.define = function Ground() {
        model = scicos_model();
        model.in1 = [1];
        model.out = [];
        model.sim = "Ground";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "Ground";
        mo.inputs = "p";
        model.equations = mo;
        exprs = "";
        gr_i = [];
        this.x = standard_define([1,1],model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    Ground.prototype.details = function Ground() {
        return this.x;
    }
    Ground.prototype.get = function Ground() {
    }
    Ground.prototype.set = function Ground() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
