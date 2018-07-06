/* autogenerated from "macros/Branching/DEMUX_f.sci" */
function DEMUX_f() {
    DEMUX_f.prototype.define = function DEMUX_f() {
        this.out = 2;
        model = scicos_model();
        model.sim = list("demux",1);
        model.in1 = 0;
        model.out = -transpose([1:this.out]);
        model.ipar = this.out;
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,false];
        exprs = string(this.out);
        gr_i = [];
        this.x = standard_define([.5,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DEMUX_f.prototype.details = function DEMUX_f() {
        return this.x;
    }
    DEMUX_f.prototype.get = function DEMUX_f() {
        var options = {
            out:["number of output ports or vector of sizes",this.out],
        }
        return options;
    }
    DEMUX_f.prototype.set = function DEMUX_f() {
        this.out = parseFloat(arguments[0]["out"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.out,exprs] = scicos_getvalue("Set DEMUX block parameters",["number of output ports or vector of sizes"],list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            if (size(this.out,"*")==1) {
                if (this.out<2||this.out>8) {
                    message("Block must have at least 2 and at most 8 output ports");
                    ok = false;
                } else {
                    [model,graphics,ok] = check_io(model,graphics,0,-transpose([1:this.out]),[],[]);
                }
            } else {
                if (size(this.out,"*")<2||size(this.out,"*")>8||or(this.out==0)) {
                    message([["Block must have at least 2 and at most 8 output ports"],["and size 0 is not allowed"]]);
                    ok = false;
                } else {
                    if (min(this.out)<0) {
                        nin = 0;
                    } else {
                        nin = sum(this.out);
                    }
                    [model,graphics,ok] = check_io(model,graphics,nin,this.out.slice(),[],[]);
                    if (ok) {
                        this.out = size(this.out,"*");
                    }
                }
            }
            if (ok) {
                graphics.exprs = exprs;
                model.ipar = this.out;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
