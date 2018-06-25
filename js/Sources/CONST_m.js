/* autogenerated from "macros/Sources/CONST_m.sci" */
function CONST_m() {
    CONST_m.prototype.define = function CONST_m() {
        C = [1];
        model = scicos_model();
        model.sim = list("cstblk4",4);
        model.in1 = [];
        model.out = size(C,1);
        model.in2 = [];
        model.out2 = size(C,2);
        model.rpar = C;
        model.opar = list();
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = sci2exp(C);
        gr_i = [];
        x = standard_define([2,2],model,exprs,gr_i);
    }
    CONST_m.prototype.details = function CONST_m() {
    }
    CONST_m.prototype.get = function CONST_m() {
    }
    CONST_m.prototype.set = function CONST_m() {
        x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
        [ok,C,exprs] = scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"CONST_m")],[" "],[gettext("Constant value generator")],[" "]],gettext("Constant Value"),list("vec",-1),exprs);
        if (!ok) {
break;
}
        nout = size(C);
        if (find(nout==0)!=[]) {
block_parameter_error(msprintf(gettext("Wrong size for \'%s\' parameter"),gettext("Constant Value")),gettext("Constant value must have at least one element."));
        } else {
        model.sim = list("cstblk4_m",4);
        model.opar = list(C);
        if ((this.type[C-1]==1)) {
        if (isreal(C)) {
        ot = 1;
        } else {
        ot = 2;
}
        } else if ((typeof(C)=="int32")) {
        ot = 3;
        } else if ((typeof(C)=="int16")) {
        ot = 4;
        } else if ((typeof(C)=="int8")) {
        ot = 5;
        } else if ((typeof(C)=="uint32")) {
        ot = 6;
        } else if ((typeof(C)=="uint16")) {
        ot = 7;
        } else if ((typeof(C)=="uint8")) {
        ot = 8;
        } else {
block_parameter_error(msprintf(gettext("Wrong type for \'%s\' parameter"),gettext("Constant Value")),gettext("Value type must be a numeric type (double, complex, int, int8, ...)."));
        ok = false;
}
        if (ok) {
        model.rpar = [];
        [model,graphics,ok] = set_io(model,graphics,list(),list(nout,ot),[],[]);
        graphics.exprs = exprs;
        x.graphics = graphics;
        x.model = model;
break;
}
}
}
    }
}
