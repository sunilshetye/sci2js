/* autogenerated from "macros/Electrical/Diode.sci" */
function Diode() {
    Diode.prototype.define = function Diode() {
        this.Ids = 1.e-6;
        this.Vt = 0.04;
        this.Maxexp = 15;
        this.R = 1.e8;
        model = scicos_model();
        model.rpar = [[this.Ids],[this.Vt],[this.Maxexp],[this.R]];
        model.in1 = 1;
        model.out = 1;
        model.sim = "Diode";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "Diode";
        mo.inputs = "p";
        mo.outputs = "n";
        mo.parameters = list(["Ids","Vt","Maxexp","R"],list(this.Ids,this.Vt,this.Maxexp,this.R));
        model.equations = mo;
        exprs = string([[this.Ids],[this.Vt],[this.Maxexp],[this.R]]);
        gr_i = [];
        this.x = standard_define([2,1],model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    Diode.prototype.details = function Diode() {
        return this.x;
    }
    Diode.prototype.get = function Diode() {
    }
    Diode.prototype.set = function Diode() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.Ids,this.Vt,this.Maxexp,this.R,exprs] = scicos_getvalue("Set Diode block parameter",[["Saturation cuurent (A)"],["Voltage equivalent to temperature (Volt)"],["Max exponent for linear continuation"],["R (ohm)"]],list("vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            model.rpar = [[this.Ids],[this.Vt],[this.Maxexp],[this.R]];
            model.equations.parameters = list(["Ids","Vt","Maxexp","R"],list(this.Ids,this.Vt,this.Maxexp,this.R));
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
