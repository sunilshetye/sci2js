/* autogenerated from "macros/Misc/PAL_f.sci" */
function PAL_f() {
    PAL_f.prototype.define = function PAL_f() {
        scs = scicos_diagram();
        scs.props.title = "Palette";
        model = scicos_model();
        model.sim = "palette";
        model.in1 = [];
        model.out = [];
        model.rpar = scs;
        model.blocktype = "h";
        model.dep_ut = [false,false];
        gr_i = [];
        this.x = standard_define([2,2],model,[],gr_i);
        this.x.graphics.id = scs.props.title[1-1];
        return new BasicBlock(this.x);
    }
    PAL_f.prototype.details = function PAL_f() {
        return this.x;
    }
    PAL_f.prototype.get = function PAL_f() {
    }
    PAL_f.prototype.set = function PAL_f() {
        [this.x,newparameters,needcompile,edited] = scicos(arg1.model.rpar);
        arg1.graphics.id = this.x.props.title[1-1];
        arg1.model.rpar = this.x;
        this.x = arg1;
        y = [];
        typ = [];
        %exit = resume(false)
        return new BasicBlock(this.x);
    }
}
