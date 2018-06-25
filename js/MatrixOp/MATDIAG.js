/* autogenerated from "macros/MatrixOp/MATDIAG.sci" */
function MATDIAG() {
    MATDIAG.prototype.define = function MATDIAG() {
        model = scicos_model();
        function_name = "mat_diag";
        funtyp = 4;
        model.sim = list(function_name,funtyp);
        model.in1 = -1;
        model.in2 = 1;
        model.intyp = 1;
        model.out = -1;
        model.out2 = -1;
        model.outtyp = 1;
        model.evtin = [];
        model.evtout = [];
        model.state = [];
        model.dstate = [];
        model.rpar = [];
        model.ipar = [];
        model.blocktype = "c";
        model.firing = [];
        model.dep_ut = [true,false];
        label = [sci2exp(1)];
        gr_i = [];
        x = standard_define([2,2],model,label,gr_i);
    }
    MATDIAG.prototype.details = function MATDIAG() {
    }
    MATDIAG.prototype.get = function MATDIAG() {
    }
    MATDIAG.prototype.set = function MATDIAG() {
        x = arg1;
        graphics = arg1.graphics;
        label = graphics.exprs;
        model = arg1.model;
        if (size(label,"*")==14) {
        label[9-1] = [];
}
        while (true) {
        [ok,typ,exprs] = scicos_getvalue("Set MATDIAG Block",["Datatype (1=real double  2=Complex)"],list("vec",1),label);
        if (!ok) {
break;
}
        if ((typ==1)) {
        function_name = "mat_diag";
        ot = 1;
        it = 1;
        } else if ((typ==2)) {
        function_name = "matz_diag";
        ot = 2;
        it = 2;
        } else {
message("Datatype is not supported");
        ok = false;
}
        in1 = [model.in1,model.in2];
        out = [model.out,model.out2];
        funtyp = 4;
        if (ok) {
        label = exprs;
        [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
        model.sim = list(function_name,funtyp);
        graphics.exprs = label;
        arg1.graphics = graphics;
        arg1.model = model;
        x = arg1;
break;
}
}
    }
}
