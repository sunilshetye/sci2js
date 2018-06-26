/* autogenerated from "macros/Electrical/PotentialSensor.sci" */
function PotentialSensor() {
    PotentialSensor.prototype.define = function PotentialSensor() {
        model = scicos_model();
        model.in1 = [1];
        model.out = [1];
        model.rpar = [];
        model.sim = "PotentialSensor";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "PotentialSensor";
        mo.inputs = "p";
        mo.outputs = ["v"];
        model.equations = mo;
        gr_i = [];
        this.x = standard_define([2,2],model,"",list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["E"];
        return new BasicBlock(this.x);
    }
    PotentialSensor.prototype.details = function PotentialSensor() {
        return this.x;
    }
    PotentialSensor.prototype.get = function PotentialSensor() {
    }
    PotentialSensor.prototype.set = function PotentialSensor() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
