/* autogenerated from "macros/NonLinear/LOOKUP_f.sci" */
function LOOKUP_f() {
    LOOKUP_f.prototype.define = function LOOKUP_f() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["lookup"]);
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([-2],[-1],[1],[2],[-1],[1],[-1],[1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"LOOKUP_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble([]),gr_i);
        return new BasicBlock(this.x);
    }
    LOOKUP_f.prototype.details = function LOOKUP_f() {
        return this.x;
    }
    LOOKUP_f.prototype.get = function LOOKUP_f() {
        alert("parameters cannot be modified");
    }
    LOOKUP_f.prototype.set = function LOOKUP_f() {
        var exprs = this.graphics.exprs;
        var rpar = this.model.rpar;
        var n = size(rpar,"*")/2;
        var xx = rpar.slice(1-1,n);
        var yy = rpar.slice(n+1-1,2*n);
        while (true) {
            [ln,fun]=where()
            if (!or(fun=="do_eval")) {
                var tmpvar0 = edit_curv(xx,yy,"axy");
                var xx = tmpvar0[0];
                var yy = tmpvar0[1];
                var ok = tmpvar0[2];
                var gc = tmpvar0[3];
            } else {
                var ok = true;
            }
            if (!ok) {
                break;
            }
            var n = size(xx,"*");
            if (or(xx.slice(2-1,n)-xx.slice(1-1,n-1)<=0)) {
                message("You have not defined a function");
                throw "user error";
                var ok = false;
            }
            if (ok) {
                this.model.rpar = new ScilabDouble([xx.slice()],[yy.slice()]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
    LOOKUP_f.prototype.get_popup_title = function LOOKUP_f() {
        return;
    }
    LOOKUP_f.prototype.getContainer = function LOOKUP_f() { return new BasicBlock(this.x); }
}
