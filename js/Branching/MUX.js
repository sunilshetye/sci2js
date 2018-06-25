/* autogenerated from "macros/Branching/MUX.sci" */
function MUX() {
    MUX.prototype.define = function MUX() {
        in1 = 2;
        model = scicos_model();
        model.sim = list("multiplex",4);
        model.in1 = -transpose([1:in1]);
        model.out = 0;
        model.ipar = in1;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = string(in1);
        gr_i = [];
        x = standard_define([.5,2],model,exprs,gr_i);
    }
    MUX.prototype.details = function MUX() {
    }
    MUX.prototype.get = function MUX() {
    }
    MUX.prototype.set = function MUX() {
        x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
        [ok,in1,exprs] = scicos_getvalue("Set MUX block parameters","number of input ports or vector of sizes",list("intvec",-1),exprs);
        if (!ok) {
break;
}
        if (size(in1,"*")==1) {
        if (in1<2||in1>31) {
message("Block must have at least two input ports and at most 31");
        ok = false;
        } else {
        [model,graphics,ok] = check_io(model,graphics,-transpose([1:in1]),0,[],[]);
}
        } else {
        if (size(in1,"*")<2||or(in1==0)||size(in1,"*")>31) {
message([["Block must have at least two input ports"],["and at most 31. Size 0 is not allowed. "]]);
        ok = false;
        } else {
        if (min(in1)<0) {
        nout = 0;
        } else {
        nout = sum(in1);
}
        [model,graphics,ok] = check_io(model,graphics,in1.slice(),nout,[],[]);
        if (ok) {
        in1 = size(in1,"*");
}
}
}
        if (ok) {
        graphics.exprs = exprs;
        model.ipar = in1;
        x.graphics = graphics;
        x.model = model;
break;
}
}
    }
}
