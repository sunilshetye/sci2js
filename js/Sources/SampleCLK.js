/* autogenerated from "macros/Sources/SampleCLK.sci" */
function SampleCLK() {
    SampleCLK.prototype.define = function SampleCLK() {
        model = scicos_model();
        model.sim = "sampleclk";
        model.evtout = 1;
        model.rpar = [1,0];
        model.blocktype = "d";
        model.firing = -1;
        model.dep_ut = [false,false];
        exprs = [[sci2exp(1)],[sci2exp(0)]];
        this.x = standard_define([2,2],model,exprs," ");
        return new BasicBlock(this.x);
    }
    SampleCLK.prototype.details = function SampleCLK() {
        return this.x;
    }
    SampleCLK.prototype.get = function SampleCLK() {
        var options = {
            frequ:["Sample time",this.frequ],
            offset:["Offset",this.offset],
        }
        return options;
    }
    SampleCLK.prototype.set = function SampleCLK() {
        this.frequ = arguments[0]["frequ"]
        this.offset = arguments[0]["offset"]
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        while (true) {
            [ok,this.frequ,this.offset,exprs] = scicos_getvalue("Set block parameters",["Sample time","Offset"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (this.frequ<0) {
                message("Frequency must be a positif number");
                ok = false;
            }
            if (abs(this.offset)>this.frequ) {
                message("The |Offset| must be less than the Frequency");
                ok = false;
            }
            if (ok) {
                if (or(model.rpar.slice()!=[[this.frequ],[this.offset]])) {
                    needcompile = 4;
                    y = needcompile;
                }
                model.rpar = [[this.frequ],[this.offset]];
                model.evtout = 1;
                model.firing = -1;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
