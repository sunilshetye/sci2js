/* autogenerated from "macros/Events/EVTDLY_c.sci" */
function EVTDLY_c() {
    EVTDLY_c.prototype.define = function EVTDLY_c() {
        this.dt = 0.1;
        this.ff = 0.0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["evtdly4"]), new ScilabDouble([4]));
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.dt],[this.ff]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([this.ff]);
        this.model.dep_ut = new ScilabDouble([false,false]);
        this.exprs = [[string(this.dt)],[sci2exp(this.ff)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"EVTDLY_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,this.exprs,this.gr_i);
        return new BasicBlock(this.x);
    }
    EVTDLY_c.prototype.details = function EVTDLY_c() {
        return this.x;
    }
    EVTDLY_c.prototype.get = function EVTDLY_c() {
        var options = {
            dt:["Delay",this.dt],
            ff:["Date of initial output event",this.ff],
        }
        return options;
    }
    EVTDLY_c.prototype.set = function EVTDLY_c() {
        this.dt = parseFloat(arguments[0]["dt"])
        this.ff = parseFloat(arguments[0]["ff"])
        this.exprs = arguments[0]["exprs"]
        this.exprs = this.graphics.exprs;
        while (true) {
            [ok,this.dt,this.ff,this.exprs] = scicos_getvalue([["Set Event Delay block parameters"],["Delay  is the delay between an input event "],["       and the generated output event"],["Block may initially generate an output event before "],["       any input event. \"Date of initial output event\""],["       gives the date of this event. Set a negative value"],["       to disable any output event."]],["Delay","Date of initial output event"],list("vec",1,"vec",1),this.exprs);
            if (!ok) {
                break;
            }
            if (this.dt<=0) {
                message("Delay must be positive");
                var ok = false;
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.rpar = new ScilabDouble([this.dt],[this.ff]);
                this.model.firing = new ScilabDouble([this.ff]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
