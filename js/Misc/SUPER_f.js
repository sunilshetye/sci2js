/* autogenerated from "macros/Misc/SUPER_f.sci" */
function SUPER_f() {
    SUPER_f.prototype.define = function SUPER_f() {
        scs = scicos_diagram();
        scs.props.title = "Super Block";
        in1 = IN_f("define");
        in1.graphics.orig = [40,40];
        in1.graphics.sz = [20,20];
        out = OUT_f("define");
        out.graphics.orig = [240,40];
        out.graphics.sz = [20,20];
        scs.objs[1-1] = in1;
        scs.objs[2-1] = out;
        model = scicos_model();
        model.sim = "super";
        model.in1 = 1;
        model.out = 1;
        model.rpar = scs;
        model.blocktype = "h";
        model.dep_ut = [false,false];
        gr_i = [];
        x = standard_define([2,2],model,[],gr_i);
    }
    SUPER_f.prototype.details = function SUPER_f() {
    }
    SUPER_f.prototype.get = function SUPER_f() {
    }
    SUPER_f.prototype.set = function SUPER_f() {
xcos(arg1.model.rpar);
    }
}
