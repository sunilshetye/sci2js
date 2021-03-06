/* autogenerated from "macros/Branching/ISELECT_f.sci" */
function ISELECT_f() {
    ISELECT_f.prototype.define = function ISELECT_f() {
        this.z0 = 0;
        var out = [[-1],[-1]];
        this.nout = 2;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["selector"]), new ScilabDouble([2]));
        this.model.in = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble(out);
        this.model.evtin = new ScilabDouble([ones(out)]);
        this.model.dstate = new ScilabDouble([this.z0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var exprs = [[string(this.nout)],[string(this.z0+1)]];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"ISELECT_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(exprs),gr_i);
        return new BasicBlock(this.x);
    }
    ISELECT_f.prototype.details = function ISELECT_f() {
        return this.x;
    }
    ISELECT_f.prototype.get = function ISELECT_f() {
        var exprs = this.graphics.exprs;
        this.set_param_popup_title = "Set parameters";
        var options = {
            nout:["number of outputs",this.nout],
            z0:["initial connected output",this.z0],
        }
        return options;
    }
    ISELECT_f.prototype.set = function ISELECT_f() {
        var exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.nout = parseFloat(arguments[0]["nout"]);
            this.z0 = parseFloat(arguments[0]["z0"]);
            var exprs = [arguments[0]["nout"], arguments[0]["z0"]];
            if (!ok) {
                break;
            }
            if (this.z0>this.nout||this.z0<=0) {
                message("initial connected input is not a valid input port number");
                throw "user error";
            } else {
                var tmpvar0 = check_io(this.model,this.graphics,-1,-ones(this.nout,1),ones(this.nout,1),[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([exprs]);
                    this.model.dstate = new ScilabDouble([this.z0-1]);
                    this.x.graphics = this.graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
    ISELECT_f.prototype.get_popup_title = function ISELECT_f() {
        return this.set_param_popup_title;
    }
    ISELECT_f.prototype.importset = function ISELECT_f() {
        var graphics = this.x.graphics;
        var ary = getData(graphics.exprs);
        this.nout = ary[0];
        this.z0 = ary[1];
    }
    ISELECT_f.prototype.getContainer = function ISELECT_f() { return new BasicBlock(this.x); }
}
