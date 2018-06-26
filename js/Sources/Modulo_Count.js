/* autogenerated from "macros/Sources/Modulo_Count.sci" */
function Modulo_Count() {
    Modulo_Count.prototype.define = function Modulo_Count() {
        this.ini_c = 0;
        this.base = 3;
        model = scicos_model();
        model.sim = list("modulo_count",4);
        model.evtin = 1;
        model.out = 1;
        model.dstate = this.ini_c;
        model.ipar = this.base;
        model.blocktype = "c";
        model.dep_ut = [false,false];
        exprs = [[string(this.ini_c)],[string(this.base)]];
        gr_i = [];
        this.x = standard_define([3,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    Modulo_Count.prototype.details = function Modulo_Count() {
        return this.x;
    }
    Modulo_Count.prototype.get = function Modulo_Count() {
    }
    Modulo_Count.prototype.set = function Modulo_Count() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.ini_c,this.base,exprs] = scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"Modulo_Count")],[" "],[gettext("Modulo counter (0 to N counter)")],[" "]],[[gettext("Initial State (zero or positive number)")],[gettext("Upper Limit (positive number)")]],list("vec",1,"vec",1),exprs);
            this.ini_c = int(this.ini_c);
            this.base = int(this.base);
            if (!ok) {
                break;
            }
            if (this.ini_c<0) {
                block_parameter_error(msprintf(gettext("Wrong value for \'Initial State\' parameter: %d."),this.ini_c),gettext("Null or positive integer expected."));
            } else if (this.base<=0) {
                block_parameter_error(msprintf(gettext("Wrong values for \'Upper Limit\' parameter: %d."),this.base),gettext("Strictly positive integer expected."));
            } else {
                graphics.exprs = exprs;
                model.ipar = this.base;
                model.dstate = this.ini_c;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
