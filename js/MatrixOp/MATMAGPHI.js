/* autogenerated from "macros/MatrixOp/MATMAGPHI.sci" */
function MATMAGPHI() {
    MATMAGPHI.prototype.define = function MATMAGPHI() {
        model = scicos_model();
        function_name = "matz_abs";
        funtyp = 4;
        model.sim = list(function_name,funtyp);
        model.in1 = -1;
        model.in2 = -2;
        model.intyp = 2;
        model.out = [[-1],[-1]];
        model.out2 = [[-2],[-2]];
        model.outtyp = [1,1];
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
        x = standard_define([3,2],model,label,gr_i);
    }
    MATMAGPHI.prototype.details = function MATMAGPHI() {
    }
    MATMAGPHI.prototype.get = function MATMAGPHI() {
    }
    MATMAGPHI.prototype.set = function MATMAGPHI() {
        x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")==14) {
        label[9-1] = [];
}
        while (true) {
        [ok,decomptyp,lab] = scicos_getvalue("Set MATMAGPHI block parameters",["decomposition type (1=Complex2MAG&PHI 2=MAG&PHI2Complex)"],list("vec",1),label);
        if (!ok) {
break;
}
        label = lab;
        if ((decomptyp==1)) {
        function_name = "matz_abs";
        in1 = [-1,-2];
        it = 2;
        out = [[-1,-2],[-1,-2]];
        ot = [1,1];
        } else if ((decomptyp==2)) {
        function_name = "matz_absc";
        in1 = [[-1,-2],[-1,-2]];
        it = [1,1];
        out = [-1,-2];
        ot = 2;
        } else {
message("decomposition type is not supported");
        ok = false;
}
        funtyp = 4;
        if (ok) {
        [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
}
        if (ok) {
        model.sim = list(function_name,funtyp);
        arg1.model = model;
        graphics.exprs = label;
        arg1.graphics = graphics;
        x = arg1;
break;
}
}
    }
}
