/* autogenerated from "macros/Events/EVTGEN_f.sci" */
function EVTGEN_f() {
    EVTGEN_f.prototype.define = function EVTGEN_f() {
        tt = 0;
        model = scicos_model();
        model.sim = "trash";
        model.evtout = 1;
        model.blocktype = "d";
        model.firing = tt;
        model.dep_ut = [false,false];
        exprs = string(tt);
        gr_i = [];
        x = standard_define([3,2],model,exprs,gr_i);
    }
    EVTGEN_f.prototype.details = function EVTGEN_f() {
    }
    EVTGEN_f.prototype.get = function EVTGEN_f() {
    }
    EVTGEN_f.prototype.set = function EVTGEN_f() {
        x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
        [ok,tt,exprs] = scicos_getvalue("Set Event time",["Event Time"],list("vec",1),exprs);
        if (!ok) {
break;
}
        graphics.exprs = exprs;
        if (model.firing!=tt) {
        model.firing = tt;
}
        x.graphics = graphics;
        x.model = model;
break;
}
    }
}
