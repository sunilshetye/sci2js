/* autogenerated from "macros/Sources/TIME_f.sci" */
function TIME_f() {
    TIME_f.prototype.define = function TIME_f() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["timblk"]);
        this.model.out = new ScilabDouble([1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TIME_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble([]),gr_i);
        return new BasicBlock(this.x);
    }
    TIME_f.prototype.details = function TIME_f() {
        return this.x;
    }
    TIME_f.prototype.get = function TIME_f() {
        alert("parameters cannot be modified");
    }
    TIME_f.prototype.set = function TIME_f() {
        return new BasicBlock(this.x);
    }
    TIME_f.prototype.get_popup_title = function TIME_f() {
        return;
    }
    TIME_f.prototype.getContainer = function TIME_f() { return new BasicBlock(this.x); }
}
