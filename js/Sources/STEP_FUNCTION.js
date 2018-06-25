/* autogenerated from "macros/Sources/STEP_FUNCTION.sci" */
function STEP_FUNCTION() {
    STEP_FUNCTION.prototype.define = function STEP_FUNCTION() {
        scs_m_1 = scicos_diagram();
        scs_m_1.objs[1-1] = this.STEP["define"-1];
        scs_m_1.objs[2-1] = OUT_f("define");
        scs_m_1.objs[3-1] = scicos_link();
        scs_m_1.objs[4-1] = scicos_link();
        blk = scs_m_1.objs[1-1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = [0,0];
        graphics.sz = [40,40];
        graphics.pein = 4;
        graphics.peout = 4;
        graphics.pout = 3;
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[1-1] = blk;
        blk = scs_m_1.objs[2-1];
        graphics = blk.graphics;
        model = blk.model;
        graphics.orig = [80,10];
        graphics.sz = [20,20];
        graphics.exprs = ["1"];
        model.ipar = 1;
        graphics.pin = 3;
        blk.graphics = graphics;
        blk.model = model;
        scs_m_1.objs[2-1] = blk;
        lnk = scs_m_1.objs[3-1];
        lnk.from = [1,1,0];
        lnk.to = [2,1,1];
        scs_m_1.objs[3-1] = lnk;
        lnk = scs_m_1.objs[4-1];
        lnk.xx = [0,20,-20,-20,20,1];
        lnk.yy = [0,-20,-20,60,60,1];
        lnk.ct = [5,-1];
        lnk.from = [1,1,0];
        lnk.to = [1,1,1];
        scs_m_1.objs[4-1] = lnk;
blk={};
lnk={};
        model = scicos_model();
        model.sim = "csuper";
        model.out = 1;
        model.out2 = 1;
        model.outtyp = 1;
        model.rpar = scs_m_1;
        gr_i = [];
        x = standard_define([2,2],model,[],gr_i);
    }
    STEP_FUNCTION.prototype.details = function STEP_FUNCTION() {
    }
    STEP_FUNCTION.prototype.get = function STEP_FUNCTION() {
    }
    STEP_FUNCTION.prototype.set = function STEP_FUNCTION() {
for (i=1;i<=length(arg1.model.rpar.objs);i+=1) {
        o = arg1.model.rpar.objs[i-1];
        if (typeof(o)=="Block"&&o.gui=="STEP") {
        ppath = list(i);
break;
}
}
        newpar = list();
        for (path in ppath) {
        np = size(path,"*");
        spath = list();
for (k=1;k<=np;k+=1) {
        spath[$+1-1] = "model";
        spath[$+1-1] = "rpar";
        spath[$+1-1] = "objs";
        spath[$+1-1] = path[k-1];
}
        xx = arg1[spath-1];
execstr("xxn="+xx.gui+"(\'set\',xx)");
        if (diffobjs(this.xxn,xx)) {
        model = xx.model;
        model_n = this.xxn.model;
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
        arg1[spath-1] = this.xxn;
        newpar[size(newpar)+1-1] = path;
}
}
        x = arg1;
        y = needcompile;
        typ = newpar;
    }
}
