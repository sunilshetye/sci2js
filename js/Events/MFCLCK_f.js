/* autogenerated from "macros/Events/MFCLCK_f.sci" */
function MFCLCK_f() {
    MFCLCK_f.prototype.define = function MFCLCK_f() {
        this.nn = 2;
        this.dt = 0.1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["mfclck"]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1],[1]);
        this.model.dstate = new ScilabDouble([0]);
        this.model.rpar = new ScilabDouble([this.dt]);
        this.model.ipar = new ScilabDouble([this.nn]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([-1,0]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        this.exprs = [[string(this.dt)],[string(this.nn)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MFCLCK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    MFCLCK_f.prototype.details = function MFCLCK_f() {
        return this.x;
    }
    MFCLCK_f.prototype.get = function MFCLCK_f() {
        var options = {
        dt:["basic period (1/f)",this.dt],
        nn:["multiply by (n)",this.nn],
        }
        return options;
    }
    MFCLCK_f.prototype.set = function MFCLCK_f() {
        this.dt = parseFloat(arguments[0]["dt"])
        this.nn = parseFloat(arguments[0]["nn"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        [ok,this.dt,this.nn,this.exprs] = scicos_getvalue("Set Multifrequency clock parameters",["basic period (1/f)","multiply by (n)"],list("vec",1,"vec",1),this.exprs);
        if (ok) {
            this.model.ipar = new ScilabDouble([this.nn]);
            this.model.rpar = new ScilabDouble([this.dt]);
            var hh = this.model.firing;
            hh[2-1] = 0;
            this.model.firing = new ScilabDouble(hh);
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
        }
        return new BasicBlock(this.x);
    }
}
