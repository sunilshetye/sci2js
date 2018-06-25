/* autogenerated from "macros/Misc/c_block.sci" */
function c_block() {
    c_block.prototype.define = function c_block() {
        in1 = 1;
        out = 1;
        clkin = [];
        clkout = [];
        x0 = [];
        z0 = [];
        typ = "c";
        auto = [];
        rpar = [];
        funam = "toto";
        model = scicos_model();
        model.sim = list(" ",2001);
        model.in1 = in1;
        model.out = out;
        model.evtin = clkin;
        model.evtout = clkout;
        model.state = x0;
        model.dstate = z0;
        model.rpar = rpar;
        model.ipar = 0;
        model.blocktype = typ;
        model.firing = auto;
        model.dep_ut = [true,false];
        label = list([[sci2exp(in1)],[sci2exp(out)],[strcat(sci2exp(rpar))],[funam]],list([]));
        gr_i = [];
        x = standard_define([3,2],model,label,gr_i);
    }
    c_block.prototype.details = function c_block() {
    }
    c_block.prototype.get = function c_block() {
    }
    c_block.prototype.set = function c_block() {
        x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        while (true) {
        [ok,i,o,rpar,funam,lab] = scicos_getvalue("Set C_block parameters",[["input ports sizes"],["output port sizes"],["System parameters vector"],["function name"]],list("vec",-1,"vec",-1,"vec",-1,"str",-1),label[1-1]);
        if (!ok) {
break;
}
        if (funam==" ") {
break;
}
        label[1-1] = lab;
        rpar = rpar.slice();
        i = int(i.slice());
        ni = size(i,1);
        o = int(o.slice());
        no = size(o,1);
        tt = label[2-1];
        if (model.sim[1-1]!=funam||size(model.in1,"*")!=size(i,"*")||size(model.out,"*")!=size(o,"*")) {
        tt = [];
}
        [ok,tt] = CFORTR(funam,tt,i,o);
        if (!ok) {
break;
}
        [model,graphics,ok] = check_io(model,graphics,i,o,[],[]);
        if (ok) {
        model.sim[1-1] = funam;
        model.rpar = rpar;
        label[2-1] = tt;
        x.model = model;
        graphics.exprs = label;
        x.graphics = graphics;
break;
}
}
    }
}
