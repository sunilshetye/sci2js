/* autogenerated from "macros/NonLinear/PROD_f.sci" */
function PROD_f() {
    PROD_f.prototype.define = function PROD_f() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["prod"]), new ScilabDouble([2]));
        this.model.in = new ScilabDouble([-1],[-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.x = new standard_define(new ScilabDouble([1,1]),this.model,[],[]);
        return new BasicBlock(this.x);
    }
    PROD_f.prototype.details = function PROD_f() {
        return this.x;
    }
    PROD_f.prototype.get = function PROD_f() {
        var options = {
        }
        return options;
    }
    PROD_f.prototype.set = function PROD_f() {
        return new BasicBlock(this.x);
    }
}
