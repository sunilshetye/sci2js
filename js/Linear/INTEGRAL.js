/* autogenerated from "macros/Linear/INTEGRAL.sci" */
function INTEGRAL() {
    INTEGRAL.prototype.define = function INTEGRAL() {
        maxp = 1;
        minp = -1;
        rpar = [];
        model = scicos_model();
        model.state = 0;
        model.sim = list("integral_func",4);
        model.in1 = 1;
        model.out = 1;
        model.rpar = rpar;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = string([[0],[0],[0],[maxp],[minp]]);
        gr_i = [];
        x = standard_define([2,2],model,exprs,gr_i);
        x.graphics.id = "1/s";
    }
    INTEGRAL.prototype.details = function INTEGRAL() {
    }
    INTEGRAL.prototype.get = function INTEGRAL() {
    }
    INTEGRAL.prototype.set = function INTEGRAL() {
        x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
        [ok,x0,reinit,satur,maxp,lowp,exprs] = scicos_getvalue("Set Integral block parameters",[["Initial Condition"],["With re-intialization (1:yes, 0:no)"],["With saturation (1:yes, 0:no)"],["Upper limit"],["Lower limit"]],list("vec",-1,"vec",1,"vec",1,"vec",-1,"vec",-1),exprs);
        if (!ok) {
break;
}
        x0 = x0.slice();
        maxp = maxp.slice();
        lowp = lowp.slice();
        if (reinit!=0) {
        reinit = 1;
}
        if (satur!=0) {
        satur = 1;
        if (size(maxp,"*")==1) {
        maxp = maxp*ones(x0);
}
        if (size(lowp,"*")==1) {
        lowp = lowp*ones(x0);
}
        if ((size(x0,1)!=size(maxp,1)||size(x0,1)!=size(lowp,1))) {
message("x0 and Upper limit and Lower limit must have same size");
        ok = false;
        } else if (or(maxp<=lowp)) {
message("Upper limits must be > Lower limits");
        ok = false;
        } else if (or(x0>maxp)||or(x0<lowp)) {
message("Initial condition x0 should be inside the limits");
        ok = false;
        } else {
        rpar = [[maxp],[lowp]];
        model.nzcross = size(x0,1);
        model.nmode = size(x0,1);
}
        } else {
        rpar = [];
        model.nzcross = 0;
        model.nmode = 0;
}
        if (ok) {
        model.rpar = rpar;
        model.state = x0;
        [model,graphics,ok] = check_io(model,graphics,size(x0,1)*[[1],[ones(reinit,1)]],size(x0,1),ones(reinit,1),[]);
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
