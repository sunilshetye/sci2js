/* autogenerated from "macros/Electrical/VsourceAC.sci" */
function VsourceAC() {
    VsourceAC.prototype.define = function VsourceAC() {
        this.model = scicos_model();
        this.model.in1 = [1];
        this.model.out = [1];
        this.VA = 220;
        this.FR = 50;
        this.model.rpar = [[this.VA],[this.FR]];
        this.model.sim = new ScilabString("VsourceAC");
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "VsourceAC";
        mo.inputs = "p";
        mo.outputs = "n";
        mo.parameters = list([["VA"],["f"]],list(this.VA,this.FR));
        this.model.equations = new ScilabDouble(mo);
        exprs = [[string(this.VA)],[string(this.FR)]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    VsourceAC.prototype.details = function VsourceAC() {
        return this.x;
    }
    VsourceAC.prototype.get = function VsourceAC() {
        var options = {
            VA:["Amplitude (Volt)",this.VA],
            FR:["Frequency (Hz)",this.FR],
        }
        return options;
    }
    VsourceAC.prototype.set = function VsourceAC() {
        this.VA = parseFloat(arguments[0]["VA"])
        this.FR = parseFloat(arguments[0]["FR"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.VA,this.FR,exprs] = scicos_getvalue("Set voltage source parameter",["Amplitude (Volt)","Frequency (Hz)"],list("vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            this.model.rpar = [[this.VA],[this.FR]];
            this.model.equations.parameters[2] = list(new ScilabDouble(this.VA),new ScilabDouble(this.FR));
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
