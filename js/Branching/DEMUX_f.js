/* autogenerated from "macros/Branching/DEMUX_f.sci" */
function DEMUX_f() {
    DEMUX_f.prototype.define = function DEMUX_f() {
        out = 2;
        model = scicos_model();
        model.sim = list("demux",1);
        model.in1 = 0;
        model.out = -transpose([1:out]);
        model.ipar = out;
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,false];
        exprs = string(out);
        gr_i = [];
        x = standard_define([.5,2],model,exprs,gr_i);
    }
    DEMUX_f.prototype.details = function DEMUX_f() {
    }
    DEMUX_f.prototype.get = function DEMUX_f() {
    }
    DEMUX_f.prototype.set = function DEMUX_f() {
        x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
        [ok,out,exprs] = scicos_getvalue("Set DEMUX block parameters",["number of output ports or vector of sizes"],list("vec",-1),exprs);
        if (!ok) {
break;
}
        if (size(out,"*")==1) {
        if (out<2||out>8) {
message("Block must have at least 2 and at most 8 output ports");
        ok = false;
        } else {
        [model,graphics,ok] = check_io(model,graphics,0,-transpose([1:out]),[],[]);
}
        } else {
        if (size(out,"*")<2||size(out,"*")>8||or(out==0)) {
message([["Block must have at least 2 and at most 8 output ports"],["and size 0 is not allowed"]]);
        ok = false;
        } else {
        if (min(out)<0) {
        nin = 0;
        } else {
        nin = sum(out);
}
        [model,graphics,ok] = check_io(model,graphics,nin,out.slice(),[],[]);
        if (ok) {
        out = size(out,"*");
}
}
}
        if (ok) {
        graphics.exprs = exprs;
        model.ipar = out;
        x.graphics = graphics;
        x.model = model;
break;
}
}
    }
}
