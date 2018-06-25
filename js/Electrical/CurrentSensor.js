/* autogenerated from "macros/Electrical/CurrentSensor.sci" */
function CurrentSensor() {
    CurrentSensor.prototype.define = function CurrentSensor() {
        model = scicos_model();
        model.in1 = 1;
        model.out = [[1],[1]];
        model.sim = "CurrentSensor";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "CurrentSensor";
        mo.inputs = "p";
        mo.outputs = [["n"],["i"]];
        model.equations = mo;
        exprs = [];
        gr_i = [];
        x = standard_define([2,2],model,exprs,list(gr_i,0));
        x.graphics.in_implicit = ["I"];
        x.graphics.out_implicit = [["I"],["E"]];
    }
    CurrentSensor.prototype.details = function CurrentSensor() {
    }
    CurrentSensor.prototype.get = function CurrentSensor() {
    }
    CurrentSensor.prototype.set = function CurrentSensor() {
        x = arg1;
    }
}
