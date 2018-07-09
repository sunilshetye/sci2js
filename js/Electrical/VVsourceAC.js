/* autogenerated from "macros/Electrical/VVsourceAC.sci" */
function VVsourceAC() {
    VVsourceAC.prototype.define = function VVsourceAC() {
        this.model = scicos_model();
        this.model.in1 = [[1],[1]];
        this.model.out = [1];
        VA = 220;
        this.FR = 50;
        this.model.rpar = [this.FR];
        this.model.sim = new ScilabString("VVsourceAC");
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "VVsourceAC";
        mo.inputs = ["p","VA"];
        mo.outputs = "n";
        mo.parameters = list(["f"],list(this.FR));
        this.model.equations = new ScilabDouble(mo);
        exprs = [string(this.FR)];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I","E"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    VVsourceAC.prototype.details = function VVsourceAC() {
        return this.x;
    }
    VVsourceAC.prototype.get = function VVsourceAC() {
        var options = {
            FR:["Frequency (Hz)",this.FR],
        }
        return options;
    }
    VVsourceAC.prototype.set = function VVsourceAC() {
        this.FR = parseFloat(arguments[0]["FR"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.FR,exprs] = scicos_getvalue("Set voltage source parameter",["Frequency (Hz)"],list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            this.model.rpar = [this.FR];
            this.model.equations.parameters[2] = list(new ScilabDouble(this.FR));
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
