/* autogenerated from "macros/Misc/generic_block3.sci" */
function generic_block3() {
    generic_block3.prototype.define = function generic_block3() {
        model = scicos_model();
        function_name = "sinblk";
        funtyp = 4;
        model.sim = list(function_name,funtyp);
        model.in1 = 1;
        model.in2 = 1;
        model.intyp = 1;
        model.out = 1;
        model.out2 = 1;
        model.outtyp = 1;
        model.dep_ut = [true,false];
        label = [[function_name],[sci2exp(funtyp)],[sci2exp([model.in1,model.in2])],[sci2exp(model.intyp)],[sci2exp([model.out,model.out2]),sci2exp(model.outtyp)],[sci2exp(model.evtin)],[sci2exp(model.evtout)],[sci2exp(model.state)],[sci2exp(model.dstate)],[sci2exp(model.odstate)],[sci2exp(model.rpar)],[sci2exp(model.ipar)],[sci2exp(model.opar)],[sci2exp(model.nmode)],[sci2exp(model.nzcross)],[sci2exp(model.firing)],["y"],["n"]];
        gr_i = [];
        x = standard_define([4,2],model,label,gr_i);
    }
    generic_block3.prototype.details = function generic_block3() {
    }
    generic_block3.prototype.get = function generic_block3() {
    }
    generic_block3.prototype.set = function generic_block3() {
        x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        label = graphics.exprs;
        if (size(label,"*")==14) {
        label[9-1] = [];
}
        while (true) {
        [ok,function_name,funtyp,in1,it,out,ot,ci,co,xx,z,oz,rpar,ipar,opar,nmode,nzcr,auto0,depu,dept,lab] = scicos_getvalue("Set GENERIC block parameters",[["Simulation function"],["Function type (0,1,2,..)"],["Input ports sizes"],["Input ports type"],["Output port sizes"],["Output ports type"],["Input event ports sizes"],["Output events ports sizes"],["Initial continuous state"],["Initial discrete state"],["Initial object state"],["Real parameters vector"],["Integer parameters vector"],["Object parameters list"],["Number of modes"],["Number of zero crossings"],["Initial firing vector (<0 for no firing)"],["Direct feedthrough (y or n)"],["Time dependence (y or n)"]],list("str",1,"vec",1,"mat",[-1,2],"vec",-1,"mat",[-1,2],"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"lis",-1,"vec",-1,"vec",-1,"lis",-1,"vec",1,"vec",1,"vec","sum(%8)","str",1,"str",1),label);
        if (!ok) {
break;
}
        label = lab;
        function_name = stripblanks(function_name);
        xx = xx.slice();
        z = z.slice();
        rpar = rpar.slice();
        ipar = int(ipar.slice());
        ci = int(ci.slice());
        co = int(co.slice());
        funtyp = funtyp;
        if (funtyp<0) {
message("function type cannot be negative");
        ok = false;
}
        if ([[ci],[co]]!=[]) {
        if (max([[ci],[co]])>1) {
message("vector event links not supported");
        ok = false;
}
}
        if (this.type[opar-1]!=15) {
message("object parameter must be a list");
        ok = false;
}
        if (this.type[oz-1]!=15) {
message("discrete object state must be a list");
        ok = false;
}
        depu = stripblanks(depu);
        if (part(depu,1)=="y") {
        depu = true;
        } else {
        depu = false;
}
        dept = stripblanks(dept);
        if (part(dept,1)=="y") {
        dept = true;
        } else {
        dept = false;
}
        dep_ut = [depu,dept];
        if (ok) {
        [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),ci,co);
}
        if (ok) {
        if (funtyp==3) {
        needcompile = 4;
}
        model.sim = list(function_name,funtyp);
        model.state = xx;
        model.dstate = z;
        model.odstate = oz;
        model.rpar = rpar;
        model.ipar = ipar;
        model.opar = opar;
        model.firing = auto0;
        model.nzcross = nzcr;
        model.nmode = nmode;
        model.dep_ut = dep_ut;
        arg1.model = model;
        graphics.exprs = label;
        arg1.graphics = graphics;
        x = arg1;
break;
}
}
needcompile=resume(needcompile)
    }
}
