/* autogenerated from "macros/Misc/PAL_f.sci" */
function PAL_f() {
    PAL_f.prototype.define = function PAL_f() {
        var scs = scicos_diagram();
        scs.props.title = "Palette";
        this.model = scicos_model();
        this.model.sim = new ScilabString(["palette"]);
        this.model.in = new ScilabDouble([]);
        this.model.out = new ScilabDouble([]);
        this.model.rpar = new ScilabDouble([scs]);
        this.model.blocktype = new ScilabString(["h"]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"PAL_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,[],this.gr_i);
        this.x.graphics.id = scs.props.title[1-1];
        return new BasicBlock(this.x);
    }
    PAL_f.prototype.details = function PAL_f() {
        return this.x;
    }
    PAL_f.prototype.get = function PAL_f() {
        var options = {
        }
        return options;
    }
    PAL_f.prototype.set = function PAL_f() {
        this.x = tmpvar0[0];
        var newparameters = tmpvar0[1];
        var needcompile = tmpvar0[2];
        var edited = tmpvar0[3];
        var y = [];
        var typ = [];
        %exit = resume(false)
        return new BasicBlock(this.x);
    }
}
