/* autogenerated from "macros/Electrical/Switch.sci" */
function Switch() {
    Switch.prototype.define = function Switch() {
        this.model = scicos_model();
        this.Ron = 0.01;
        this.Roff = 1e5;
        var S = [["Ron"],["Roff"]];
        var Z = eval(S);
        this.model.sim = new ScilabString(["Switch"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var mo = modelica();
        mo.model = this.model.sim;
        mo.inputs = [["p"],["inp"]];
        mo.outputs = "n";
        mo.parameters = list(S,Z);
        this.model.equations = new ScilabDouble([mo]);
        this.model.in = new ScilabDouble([ones(size(mo.inputs,"*"),1)]);
        this.model.out = new ScilabDouble([ones(size(mo.outputs,"*"),1)]);
        this.model.rpar = new ScilabDouble([Z]);
        this.exprs = string(Z);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"Switch\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,this.exprs,list(this.gr_i,0));
        this.x.graphics.in_implicit = [["I"],["E"]];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    Switch.prototype.details = function Switch() {
        return this.x;
    }
    Switch.prototype.get = function Switch() {
        var options = {
            Ron:["Resistance in On state (Ohm)",this.Ron],
            Roff:["Resistance in Off state (Ohm)",this.Roff],
        }
        return options;
    }
    Switch.prototype.set = function Switch() {
        this.Ron = parseFloat(arguments[0]["Ron"])
        this.Roff = parseFloat(arguments[0]["Roff"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.Ron,this.Roff,this.exprs] = scicos_getvalue("Set non-ideal electrical switch parameters",["Resistance in On state (Ohm)","Resistance in Off state (Ohm)"],list("vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            this.model.equations.parameters[2-1] = list(new ScilabDouble([this.Ron]), new ScilabDouble([this.Roff]));
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
