/* autogenerated from "macros/Sources/CURV_f.sci" */
function CURV_f() {
    CURV_f.prototype.define = function CURV_f() {
        var xx = [[0],[1],[2]];
        var yy = [[-5],[5],[0]];
        var rect = [0,-5,2,5];
        var axisdata = [[2],[10],[2],[10]];
        var ipar = [[size(xx,1)],[axisdata.slice()]];
        var rpar = [[xx],[yy],[rect.slice()]];
        this.model = scicos_model();
        this.model.sim = new ScilabString(["intplt"]);
        this.model.in = new ScilabDouble([]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([xx],[yy],[rect.slice()]);
        this.model.ipar = new ScilabDouble([size(xx,1)],[axisdata.slice()]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CURV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,[],this.gr_i);
        return new BasicBlock(this.x);
    }
    CURV_f.prototype.details = function CURV_f() {
        return this.x;
    }
    CURV_f.prototype.get = function CURV_f() {
        var options = {
        }
        return options;
    }
    CURV_f.prototype.set = function CURV_f() {
        var rpar = this.model.rpar;
        var ipar = this.model.ipar;
        var n = ipar[1-1];
        var xx = rpar.slice(1-1,n);
        var yy = rpar.slice(n+1-1,2*n);
        var gc = list(rpar.slice(2*n+1-1,2*n+4),ipar.slice(2-1,5));
        while (true) {
            [ln,fun]=where()
            if (!or(fun=="do_eval")) {
                var tmpvar0 = edit_curv(xx,yy,"axy",[" "," "," "],gc);
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
            if (or(xx.slice(2-1,n)-xx.slice(1-1,n-1)<0)) {
                message("You have not defined a function");
                var ok = false;
            }
            if (ok) {
                this.model.sim = new ScilabString(["intplt"]);
                this.model.firing = new ScilabDouble([]);
                var rect = gc[1-1];
                this.model.rpar = new ScilabDouble([xx.slice()],[yy.slice()],[rect.slice()]);
                var axisdata = gc[2-1];
                this.model.ipar = new ScilabDouble([size(xx,"*")],[axisdata.slice()]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
