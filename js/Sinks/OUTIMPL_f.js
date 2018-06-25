/* autogenerated from "macros/Sinks/OUTIMPL_f.sci" */
function OUTIMPL_f() {
    OUTIMPL_f.prototype.define = function OUTIMPL_f() {
        model = scicos_model();
        model.in1 = [-1];
        model.in2 = [1];
        prt = 1;
        model.sim = "outimpl";
        model.ipar = [1];
        model.blocktype = "c";
        model.dep_ut = [false,false];
        mo = modelica();
        mo.model = "PORT";
        mo.inputs = "n";
        model.equations = mo;
        exprs = "1";
        gr_i = [];
        x = standard_define([1,1],model,exprs,gr_i);
        x.graphics.in_implicit = ["I"];
    }
    OUTIMPL_f.prototype.details = function OUTIMPL_f() {
    }
    OUTIMPL_f.prototype.get = function OUTIMPL_f() {
    }
    OUTIMPL_f.prototype.set = function OUTIMPL_f() {
        x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,"*")==2) {
        exprs = exprs[1-1];
}
        while (true) {
        [ok,prt,exprs] = scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"OUTIMPL_f")],[" "],[gettext("Implicit output port")]],gettext("Port number"),list("vec",1),exprs);
        if (!ok) {
break;
}
        prt = int(prt);
        if (prt<=0) {
block_parameter_error(msprintf(gettext("Wrong value for \'Port Number\' parameter: %d."),prt),gettext("Strictly positive integer expected."));
        } else {
        if (model.ipar!=prt) {
        needcompile = 4;
        y = needcompile;
}
        model.ipar = prt;
        graphics.exprs = exprs;
        x.graphics = graphics;
        x.model = model;
break;
}
}
    }
}
