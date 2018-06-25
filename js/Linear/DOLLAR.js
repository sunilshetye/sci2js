/* autogenerated from "macros/Linear/DOLLAR.sci" */
function DOLLAR() {
    DOLLAR.prototype.define = function DOLLAR() {
        z = 0;
        inh = 0;
        in1 = 1;
        exprs = string([[z],[inh]]);
        model = scicos_model();
        model.sim = list("dollar4",4);
        model.in1 = in1;
        model.out = in1;
        model.evtin = 1-inh;
        model.dstate = z;
        model.blocktype = "d";
        model.dep_ut = [false,false];
        gr_i = [];
        x = standard_define([2,2],model,exprs,gr_i);
    }
    DOLLAR.prototype.details = function DOLLAR() {
    }
    DOLLAR.prototype.get = function DOLLAR() {
    }
    DOLLAR.prototype.set = function DOLLAR() {
        x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        if (size(exprs,"*")<2) {
        exprs[2-1] = "0";
}
        while (true) {
        [ok,a,inh,exprs] = scicos_getvalue("Set 1/z block parameters",[["initial condition"],["Inherit (no:0, yes:1)"]],list("mat",[-1,-2],"vec",-1),exprs);
        if (!ok) {
break;
}
        out = [size(a,1),size(a,2)];
        if (out==0) {
        out = [];
}
        in1 = out;
        model.sim = list("dollar4_m",4);
        model.odstate = list(a);
        model.dstate = [];
        if (this.type[(a)==1-1]) {
        if (isreal(a)) {
        it = 1;
        ot = 1;
        if ((size(a,1)==1||size(a,2)==1)) {
        model.sim = list("dollar4",4);
        model.dstate = a.slice();
        model.odstate = list();
}
        } else {
        it = 2;
        ot = 2;
}
        } else if ((typeof(a)=="int32")) {
        it = 3;
        ot = 3;
        } else if ((typeof(a)=="int16")) {
        it = 4;
        ot = 4;
        } else if ((typeof(a)=="int8")) {
        it = 5;
        ot = 5;
        } else if ((typeof(a)=="uint32")) {
        it = 6;
        ot = 6;
        } else if ((typeof(a)=="uint16")) {
        it = 7;
        ot = 7;
        } else if ((typeof(a)=="uint8")) {
        it = 8;
        ot = 8;
        } else {
message("type is not recognized");
        ok = false;
}
        if (ok) {
        [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),ones(1-inh,1),[]);
}
        if (ok) {
        graphics.exprs = exprs;
        x.graphics = graphics;
        x.model = model;
break;
}
}
    }
}
