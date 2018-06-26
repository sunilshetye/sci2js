/* autogenerated from "macros/Branching/GOTOMO.sci" */
function GOTOMO() {
    GOTOMO.prototype.define = function GOTOMO() {
        model = scicos_model();
        model.sim = "gotomo";
        model.in1 = -1;
        model.in2 = -2;
        model.intyp = [];
        model.out = [];
        model.out2 = [];
        model.outtyp = 1;
        model.ipar = int(1);
        model.opar = list("A");
        model.blocktype = "c";
        model.dep_ut = [false,false];
        mo = modelica();
        mo.model = "gotomo";
        mo.inputs = "p";
        exprs = [["A"],[sci2exp(1)]];
        gr_i = [];
        this.x = standard_define([2,1],model,exprs,gr_i);
        this.x.graphics.in_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    GOTOMO.prototype.details = function GOTOMO() {
        return this.x;
    }
    GOTOMO.prototype.get = function GOTOMO() {
    }
    GOTOMO.prototype.set = function GOTOMO() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.tag,this.tagvis,exprs] = scicos_getvalue("Set parameters",[["Tag"],["Tag Visibility(1=Local 2=scoped 3= global)"]],list("str",-1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            this.tagvis = int(this.tagvis);
            if (((this.tagvis<1)||(this.tagvis>3))) {
                message("Tag Visibility must be between 1 and 3");
                ok = false;
            }
            if (ok) {
                if (((model.ipar!=this.tagvis)||(model.opar!=list(this.tag)))) {
                    needcompile = 4;
                    y = needcompile;
                }
                graphics.exprs = exprs;
                model.opar = list(this.tag);
                model.ipar = this.tagvis;
                this.x.model = model;
                this.x.graphics = graphics;
                arg1 = this.x;
                break;
            }
        }
        needcompile=resume(needcompile)
        return new BasicBlock(this.x);
    }
}
