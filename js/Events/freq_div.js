/* autogenerated from "macros/Events/freq_div.sci" */
function freq_div() {
    freq_div.prototype.define = function freq_div() {
        scs_m_1 = scicos_diagram();
        scs_m_1.objs[1-1] = Modulo_Count("define");
        scs_m_1.objs[2-1] = CLKINV_f("define");
        scs_m_1.objs[3-1] = CLKOUTV_f("define");
        scs_m_1.objs[4-1] = IFTHEL_f("define");
        scs_m_1.objs[5-1] = CLKSPLIT_f("define");
        scs_m_1.objs[6-1] = scicos_link();
        scs_m_1.objs[7-1] = scicos_link();
        scs_m_1.objs[8-1] = scicos_link();
        scs_m_1.objs[9-1] = scicos_link();
        scs_m_1.objs[10-1] = scicos_link();
        blk = scs_m_1.objs[1-1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = [0,-100];
        graphics.sz = [60,40];
        graphics.exprs = [["0"],["3"]];
        model.dstate = 3;
        model.ipar = 3;
        graphics.pout = 7;
        graphics.pein = 10;
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[1-1] = blk;
        blk = scs_m_1.objs[2-1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = [120,0];
        graphics.sz = [20,20];
        graphics.exprs = ["1"];
        model.ipar = 1;
        graphics.peout = 6;
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[2-1] = blk;
        blk = scs_m_1.objs[3-1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = [130,-160];
        graphics.sz = [20,20];
        graphics.exprs = ["1"];
        model.ipar = 1;
        graphics.pein = 8;
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[3-1] = blk;
        blk = scs_m_1.objs[4-1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = [100,-100];
        graphics.sz = [60,40];
        graphics.exprs = [["1"],["0"]];
        model.ipar = 1;
        graphics.pin = 7;
        graphics.pein = 9;
        graphics.peout = [[0],[8]];
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[4-1] = blk;
        blk = scs_m_1.objs[5-1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = [127,-33];
        graphics.sz = [7,7];
        graphics.pein = 6;
        graphics.peout = [[9],[10]];
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[5-1] = blk;
        lnk = scs_m_1.objs[6-1];
        lnk.ct = [5,-1];
        lnk.from = [2,1,0];
        lnk.to = [5,1,1];
        scs_m_1.objs[6-1] = lnk;
        lnk = scs_m_1.objs[7-1];
        lnk.from = [1,1,0];
        lnk.to = [4,1,1];
        scs_m_1.objs[7-1] = lnk;
        lnk = scs_m_1.objs[8-1];
        lnk.ct = [5,-1];
        lnk.from = [4,2,0];
        lnk.to = [3,1,1];
        scs_m_1.objs[8-1] = lnk;
        lnk = scs_m_1.objs[9-1];
        lnk.ct = [5,-1];
        lnk.from = [5,1,0];
        lnk.to = [4,1,1];
        scs_m_1.objs[9-1] = lnk;
        lnk = scs_m_1.objs[10-1];
        lnk.xx = [0,30,1];
        lnk.yy = [0,-30,1];
        lnk.ct = [5,-1];
        lnk.from = [5,2,0];
        lnk.to = [1,1,1];
        scs_m_1.objs[10-1] = lnk;
blk={};
lnk={};
        model = scicos_model();
        model.sim = "csuper";
        model.evtin = 1;
        model.evtout = 1;
        model.rpar = scs_m_1;
        gr_i = [];
        x = standard_define([3,2],model,[],gr_i);
    }
    freq_div.prototype.details = function freq_div() {
    }
    freq_div.prototype.get = function freq_div() {
    }
    freq_div.prototype.set = function freq_div() {
for (i=1;i<=length(arg1.model.rpar.objs);i+=1) {
        o = arg1.model.rpar.objs[i-1];
        if (typeof(o)=="Block"&&o.gui=="Modulo_Count") {
        path = i;
break;
}
}
        newpar = list();
        y = 0;
        spath = list();
        spath[$+1-1] = "model";
        spath[$+1-1] = "rpar";
        spath[$+1-1] = "objs";
        spath[$+1-1] = path;
        xx = arg1[spath-1];
        xxn = xx;
        graphics = xx.graphics;
        exprs = graphics.exprs;
        model = xx.model;
        while (true) {
        [ok,%ph,%df,exprs] = scicos_getvalue("Set frequency division block parameters",[["Phase (0 to division factor -1)"],["Division factor"]],list("vec",1,"vec",1),exprs);
        if (!ok) {
break;
}
        if (ok) {
        if (%df<1) {
        %df = 1;
}
        %ph = abs(%ph);
        if (%ph>%df-1) {
        %ph = %df-1;
}
        graphics.exprs = exprs;
        model.ipar = %df;
        model.dstate = %ph;
        xxn.graphics = graphics;
        xxn.model = model;
break;
}
}
        if (diffobjs(xxn,xx)) {
        model = xx.model;
        model_n = xxn.model;
        if (!is_modelica_block(xx)) {
        modified = or(model.sim!=model_n.sim)||!isequal(model.state,model_n.state)||!isequal(model.dstate,model_n.dstate)||!isequal(model.rpar,model_n.rpar)||!isequal(model.ipar,model_n.ipar)||!isequal(model.label,model_n.label);
        if (or(model.in1!=model_n.in1)||or(model.out!=model_n.out)) {
        needcompile = 1;
}
        if (or(model.firing!=model_n.firing)) {
        needcompile = 2;
}
        if (model.sim=="input"||model.sim=="output") {
        if (model.ipar!=model_n.ipar) {
        needcompile = 4;
}
}
        if (or(model.blocktype!=model_n.blocktype)||or(model.dep_ut!=model_n.dep_ut)) {
        needcompile = 4;
}
        if ((model.nzcross!=model_n.nzcross)||(model.nmode!=model_n.nmode)) {
        needcompile = 4;
}
        if (prod(size(model_n.sim))>1) {
        if (model_n.sim[2-1]>1000) {
        if (model.sim[1-1]!=model_n.sim[1-1]) {
        needcompile = 4;
}
}
}
        } else {
        modified = or(model_n!=model);
        eq = model.equations;
        eqn = model_n.equations;
        if (or(eq.model!=eqn.model)||or(eq.inputs!=eqn.inputs)||or(eq.outputs!=eqn.outputs)) {
        needcompile = 4;
}
}
        arg1[spath-1] = xxn;
        newpar[size(newpar)+1-1] = 1;
        y = max(y,needcompile);
}
        x = arg1;
        typ = newpar;
    }
}
