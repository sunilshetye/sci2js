/* autogenerated from "macros/Electrical/VVsourceAC.sci" */
function VVsourceAC() {
    VVsourceAC.prototype.define = function VVsourceAC() {
        model = scicos_model();
        model.in1 = [[1],[1]];
        model.out = [1];
        VA = 220;
        this.FR = 50;
        model.rpar = [this.FR];
        model.sim = "VVsourceAC";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "VVsourceAC";
        mo.inputs = ["p","VA"];
        mo.outputs = "n";
        mo.parameters = list(["f"],list(this.FR));
        model.equations = mo;
        exprs = [string(this.FR)];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,list(gr_i,0));
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
        model = arg1.model;
        while (true) {
            [ok,this.FR,exprs] = scicos_getvalue("Set voltage source parameter",["Frequency (Hz)"],list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            model.rpar = [this.FR];
            model.equations.parameters[2-1] = list(this.FR);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
