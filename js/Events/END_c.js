/* autogenerated from "macros/Events/END_c.sci" */
function END_c() {
    END_c.prototype.define = function END_c() {
        this.tf = 100000000;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString("scicosexit"),new ScilabDouble(4));
        this.model.evtin = new ScilabDouble(1);
        this.model.evtout = new ScilabDouble(1);
        this.model.firing = new ScilabDouble(this.tf);
        this.model.blocktype = new ScilabString("d");
        this.model.dep_ut = [false,false];
        exprs = string(this.tf);
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    END_c.prototype.details = function END_c() {
        return this.x;
    }
    END_c.prototype.get = function END_c() {
        var options = {
            tf:["Final simulation time",this.tf],
        }
        return options;
    }
    END_c.prototype.set = function END_c() {
        this.tf = parseFloat(arguments[0]["tf"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.tf,exprs] = scicos_getvalue("Set final simulation time",["Final simulation time"],list("vec",1),exprs);
            if (!ok) {
                break;
            }
            if (ok) {
                graphics.exprs = exprs;
                this.model.firing = new ScilabDouble(this.tf);
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
