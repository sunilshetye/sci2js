/* autogenerated from "macros/Linear/DIFF_c.sci" */
function DIFF_c() {
    DIFF_c.prototype.define = function DIFF_c() {
        this.x0 = [[0],[0]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["diffblk_c"]), new ScilabDouble([10004]));
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.state = new ScilabDouble(this.x0);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([false,true]);
        this.exprs = [[strcat(sci2exp(this.x0[1-1]))],[strcat(sci2exp(this.x0[2-1]))]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DIFF_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    DIFF_c.prototype.details = function DIFF_c() {
        return this.x;
    }
    DIFF_c.prototype.get = function DIFF_c() {
        var options = {
            x0:["Initial state",this.x0.toString().replace(/,/g," ")],
            xd0:["Initial Derivative",this.xd0],
        }
        return options;
    }
    DIFF_c.prototype.set = function DIFF_c() {
        this.x0 = inverse(arguments[0]["x0"])
        this.xd0 = inverse(arguments[0]["xd0"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            var ask_again = false;
            [ok,this.x0,this.xd0,this.exprs] = scicos_getvalue("Set continuous linear system parameters",["Initial state","Initial Derivative"],list("vec",-1,"vec",-1),this.exprs);
            if (!ok) {
                break;
            }
            this.x0 = this.x0.slice();
            var N = size(this.x0,"*");
            this.xd0 = this.xd0.slice();
            var Nxd = size(this.xd0,"*");
            if ((N!=Nxd)) {
                message("Incompatible sizes: states and their derivatives should have the same size ");
                var ask_again = true;
            }
            if ((N<=0&&!ask_again)) {
                x_message("number of states must be > 0 ");
                var ask_again = true;
            }
            if (!ask_again) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.state = new ScilabDouble([this.x0],[this.xd0]);
                this.model.out = new ScilabDouble([N]);
                this.model.in = new ScilabDouble([N]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        this.x.model.firing = [];
        return new BasicBlock(this.x);
    }
}
